import {useMemo,useState} from 'react'
import {useMutation,useQuery,useQueryClient} from '@tanstack/react-query'
import {Plus,Search,Edit2,Trash2,Printer,Download,X,Save,RefreshCw,Eye} from 'lucide-react'
import type {FieldDef,RecordItem,ResourceDef} from '../types'
import {dataService} from '../services/dataService'

function Field({field,value,onChange}:{field:FieldDef;value:any;onChange:(v:any)=>void}){
 return <label className="form-field"><span>{field.label}</span>{field.type==='textarea'?<textarea value={value??''} onChange={e=>onChange(e.target.value)} placeholder={field.placeholder}/>:field.type==='select'?<select value={value??''} onChange={e=>onChange(e.target.value)}><option value="">اختر...</option>{field.options?.map(o=><option key={o}>{o}</option>)}</select>:<input type={field.type||'text'} value={value??''} onChange={e=>onChange(field.type==='number'?(e.target.value===''?'':Number(e.target.value)):e.target.value)} placeholder={field.placeholder}/>}</label>
}
export default function ResourcePage({def}:{def:ResourceDef}){
 const qc=useQueryClient(),[search,setSearch]=useState(''),[modal,setModal]=useState(false),[editing,setEditing]=useState<RecordItem|null>(null),[form,setForm]=useState<Record<string,any>>({}),[selected,setSelected]=useState<RecordItem|null>(null)
 const query=useQuery({queryKey:['resource',def.key],queryFn:()=>dataService.list(def.key)})
 const rows=query.data||[]
 const filtered=useMemo(()=>rows.filter(row=>Object.values(row).some(v=>String(v??'').toLowerCase().includes(search.toLowerCase()))),[rows,search])
 const save=useMutation({mutationFn:()=>editing?dataService.update(def.key,editing.id,form):dataService.create(def.key,form),onSuccess:()=>{qc.invalidateQueries({queryKey:['resource',def.key]});setModal(false);setEditing(null);setForm({})}})
 const remove=useMutation({mutationFn:(id:string)=>dataService.remove(def.key,id),onSuccess:()=>qc.invalidateQueries({queryKey:['resource',def.key]})})
 const openNew=()=>{setEditing(null);setForm({});setModal(true)}
 const openEdit=(row:RecordItem)=>{setEditing(row);setForm({...row});setModal(true)}
 const startEdit=(row:RecordItem)=>openEdit(row)
 const format=(v:any)=>v===null||v===undefined||v===''?'—':typeof v==='number'?v.toLocaleString('ar-SA'):String(v)
 return <div className="resource-page">
  <div className="page-heading"><div><div className="eyebrow">إدارة النظام</div><h1>{def.title}</h1><p>{def.description}</p></div><div className="heading-actions"><button className="btn btn-light" onClick={()=>window.print()}><Printer size={16}/> طباعة</button><button className="btn btn-primary" onClick={openNew}><Plus size={17}/> إضافة {def.singular}</button></div></div>
  <div className="demo-banner">⚠ وضع العرض التجريبي: البيانات تحفظ محليًا في هذا المتصفح فقط، وليست بيانات حقيقية أو مشتركة بين الأجهزة.</div>
  <section className="panel resource-panel"><div className="resource-toolbar"><div className="search-box resource-search"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder={`ابحث في ${def.title}...`}/></div><div className="toolbar-info">{filtered.length.toLocaleString('ar-SA')} سجل</div><button className="icon-btn" onClick={()=>qc.invalidateQueries({queryKey:['resource',def.key]})} title="تحديث"><RefreshCw size={17}/></button></div>
  {query.isLoading?<div className="empty-state">جاري تحميل البيانات...</div>:query.isError?<div className="empty-state error">حدث خطأ أثناء تحميل البيانات.</div>:filtered.length===0?<div className="empty-state">لا توجد سجلات مطابقة. أضف سجلًا جديدًا للبدء.</div>:
  <div className="table-wrap"><table><thead><tr>{def.columns.map(c=><th key={c}>{def.fields.find(f=>f.key===c)?.label||c}</th>)}<th>الإجراءات</th></tr></thead><tbody>{filtered.map(row=><tr key={row.id}>{def.columns.map(c=><td key={c}>{format(row[c])}</td>)}<td><div className="row-actions"><button title="عرض" onClick={()=>setSelected(row)}><Eye size={15}/></button><button title="تعديل" onClick={()=>startEdit(row)}><Edit2 size={15}/></button><button title="حذف" className="danger-action" onClick={()=>{if(confirm(`هل تريد حذف السجل ${row.id}؟`))remove.mutate(row.id)}}><Trash2 size={15}/></button></div></td></tr>)}</tbody></table></div>}
  </section>
  {modal&&<div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setModal(false)}}><div className="modal"><div className="modal-head"><div><h2>{editing?`تعديل ${def.singular}`:`إضافة ${def.singular}`}</h2><p>أدخل البيانات المطلوبة ثم احفظ.</p></div><button className="icon-btn" onClick={()=>setModal(false)}><X/></button></div><div className="form-grid">{def.fields.map(field=><Field key={field.key} field={field} value={form[field.key]} onChange={v=>setForm(p=>({...p,[field.key]:v}))}/>)}</div><div className="modal-actions"><button className="btn btn-light" onClick={()=>setModal(false)}>إلغاء</button><button className="btn btn-primary" disabled={save.isPending} onClick={()=>save.mutate()}><Save size={16}/>{save.isPending?'جاري الحفظ...':'حفظ البيانات'}</button></div>{save.isError&&<p className="form-error">تعذر حفظ البيانات. تحقق من المدخلات أو اتصال الخادم.</p>}</div></div>}
  {selected&&<div className="modal-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}><div className="modal detail-modal"><div className="modal-head"><div><h2>تفاصيل السجل</h2><p>{selected.id}</p></div><button className="icon-btn" onClick={()=>setSelected(null)}><X/></button></div><div className="detail-grid">{def.fields.map(f=><div className="detail-item" key={f.key}><small>{f.label}</small><b>{format(selected[f.key])}</b></div>)}</div><div className="modal-actions"><button className="btn btn-light" onClick={()=>setSelected(null)}>إغلاق</button><button className="btn btn-primary" onClick={()=>{setSelected(null);openEdit(selected)}}><Edit2 size={16}/> تعديل</button></div></div></div>}
 </div>
}