export interface IPagination {
  total: number
  current: number
  pageSize: number
  showQuickJumper: boolean
  showTotal: (total: number) => string
  onChange: (size: number) => void
  pageSizeOptions: number[]
}
