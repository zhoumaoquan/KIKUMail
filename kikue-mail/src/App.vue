<template>
  <ConfigProvider :locale="locale">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || ''">
        <component :is="Component" />
      </transition>
    </router-view>
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { ConfigProvider, message } from 'ant-design-vue'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zhCN')

message.config({
  duration: 2,
  maxCount: 2
})

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider
  },
  setup() {
    return {
      locale: zhCN
    }
  }
})
</script>

<style lang="less">
#nprogress .bar {
  background: #349e8c !important; //自定义颜色
}
</style>
