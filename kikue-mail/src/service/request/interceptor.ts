import NProgress from 'nprogress'

import 'nprogress/nprogress.css'

import errorMiddleware from './errorMiddleware'

import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 全局 请求拦截器
export function requestInterceptor(
  config: AxiosRequestConfig
): AxiosRequestConfig {
  NProgress.start()
  return config
}

export function requestInterceptorCatch(err: Error): Promise<never> {
  NProgress.done()
  errorMiddleware()
  return Promise.reject(err)
}

// 全局 响应拦截器
export function responseInterceptor<T>(
  res: AxiosResponse<any, T>
): AxiosResponse<any, T> {
  NProgress.done()
  return res.data
}

export function responseInterceptorCatch(err: Error): Promise<never> {
  NProgress.done()
  errorMiddleware()
  return Promise.reject(err)
}
