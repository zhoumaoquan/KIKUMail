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
