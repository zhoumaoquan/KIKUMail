import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Login = () =>
  import(/* webpackChunkName: "login" */ '@/views/Login/index.vue')

const BaseLayout = () =>
  import(/* webpackChunkName: "base-layout" */ '@/Layout/index.vue')

const Inbox = () =>
  import(/* webpackChunkName: "inbox" */ '@/views/Inbox/index.vue')

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
    meta: {
      transition: 'slide-left'
    },
    children: [
      {
        path: '/',
        component: Inbox,
        meta: {
          title: '收件箱'
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
