import  AxiosRequest  from './request';
import { BASE_URL,TIME_OUT } from './request/config';
import localCache from '@/utils/cache';

export const masterReq = new AxiosRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    requestInterceptor: (config) => {
      const token = localCache.getCache("token")


      if(token) {
          if(config.headers)
          config.headers.Authorization = `Bearer ${token}`


      }

      return config
    },
    responseInterceptor: config => {

      return config
    },
    responseInterceptorCatch: config => {
      return config
    },
    requestInterceptorCatch: config => {
      return config
    }
  }
})
export const personReq = new AxiosRequest({
  baseURL: "http://localhost:3555", //本地自定义的一个服务器
  timeout: TIME_OUT,
  interceptor: {
    requestInterceptor: (config) => {


      return config
    },
    responseInterceptor: config => {

      return config
    },
    responseInterceptorCatch: config => {
      return config
    },
    requestInterceptorCatch: config => {
      return config
    }
  }
})


