import * as Storage from '@/utils/storage'

import * as context from '@/assets/context'

import type { RouteLocationNormalized } from 'vue-router'

// 登录路由守卫
export function loginInterception(
  to: RouteLocationNormalized
): string | boolean | void {
  const token = Storage.getStorage(context.TOKEN)

  if (token) {
    if (to.path === '/login') {
      return '/'
    }

    return true
  } else {
    if (to.path !== '/login') {
      return '/login'
    }

    return true
  }
}
