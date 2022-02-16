import http from '../index'

import type { IResponse } from '@/service/request/types'

enum LoginApi {
  LoginCode = '/api/match/captcha',
  UserLogin = '/api/auth/login'
}

export interface IVerifyCode extends IResponse {
  sensitive: boolean
  key: string
  img: string
}

export interface ILoginInfo {
  username: string
  password: string
  captcha: string
  captcha_key: string
}

export interface ILoginRes {
  code: number
  token: string
  token_type: string
  expires_in: number
}

// 获取验证码
export function getCode(): Promise<IVerifyCode> {
  return http.request({
    url: LoginApi.LoginCode,
    method: 'GET'
  })
}

// 登录
export function userLogin(params: ILoginInfo): Promise<ILoginRes> {
  return http.request({
    url: LoginApi.UserLogin,
    method: 'POST',
    data: params
  })
}
