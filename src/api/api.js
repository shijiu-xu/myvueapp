import http from "@/utils/http.js";

export const getNowMovie = (id=1)=>http("get","http://localhost:3000/data");

export const getCityList  = ()=>http("get","http://localhost:3000/list");

export const getBanner = ()=>http("post","/capi/product/qiuxie/open/homefirstv322",{os: 3})

