import axios from 'axios'

import {
  requestInterceptor,
  responseInterceptor,
  requestInterceptorCatch,
  responseInterceptorCatch
} from './interceptor'

import errorMiddleware from './errorMiddleware'

import type { AxiosInstance } from 'axios'

import type { KRequestConfig, IRequestInterceptor, IRequest } from './types'

class KRequest {
  instance: AxiosInstance
  interceptor?: IRequestInterceptor
  constructor(config: KRequestConfig) {
    this.instance = axios.create(config)
    this.instance.defaults.headers['Content-Type'] = 'application/json'
    this.instance.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'

    this.interceptor = config.interceptor

    this.registerInterceptor()
  }

  /**
   * 注册拦截器
   */
  registerInterceptor(): void {
    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptor?.responseInterceptor,
      this.interceptor?.responseInterceptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      requestInterceptor,
      requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      responseInterceptor,
      responseInterceptorCatch
    )
  }

  transformRequest(config: IRequest): IRequest {
    const transforms = config.interceptor?.request
    let newConfig = config

    if (transforms && Array.isArray(transforms)) {
      while (transforms.length) {
        const intercept = transforms.shift()
        if (intercept) {
          newConfig = intercept(newConfig)
        }
      }
    } else if (transforms && typeof transforms === 'function') {
      newConfig = transforms(newConfig)
    }

    return newConfig
  }

  transformResponse<T>(config: IRequest, result: T): T {
    const transforms = config.interceptor?.response
    let newResult = result

    if (transforms && Array.isArray(transforms)) {
      while (transforms.length) {
        const intercept = transforms.shift()
        if (intercept) {
          newResult = intercept(newResult)
        }
      }
    } else if (transforms && typeof transforms === 'function') {
      newResult = transforms(newResult)
    }

    return newResult
  }

  request<T>(config: IRequest<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      let newConfig = config

      newConfig = this.transformRequest(config)

      this.instance
        .request<any, T>(newConfig)
        .then((res) => {
          const result = this.transformResponse(config, res) as any
          if (result.code === 200) {
            resolve(result)
          } else {
            errorMiddleware(result.code, result.msg)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default KRequest
