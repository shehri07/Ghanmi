import type {RecordItem} from '../types'
const samples:Record<string,RecordItem[]> = {
 animals:[
  {id:'AN-1001',tag:'AN-1001',type:'نعيمي',gender:'ذكر',birthDate:'2025-04-12',weight:48,status:'نشط',purchasePrice:1450},
  {id:'AN-1002',tag:'AN-1002',type:'حري',gender:'أنثى',birthDate:'2025-06-03',weight:39,status:'نشط',purchasePrice:1180},
  {id:'AN-1003',tag:'AN-1003',type:'سواكني',gender:'ذكر',birthDate:'2025-01-22',weight:52,status:'مباع',purchasePrice:1320}
 ],
 purchases:[
  {id:'PUR-001',reference:'PUR-001',supplier:'مؤسسة الوادي',date:'2026-11-08',item:'أغنام نعيمي',quantity:12,total:9600,status:'مدفوعة'},
  {id:'PUR-002',reference:'PUR-002',supplier:'مزارع الخير',date:'2026-11-04',item:'أعلاف مركزة',quantity:30,total:1850,status:'آجلة'}
 ],
 suppliers:[{id:'SUP-001',name:'مؤسسة الوادي',phone:'05XXXXXXXX',city:'أبها',category:'أغنام',balance:0,notes:'مورد تجريبي'},{id:'SUP-002',name:'مزارع الخير',phone:'05XXXXXXXX',city:'خميس مشيط',category:'أعلاف',balance:1850,notes:''}],
 customers:[{id:'CUS-001',name:'عميل تجريبي 1',phone:'05XXXXXXXX',city:'أبها',email:'',balance:0,notes:''}],
 sales:[{id:'SAL-001',invoice:'SAL-001',date:'2026-11-07',customer:'عميل تجريبي 1',animalTag:'AN-1003',quantity:1,total:2400,payment:'تحويل',status:'مكتملة'}],
 expenses:[{id:'EXP-001',date:'2026-11-06',category:'أعلاف',description:'شراء أعلاف',amount:1850,paidBy:'تحويل',notes:''}]
}
export function getMockRecords(key:string):RecordItem[]{return JSON.parse(JSON.stringify(samples[key]||[]))}
