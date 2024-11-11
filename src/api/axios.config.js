import axios from "axios"

export const baseUrl = import.meta.env.MODE === 'development' ? "http://localhost:3000/" : "http://112.74.15.57:3000/"; //用代理切换BaseUrl
export const apiPrefix = import.meta.env.MODE === 'development' ? "/webApi" : "";//api 前缀

axios.baseURL = baseUrl
axios.timeout = 10000
// 添加请求拦截器
axios.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器(拦截每次请求响应之后)
axios.interceptors.response.use(
    response => {
        // 在响应返回之后可以做一些操作
        // 设置新的token
        return response.data;// 只要data
    },
    error => {
        // 退出登录操作
        // 在请求失败时进行处理
        return Promise.reject(error);
    }
);

