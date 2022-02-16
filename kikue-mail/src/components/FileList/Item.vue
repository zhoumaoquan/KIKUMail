<template>
  <div class="file-item">
    <div class="file-item-left">
      <img src="@/assets/image/file.png" />
    </div>
    <div class="file-item-right">
      <p class="title ellipsis">
        {{ item?.filename }}
      </p>

      <div class="control">
        <div class="control-item">
          <a href="javascript:;" @click="preview">预览</a>
        </div>
        <div class="control-item">
          <a :href="item?.path" :download="item?.filename">下载</a>
        </div>
        <div class="control-item" @click="reply(item?.id)">
          <a href="javascript:;">回复</a>
        </div>
        <div class="control-item">
          <a href="javascript:;">录用</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

import { useRouter } from 'vue-router'

import { message } from 'ant-design-vue'

import { pressReg } from './config'

import { fileOpenPreview } from '@/utils'

import type { Annex } from '@/service/Api/Inbox'

export default defineComponent({
  name: 'FileListItem',
  props: {
    item: {
      type: Object as PropType<Annex>
    }
  },
  setup(props) {
    const router = useRouter()
    const suffix = computed(() => props.item?.extension || '')
    const url = computed(() => props.item?.path || '')
    const preview = () => {
      if (pressReg.test(suffix.value)) {
        return message.warning('该类型文件暂不支持在线预览')
      }
      fileOpenPreview(url.value)
    }

    const reply = (id: number | undefined): void => {
      if (id) {
        router.push(`/inbox/editor/${id}`)
      }
    }

    return {
      preview,
      reply
    }
  }
})
</script>

<style lang="less">
.file-item {
  box-sizing: border-box;
  display: flex;
  padding: 28px 19px;
  width: 100%;

  &-left {
    flex-shrink: 0;
  }

  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
    overflow: hidden;

    .title {
      font-size: 14px;
      font-family: HarmonyOS Sans SC;

      color: #333333;
    }

    .control {
      width: 300px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .control-item a {
      font-size: 14px;
      font-family: HarmonyOS Sans SC;
      font-weight: 300;

      color: #3387e2;
    }

    .control-item a:hover,
    .control-item a:active {
      font-weight: 400;
      text-decoration: underline;
    }
  }
}
</style>
