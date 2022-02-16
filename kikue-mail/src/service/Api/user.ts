import http from '../index'

import type { IResponse } from '@/service/request/types'

enum UserApi {
  UserInfo = '/api/auth/info'
}

export interface IUserInfo {
  id: number
  name: string
}

// 获取用户信息
export function getUserInfo(): Promise<IResponse<IUserInfo>> {
  return http.request({
    url: UserApi.UserInfo,
    method: 'GET'
  })
}
