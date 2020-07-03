import axios from "axios";

const http = axios.create({
  timeout: 5000,
  withCredentials: true,
});

http.interceptors.request.use(
  (config) => {
    if (config.method == "post") {
      config.data = config.data;
    } else if (config.method == "get") {
      config.params = { ...config.data };
    }
    return config;
  },
  (e) => {
    Promise.reject(e);
  }
);

http.interceptors.response.use(
  (res) => {
    if (res.statusText === "ok") {
      return res.data;
    }
  },
  (e) => {
    Promise.reject(e);
  }
);


// axios 的处理
export default (method, url, data = {}) => {
  if (method == "get") {
    return http.get(url, { params: data });
  } else if (method == "post") {
    return http.post(url, { params: data });
  }else{
      return;
  }
};
