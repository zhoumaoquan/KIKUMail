import Request from './request'

import * as Storage from '@/utils/storage'

import { TOKEN, TOKEN_TYPE } from '@/assets/context'

import { BASE_URL, TIMEOUT } from './config'

const http = new Request({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptor: {
    requestInterceptor: (config) => {
      const Token = Storage.getStorage(TOKEN)
      const TokenType = Storage.getStorage(TOKEN_TYPE)

      if (Token && config.headers) {
        config.headers.Authorization = `${TokenType} ${Token}`
      }

      return config
    }
  }
})

export default http
