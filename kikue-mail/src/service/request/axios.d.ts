import 'axios'

declare module 'axios' {
  export interface HeadersDefaults {
    'Content-Type': string
    'X-Requested-With': string
  }
}
