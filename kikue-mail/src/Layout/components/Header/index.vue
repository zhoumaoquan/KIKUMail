<template>
  <div class="app-header">
    <div class="app-header-left">
      <h2 class="app-header-title">{{ title }}</h2>
      <p class="app-header-text">
        <slot></slot>
      </p>
    </div>
    <div class="app-header-right">
      <template v-if="abort">
        <a-button type="primary" size="large" @click="signOut"
          >退出登录</a-button
        >
      </template>
      <template v-else>
        <a-button type="primary" size="large" @click="routerLink"
          >个人中心</a-button
        >
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, createVNode } from 'vue'

import { useRoute, useRouter } from 'vue-router'

import { Modal, message } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'

import { clearStorage } from '@/utils/storage'

export default defineComponent({
  name: 'AppHearder',
  props: {
    abort: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  setup() {
    const router = useRouter()

    const route = useRoute()

    const title = computed(() => route.meta.title)

    const routerLink = () => {
      router.push('/archive')
    }

    const signOut = () => {
      Modal.confirm({
        title: '您确定要退出当前登录账号吗?',
        icon: createVNode(ExclamationCircleOutlined),
        content: createVNode(
          'div',
          { style: 'color:red;' },
          '点击确定退出登录'
        ),
        onOk() {
          clearStorage()
          message.success('退出登录成功', 2, () => {
            router.replace('/login')
          })
        },
        class: 'test'
      })
    }

    return {
      title,
      routerLink,
      signOut
    }
  }
})
</script>

<style lang="less" scoped>
.app-header {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding-right: 35px;
  background-color: #fff;

  &-left {
    display: flex;
  }

  &-title {
    padding-right: 10px;
    font-size: 30px;
    font-family: HarmonyOS Sans SC;
    font-weight: 500;
    line-height: 40px;
    color: #333333;
  }

  &-text {
    line-height: 52px;
  }
}
</style>
