<template>
  <div class="app-header">
    <div class="app-header-left">
      <h2 class="app-header-title">{{ title }}</h2>
      <p class="app-header-text">
        <slot></slot>
      </p>
    </div>
    <div class="app-header-right">
      <a-button type="primary" size="large">个人中心</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'AppHearder',
  setup() {
    const route = useRoute()

    const title = computed(() => route.meta.title)

    return {
      title
    }
  }
})
</script>

<style lang="less" scoped>
.app-header {
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
