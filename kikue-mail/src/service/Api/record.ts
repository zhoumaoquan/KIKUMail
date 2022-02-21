import http from '../index'

import { IResponse } from '../request/types'

import { IListParams, ITableList, Receive, Original, Annex } from './types'

enum RecordApi {
  List = '/api/reply/list'
}

export interface IRecordDetail {
  id: number
  rcpt: string
  subject: string
  content: string
  original: Original
  reply: Annex[]
}

// 回复记录列表
export function recordList(
  params: IListParams
): Promise<ITableList<Receive[]>> {
  return http.request({
    url: RecordApi.List,
    method: 'GET',
    params
  })
}

// 回复记录详情
export function recordDetail(id: number): Promise<IResponse<IRecordDetail>> {
  return http.request({
    url: `/api/reply/${id}/details`,
    method: 'GET'
  })
}
