import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig, Method } from "axios"
const instance:AxiosInstance = axios.create({
    baseURL: 'http://toutiao.itheima.net',
    timeout: 1000,
});
// 添加请求拦截器
instance.interceptors.request.use( (config:InternalAxiosRequestConfig)=> {
    const token = localStorage.getItem('token')
    config.headers.Authorization = token
    return config;
},  (error:AxiosError)=> {
    return Promise.reject(error);
});
// 添加响应拦截器
instance.interceptors.response.use((response:AxiosResponse)=> {
    return response.data;
},  (error:AxiosError)=> {
    return Promise.reject(error);
});
type DataType<T = any> = {
    code: number;
    message: string;
    data: T;
};

// 完整请求
const request = <T = any>(
    url: string,
    method: Method = "GET",
    data?: Object,
    options?: AxiosRequestConfig
) => {
    return instance.request<T, DataType<T>>({
        url,
        method,
        [method === "GET" ? "params" : "data"]: data,
        ...options,
    });
};

// GET请求
export const get = <T = any>(url: string, data: Object) => {
    request<T>(url, "GET", data);
};

// POST请求
export const post = <T = any>(url: string, data: Object) => {
    request<T>(url, "POST", data);
};

// PUT请求
export const put = <T = any>(url: string, data: Object) => {
    request<T>(url, "PUT", data);
};

// DELETE请求
export const del = <T = any>(url: string, data: Object) => {
    request<T>(url, "DELETE", data);
};

export default request;