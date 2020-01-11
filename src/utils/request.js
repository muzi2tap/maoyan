import axios from "axios";
import loading from "../lib/loading/index.js"

const server=axios.create({
    timeout:5000,
    // baseUrl:""
    withCredentials:true
})

// 请求拦截
server.interceptors.request.use((config)=>{
    if(config.method=="get"){
        config.params={...config.data};
    }
    loading.loadingMount();
    return config;
    // config.headers["content-type"]="application/json"
},(err)=>{
    Promise.reject(err)
})

// 响应拦截
server.interceptors.response.use((res)=>{
    if(res.status==200){
        loading.loadingDestroy();
        return res.data;
    }
    
})

export default server;