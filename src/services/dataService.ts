import {USE_MOCK_DATA} from '../config'
import {resourceApi} from '../api/resources'
import {addRecord,deleteRecord,readRecords,updateRecord} from './localStore'
import type {RecordItem} from '../types'
export const dataService={
 list:(key:string):Promise<RecordItem[]>=>USE_MOCK_DATA?Promise.resolve(readRecords(key)):resourceApi.list<RecordItem>(key),
 create:(key:string,data:Record<string,unknown>):Promise<RecordItem>=>USE_MOCK_DATA?Promise.resolve(addRecord(key,data)):resourceApi.create<RecordItem>(key,data),
 update:(key:string,id:string,data:Record<string,unknown>):Promise<RecordItem>=>USE_MOCK_DATA?Promise.resolve(updateRecord(key,id,data) as RecordItem):resourceApi.update<RecordItem>(key,id,data),
 remove:(key:string,id:string):Promise<void>=>USE_MOCK_DATA?(deleteRecord(key,id),Promise.resolve()):resourceApi.remove(key,id)
}
