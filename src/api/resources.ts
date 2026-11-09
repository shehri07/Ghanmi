import { api } from './client'
export const resourceApi = {
 list: async <T,>(resource:string) => (await api.get<T[]>(`/api/${resource}`)).data,
 get: async <T,>(resource:string,id:string) => (await api.get<T>(`/api/${resource}/${id}`)).data,
 create: async <T,>(resource:string,data:unknown) => (await api.post<T>(`/api/${resource}`,data)).data,
 update: async <T,>(resource:string,id:string,data:unknown) => (await api.put<T>(`/api/${resource}/${id}`,data)).data,
 remove: async (resource:string,id:string) => (await api.delete(`/api/${resource}/${id}`)).data
}