import http from '../index'

import type { IResponse } from '@/service/request/types'

enum UserApi {
  UserInfo = '/api/auth/info',
  Password = '/api/auth/password'
}

export interface IUserInfo {
  id: number
  name: string
}

export interface IPassword {
  password: string
  password_confirmation: string
}

// 获取用户信息
export function getUserInfo(): Promise<IResponse<IUserInfo>> {
  return http.request({
    url: UserApi.UserInfo,
    method: 'GET'
  })
}

// 修改密码
export function editPassword(data: IPassword): Promise<IResponse> {
  return http.request({
    url: UserApi.Password,
    method: 'PATCH',
    data
  })
}
