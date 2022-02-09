<template>
  <router-link class="sider-item" :to="path">
    <div class="sider-item-icon">
      <img v-if="path === currentPath" :src="iconActive" />
      <img v-else :src="icon" />
    </div>
    <span class="sider-item-title">{{ title }}</span>
  </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'SiderItem',
  props: {
    icon: {
      type: String as PropType<string>,
      required: true
    },
    title: {
      type: String as PropType<string>,
      required: true
    },
    iconActive: {
      type: String as PropType<string>,
      required: true
    },
    path: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup() {
    const route = useRoute()

    const currentPath = computed(() => route.path)
    console.log(currentPath.value)

    return {
      currentPath
    }
  }
})
</script>

<style lang="less" scoped>
.sider-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 160px;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s;
  // background-color: #fff;

  &-icon {
    padding-bottom: 20px;
  }

  &-title {
    font-size: 16px;
    font-family: HarmonyOS Sans SC;
    font-weight: 300;
    letter-spacing: 2px;
    line-height: 25px;
    color: #ecefc4;
  }
}
.router-link-active {
  background-color: #fff;

  .sider-item-title {
    color: #349e81;
  }
}
</style>
