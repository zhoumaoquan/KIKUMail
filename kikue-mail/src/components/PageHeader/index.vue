<template>
  <div class="page-header">
    <div class="back-track" @click="back">
      <img src="@/assets/image/back.png" />
      <span>返回</span>
    </div>

    <div class="more-btn" v-if="isMore" @click="moreCallback">
      <span>下封未读</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageHeader',
  props: {
    isMore: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  emits: ['more'],
  setup(props, { emit }) {
    const router = useRouter()

    const back = () => {
      router.back()
    }

    const moreCallback = () => {
      emit('more')
    }

    return {
      back,
      moreCallback
    }
  }
})
</script>

<style lang="less" scoped>
.page-header {
  display: flex;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 35px;
  width: 100%;
  background-color: #fff;

  .back-track {
    display: flex;
    align-items: center;

    cursor: pointer;

    span {
      margin-left: 10px;
      font-size: 16px;
      font-family: HarmonyOS Sans SC;
      color: #349e81;
      letter-spacing: 2px;
    }
  }

  .more-btn {
    margin-left: 53px;

    font-size: 16px;
    font-family: HarmonyOS Sans SC;
    color: #349e81;
    letter-spacing: 2px;
    cursor: pointer;
  }
}
</style>
