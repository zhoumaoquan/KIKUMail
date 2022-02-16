import { Ref, onMounted, onBeforeUnmount, ref } from 'vue'

import WangEditor from 'wangeditor'

import Annex from './annex'

type Instance = WangEditor | null | undefined

interface IOptions {
  openUpload: () => void
}

function useWangEditor(
  editor: Ref<HTMLElement>,
  options?: IOptions
): {
  instance: Ref<Instance>
} {
  const instance = ref<Instance>()

  onMounted(() => {
    instance.value = new WangEditor(editor.value)
    Object.assign(instance.value.config, {
      onchange() {
        console.log('change')
      }
    })
    instance.value.annexMenuCallback = function () {
      options?.openUpload()
    }
    instance.value.menus.extend('annex', Annex)

    instance.value.config.menus = [
      'head',
      'bold',
      'fontSize',
      'fontName',
      'italic',
      'underline',
      'strikeThrough',
      'indent',
      'lineHeight',
      'foreColor',
      'backColor',
      'link',
      'list',
      'todo',
      'justify',
      'quote',
      'image',
      'table',
      'code',
      'splitLine',
      'undo',
      'redo',
      'annex'
    ]
    instance.value.create()
  })

  onBeforeUnmount(() => {
    instance.value?.destroy()
    instance.value = null
  })

  return {
    instance
  }
}

export default useWangEditor
