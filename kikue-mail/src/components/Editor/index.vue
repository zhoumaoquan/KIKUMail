<template>
  <div ref="editor"></div>

  <app-upload v-model:visible="visible"></app-upload>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'

import AppUpload from './Upload/index.vue'

import useWangEditor from '@/plugin/wangEditor'

export default defineComponent({
  name: 'AppEditor',
  setup(props, { expose }) {
    const editor = ref<HTMLElement>()

    const visible = ref(false)

    const { instance } = useWangEditor(editor as Ref<HTMLElement>, {
      openUpload
    })

    function openUpload() {
      visible.value = true
    }

    function getHTMLContent(html: string | undefined) {
      if (html) {
        instance.value?.txt.html(html)
      } else {
        return instance.value?.txt.html()
      }
    }

    expose({
      getHTMLContent,
      instance
    })

    return {
      editor,
      visible
    }
  },
  components: {
    AppUpload
  }
})
</script>

<style lang="less" scoped></style>
