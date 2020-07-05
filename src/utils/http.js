import axios from "axios";

const http = axios.create({
    //baseUrl:""
    timeout:5000,
    withCredentials:true
})

http.interceptors.request.use((config)=>{
    if(config.method == "post"){
        config.data = config.data;
    }else if(config.method == "get"){

        config.data?config.params = {...config.data}:config.params = {...config.params};
        
    }

    return config;
},(e)=>{
    Promise.reject(e);
})


http.interceptors.response.use((res)=>{
    if(res.statusText === "OK"){
        return res.data;
    }
},(e)=>{
    Promise.reject(e);
})


export default (method,url,data={})=>{
    if(method == "get"){
        return http.get(url,{params:data});
    }else if(method == "post"){
        return http.post(url,data);
    }else{
        return;
    }
}



