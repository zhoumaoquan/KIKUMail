<template>
  <div class="app-main-layout">
    <AppHeader>
      <slot name="header"></slot>
    </AppHeader>
    <div class="app-main-box">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppHeader from '../Header/index.vue'

export default defineComponent({
  name: 'AppLayout',
  components: {
    AppHeader
  }
})
</script>

<style lang="less" scoped>
.app-main-layout {
  box-sizing: border-box;
  padding-left: 35px;
  width: 100%;
  height: 100%;
}
.app-main-box {
  height: 100%;
  padding-right: 29px;
  overflow-y: scroll;
}

.app-main-box::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}

.app-main-box::-webkit-scrollbar-track {
  background-color: #fff;
}

.app-main-box::-webkit-scrollbar-thumb {
  background-color: #fff;
  border-radius: 50px;
}
</style>
