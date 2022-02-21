<template>
  <div class="file-item">
    <div class="file-item-left">
      <img src="@/assets/image/file.png" />
    </div>
    <div class="file-item-right">
      <p class="title ellipsis">
        {{ item?.filename || item?.name }}
      </p>

      <template v-if="showType === Display.EXHIBIT">
        <div class="control">
          <div class="control-item">
            <a href="javascript:;" @click="preview">预览</a>
          </div>
          <div class="control-item">
            <a :href="item?.path" :download="item?.filename">下载</a>
          </div>
          <div class="control-item" @click="reply(item?.id, ReplyType.REPLY)">
            <a href="javascript:;">回复</a>
          </div>
          <div class="control-item" @click="reply(item?.id, ReplyType.HIRE)">
            <a href="javascript:;">录用</a>
          </div>
        </div>
      </template>
      <template v-if="showType === Display.RECORD">
        <div class="control">
          <div class="control-item">
            <a href="javascript:;" @click="preview">预览</a>
          </div>
          <div class="control-item">
            <a :href="item?.path" :download="item?.filename">下载</a>
          </div>
        </div>
      </template>
      <template v-if="showType === Display.UPLOAD">
        <div class="control">
          <div class="control-item">
            <a href="javascript:;" @click="removeItem">删除</a>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

import { useRouter } from 'vue-router'

import { message } from 'ant-design-vue'

import { pressReg, ReplyType } from './config'

import { fileOpenPreview } from '@/utils'

import type { Annex } from '@/service/Api/types'

import { Display } from './config'

export default defineComponent({
  name: 'FileListItem',
  props: {
    item: {
      type: Object as PropType<Annex>
    },
    index: {
      type: Number as PropType<number>
    },
    showType: {
      type: Number as PropType<Display>,
      default: Display.EXHIBIT
    }
  },
  emits: ['remove'],
  setup(props, { emit }) {
    const router = useRouter()
    const suffix = computed(() => props.item?.extension || '')
    const url = computed(() => props.item?.path || '')
    const preview = () => {
      if (pressReg.test(suffix.value)) {
        return message.warning('该类型文件暂不支持在线预览')
      }
      fileOpenPreview(url.value)
    }

    const reply = (id: number | undefined, type: ReplyType): void => {
      if (id) {
        router.push({
          path: `/inbox/editor/${id}`,
          query: {
            type
          }
        })
      }
    }

    const removeItem = () => {
      emit('remove', props.index)
    }

    return {
      preview,
      reply,
      ReplyType,
      removeItem,
      Display
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
