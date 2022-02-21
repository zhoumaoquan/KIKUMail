import http from '../index'

import { IResponse } from '../request/types'

import type { ITableList, IListParams, Receive, Original, Annex } from './types'

enum InboxApi {
  List = '/api/contribution/list',
  Reply = '/api/contribution/reply'
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
 * 回复详情 类型
 */
export interface IReplyDetails {
  contribution_annex_id: number
  rcpt: string
  subject: string
  original: Original
}

export interface IReplyParams {
  reply_content: string
  contribution_annex_id: number
  files: any
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

// 设置邮件为已读
export function setReadInbox(id: number): Promise<IResponse> {
  return http.request({
    url: `/api/contribution/${id}/read`,
    method: 'PATCH'
  })
}

// 收件详情
export function inboxDetail(id: number): Promise<IResponse<IInboxDetails>> {
  return http.request({
    url: `/api/contribution/${id}/details`,
    method: 'GET'
  })
}

// 回复邮件所需信息
export function replyDetail(id: number): Promise<IResponse<IReplyDetails>> {
  return http.request({
    url: `/api/contribution/${id}/reply`,
    method: 'GET'
  })
}

// 回复邮件
export function replyMail(params: IReplyParams | any): Promise<IResponse> {
  return http.request({
    url: InboxApi.Reply,
    method: 'POST',
    data: params
  })
}
