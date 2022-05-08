import  AxiosRequest  from './request';
import { BASE_URL,TIME_OUT } from './request/config';

const masterReq = new AxiosRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptor: {
    requestInterceptor: (config) => {
      console.log("请求成功拦截");

      return config
    },
    responseInterceptor: config => {
      console.log("响应成功拦截")
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

export default masterReq
