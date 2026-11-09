export type FieldType = 'text'|'number'|'date'|'select'|'textarea'
export interface FieldDef {key:string;label:string;type?:FieldType;required?:boolean;options?:string[];placeholder?:string}
export interface ResourceDef {key:string;title:string;singular:string;description:string;fields:FieldDef[];columns:string[]}
export interface RecordItem {id:string;[key:string]:any}
