import http from '../index'

import { IResponse } from '../request/types'

import { ITableList } from './types'

enum InboxApi {
  List = '/api/contribution/list'
}

/**
 * 列表请求参数 类型
 */
export interface IListParams {
  text: string
  page: number
}

/**
 * 收件列表 单项类型
 */
export interface Receive {
  id: number
  sender: string
  subject: string
  create_at: string
  is_read: boolean
  is_read_str: string
}

/**
 * 附件类型
 */
export interface Annex {
  id: number
  path: string
  filename: string
  extension: string
}

/**
 * 收件详情 类型
 */
export interface IInboxDetails {
  id: number
  sender: string
  subject: string
  create_at: string
  annex: Annex[]
  is_next?: any
}

/**
 * 回复详情数据 原始邮件信息 类型
 */
export interface Original {
  sender: string
  create_at: string
  rcpt: string
  subject: string
}

/**
 * 回复详情 类型
 */
export interface IReplyDetails {
  contribution_annex_id: number
  rcpt: string
  subject: string
  original: Original
}

// 收件箱列表
export function inboxList(params: IListParams): Promise<ITableList<Receive[]>> {
  return http.request({
    url: InboxApi.List,
    method: 'GET',
    params: {
      page: params?.page || 1,
      text: params?.text
    }
  })
}

// 收件详情
export function inboxDetail(id: number): Promise<IResponse<IInboxDetails>> {
  return http.request({
    url: `/api/contribution/${id}/details`,
    method: 'GET'
  })
}

export function replyDetail(id: number): Promise<IResponse<IReplyDetails>> {
  return http.request({
    url: `/api/contribution/${id}/reply`,
    method: 'GET'
  })
}
