import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import { loginInterception } from './interception'

import AppRouterView from '@/Layout/components/RouterView/index.vue'

const Login = () =>
  import(/* webpackChunkName: "login" */ '@/views/Login/index.vue')

const BaseLayout = () =>
  import(/* webpackChunkName: "base-layout" */ '@/Layout/index.vue')

const Inbox = () =>
  import(/* webpackChunkName: "inbox" */ '@/views/Inbox/index.vue')

const InboxDetails = () =>
  import(
    /* webpackChunkName: "InboxDetails" */ '@/views/Inbox/Details/index.vue'
  )
const InboxEditor = () =>
  import(/* webpackChunkName: "InboxEditor" */ '@/views/Inbox/Editor/index.vue')

const Record = () =>
  import(/* webpackChunkName: "Record" */ '@/views/Record/index.vue')

const RecordDetails = () =>
  import(
    /* webpackChunkName: "RecordDetails" */ '@/views/Record/Details/index.vue'
  )

const Archive = () =>
  import(/* webpackChunkName: "Archive" */ '@/views/Archive/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: Login,
    meta: {
      transition: 'slide-right'
    }
  },
  {
    path: '/',
    component: BaseLayout,
    redirect: '/inbox',
    meta: {
      transition: 'slide-left'
    },
    children: [
      {
        path: '/inbox',
        component: AppRouterView,
        redirect: '/inbox/list',
        children: [
          {
            path: '/inbox/list',
            component: Inbox,
            meta: {
              title: '收件箱'
            }
          },
          {
            path: '/inbox/details/:id',
            component: InboxDetails,
            meta: {
              title: '邮件详情'
            }
          },
          {
            path: '/inbox/editor/:id',
            component: InboxEditor,
            meta: {
              title: '回复邮件'
            }
          }
        ]
      },
      {
        path: '/reply',
        component: AppRouterView,
        redirect: '/reply/record',
        children: [
          {
            path: '/reply/record',
            component: Record,
            meta: {
              title: '回复记录'
            }
          },
          {
            path: '/reply/details/:id',
            component: RecordDetails,
            meta: {
              title: '回复记录'
            }
          }
        ]
      },
      {
        path: '/archive',
        component: Archive,
        meta: {
          title: '个人中心'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 登录拦截
router.beforeEach(loginInterception)

export default router
