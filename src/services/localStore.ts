import {getMockRecords} from '../data/mock'
import type {RecordItem} from '../types'
const keyFor=(key:string)=>`ghanmi_demo_${key}`
export function readRecords(key:string):RecordItem[]{const raw=localStorage.getItem(keyFor(key));if(raw)return JSON.parse(raw);const initial=getMockRecords(key);localStorage.setItem(keyFor(key),JSON.stringify(initial));return initial}
export function saveRecords(key:string,rows:RecordItem[]){localStorage.setItem(keyFor(key),JSON.stringify(rows))}
export function addRecord(key:string,data:Record<string,unknown>){const rows=readRecords(key);const row={...data,id:`${key.slice(0,3).toUpperCase()}-${Date.now().toString().slice(-6)}`} as RecordItem;saveRecords(key,[row,...rows]);return row}
export function updateRecord(key:string,id:string,data:Record<string,unknown>){const rows=readRecords(key).map(r=>r.id===id?{...r,...data}:r);saveRecords(key,rows);return rows.find(r=>r.id===id)}
export function deleteRecord(key:string,id:string){saveRecords(key,readRecords(key).filter(r=>r.id!==id))}
