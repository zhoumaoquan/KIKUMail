<template>
  <a-modal
    :visible="visible"
    title="上传附件"
    :z-index="10001"
    @cancel="handleCancel"
    @ok="saveFile"
  >
    <a-upload-dragger
      :fileList="fileList"
      :before-upload="beforeUpload"
      :multiple="true"
    >
      <p class="ant-upload-drag-icon">
        <inbox-outlined></inbox-outlined>
      </p>
      <p class="ant-upload-text">单击或拖动文件到该区域进行上传</p>
      <p class="ant-upload-hint">支持单文件或多文件批量上传。</p>
    </a-upload-dragger>
  </a-modal>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, inject } from 'vue'

import { message } from 'ant-design-vue'

import { InboxOutlined } from '@ant-design/icons-vue'

import { REPLY } from '@/views/Inbox/config'

import type { UploadProps } from 'ant-design-vue'

import { SetReplyFn, ValueKey } from '@/views/Inbox/Editor/types'

export default defineComponent({
  name: 'AppUpload',
  props: {
    visible: {
      type: Boolean as PropType<boolean>,
      defauilt: false
    }
  },
  emits: ['update:visible'],
  setup(props, { emit }) {
    const fileList = ref<UploadProps['fileList'][]>([])

    const fn = inject<SetReplyFn>(REPLY)

    const handleCancel = () => {
      fileList.value = []
      emit('update:visible', false)
    }

    const beforeUpload: UploadProps['beforeUpload'] = (file) => {
      fileList.value = [...fileList.value, file]

      return false
    }

    const saveFile = () => {
      if (fileList.value.length === 0) {
        return message.warning('请上传附件')
      }

      fn?.(ValueKey.Files, fileList.value)

      handleCancel()
    }

    return {
      fileList,
      handleCancel,
      beforeUpload,
      saveFile
    }
  },
  components: {
    InboxOutlined
  }
})
</script>

<style lang="less" scoped></style>
