import axios from 'axios'
import { API_BASE_URL } from '../config'
export const api = axios.create({baseURL:API_BASE_URL,timeout:20000,headers:{Accept:'application/json','Content-Type':'application/json'}})
api.interceptors.request.use(c=>{const token=localStorage.getItem('ghanmi_access_token');if(token)c.headers.Authorization=`Bearer ${token}`;return c})
api.interceptors.response.use(r=>r,e=>Promise.reject(e))