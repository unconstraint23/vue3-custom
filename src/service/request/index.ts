import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { RequestConfig,AxiosInterceptors } from './type';
import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'

const DEAFULT_LOADING = true
class AxiosRequest {
  instance:AxiosInstance
  interceptors?: AxiosInterceptors
  showLoading: boolean
  loading: any
  constructor(config:RequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEAFULT_LOADING
    this.interceptors = config.interceptor
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

     // 2.添加所有的实例都有的拦截器
     this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据....',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        console.log("common interceptor");

        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 将loading移除
        this.loading.close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败~, 错误信息')
        } else {
          return data
        }

      },
      (err) => {
        // 将loading移除
        this.loading.close()

        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404的错误~')
        }
        return err
      }
    )
  }
  request<T = any>(config: RequestConfig<T>):Promise<T> {
    return new Promise((resolve, reject) => {
      if(config.interceptor?.requestInterceptor) {
      config = config.interceptor.requestInterceptor(config)
    }
    if (config.showLoading === false) {
      this.showLoading = config.showLoading
    }
    this.instance.request<any,T>(config).then(res => {
      // console.log(res);
      this.showLoading = DEAFULT_LOADING
      resolve(res)
    })
    })

  }
  get<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default AxiosRequest
