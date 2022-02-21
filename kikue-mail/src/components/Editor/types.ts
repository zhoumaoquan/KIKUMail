import { Ref } from 'vue'

import Editor from './index.vue'

import type { Instance } from '@/plugin/wangEditor'

export type TEditor = InstanceType<typeof Editor>

export interface IExposeEditor {
  getHTMLContent: (html: string | undefined) => string | void | undefined
  instance: Ref<Instance>
}
