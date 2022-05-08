import { AxiosRequestConfig, AxiosResponse } from "axios"

export interface AxiosInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptor?: AxiosInterceptors
  showLoading?: boolean
}
