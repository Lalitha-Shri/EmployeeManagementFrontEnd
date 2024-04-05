import axios from 'axios'
import { getToken } from './AuthService';

axios.interceptors.request.use(function (config) {
  config.headers["Authorization"]=getToken();
  return config;
}, function (error) {
  
  return Promise.reject(error);
});

const Base_URL= "http://localhost:8080/user";

 export const getAllEmployee=()=>axios.get(Base_URL);

 export const getEmployee=(id)=>axios.get(Base_URL+ "/" + id);

 export const saveEmployee=(user)=>axios.post(Base_URL,user);

 export const updateEmployee=(id,user)=>axios.put(Base_URL+"/"+id,user);

 export const deleteEmployee=(id)=>axios.delete(Base_URL+"/"+id);