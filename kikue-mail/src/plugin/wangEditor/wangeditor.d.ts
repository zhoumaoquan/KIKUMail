import 'wangeditor'

declare module 'wangeditor' {
  export default class Editor {
    annexMenuCallback?: () => void
  }
}
