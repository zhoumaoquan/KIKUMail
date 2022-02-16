import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IResponse<T = any> {
  code: number
  data?: T
  msg?: string
  [propName: string]: any
}

export interface IRequestInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface KRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptor?: IRequestInterceptor<T>
  loading?: boolean
}

export type RequestInterceptor = IRequestInterceptor['requestInterceptor']

export type ResponseInterceptor<T> =
  IRequestInterceptor<T>['responseInterceptor']

export interface IRequest<T = any> extends AxiosRequestConfig {
  interceptor?: {
    request?: RequestInterceptor | RequestInterceptor[]
    response?: ResponseInterceptor<T> | ResponseInterceptor<T>[]
  }
}
