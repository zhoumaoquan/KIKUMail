<template>
  <a-modal
    :visible="visible"
    title="上传附件"
    :z-index="10001"
    @cancel="handleCancel"
  >
    <a-upload-dragger
      v-model:fileList="fileList"
      name="file"
      :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      @change="handleChange"
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
import { defineComponent, PropType, ref } from 'vue'

import { InboxOutlined } from '@ant-design/icons-vue'

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
    const fileList = ref()

    const handleChange = () => {
      console.log(1)
    }

    const handleCancel = () => {
      emit('update:visible', false)
    }

    return {
      fileList,
      handleChange,
      handleCancel
    }
  },
  components: {
    InboxOutlined
  }
})
</script>

<style lang="less" scoped></style>
