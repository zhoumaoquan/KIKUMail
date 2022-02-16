import router from '@/router'

import { message } from 'ant-design-vue'

import { clearStorage } from '@/utils/storage'

export default function (code?: number, msg?: string): void {
  switch (code) {
    case 403:
      message.error(msg)
      break
    case 401:
      // 清除本地缓存
      clearStorage()

      message.warning({
        content: '登录状态已过期或失效，请重新登录，正在跳转登录页...',
        onClose: () => {
          router.replace('/login')
        }
      })
      break
    case 408:
      message.warning('请求超时！')
      break
    default:
      message.error(msg ? msg : '请求出错啦，请检查后重试')
  }
}
