import { Ref, onMounted, onBeforeUnmount, ref } from 'vue'

import { message } from 'ant-design-vue'

import WangEditor from 'wangeditor'

import Annex from './annex'

import { UPLOAD_URL, MENUS, ANNEX, FILENAME, setUploadHeader } from './config'

export type Instance = WangEditor | null | undefined

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
    instance.value.menus.extend(ANNEX, Annex)

    instance.value.config.menus = MENUS

    instance.value.config.uploadImgServer = `${UPLOAD_URL}`

    instance.value.config.uploadFileName = `${FILENAME}`

    instance.value.config.uploadImgHeaders = setUploadHeader()

    instance.value.config.uploadImgHooks = {
      fail: function () {
        message.error('插入图片失败')
      },
      // 上传图片出错，一般为 http 请求的错误
      error: function () {
        message.error('上传图片失败')
      },
      customInsert: function (insertImgFn, result: any) {
        // result 即服务端返回的接口

        // insertImgFn 可把图片插入到编辑器，传入图片 src ，执行函数即可
        insertImgFn.call(instance.value as WangEditor, result.url)
      }
    }
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
