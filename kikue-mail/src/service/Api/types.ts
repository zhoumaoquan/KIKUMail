/**
 * 列表请求参数 类型
 */
export interface IListParams {
  text: string
  page: number
}

/**
 * 收件/回复 列表 单项类型
 */
export interface Receive {
  id: number
  sender: string
  subject: string
  create_at: string
  is_read?: boolean
  is_read_str?: string
}

export interface Links {
  first: string
  last: string
  prev?: any
  next?: any
}

export interface Link {
  url: string
  label: string
  active: boolean
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  links: Link[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface ITableList<T> {
  data: T
  links: Links
  meta: Meta
  code: number
  count?: number
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
 * 附件类型
 */
export interface Annex {
  id: number
  path: string
  filename: string
  extension: string
  name?: string
}
