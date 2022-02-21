import { BASE_URL } from '@/service/config'

import { TOKEN, TOKEN_TYPE } from '@/assets/context'

import * as Storage from '@/utils/storage'

const upload = '/api/contribution/reply/upload'

export const ANNEX = 'annex'

export const FILENAME = 'file'

export const MENUS: string[] = [
  'head',
  'bold',
  'fontSize',
  'fontName',
  'italic',
  'underline',
  'strikeThrough',
  'indent',
  'lineHeight',
  'foreColor',
  'backColor',
  'link',
  'list',
  'todo',
  'justify',
  'quote',
  'image',
  'table',
  'code',
  'splitLine',
  'undo',
  'redo',
  ANNEX
]

export const setUploadHeader = (): { Authorization: string } => {
  const Token = Storage.getStorage(TOKEN)
  const TokenType = Storage.getStorage(TOKEN_TYPE)

  return {
    Authorization: `${TokenType} ${Token}`
  }
}

export const UPLOAD_URL = `${BASE_URL}${upload}`
