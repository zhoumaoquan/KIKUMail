<template>
  <a-spin :spinning="false">
    <div class="file-list">
      <div
        class="file-list-item"
        v-for="(item, index) in dataSource"
        :key="index"
      >
        <Item
          :item="item"
          :show-type="showType"
          @remove="fileRemove"
          :index="index"
        />
      </div>
    </div>
  </a-spin>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { message } from 'ant-design-vue'

import type { Annex } from '@/service/Api/types'

import { Display } from './config'

import Item from './Item.vue'

export default defineComponent({
  name: 'FileList',
  props: {
    dataSource: {
      type: Array as PropType<Annex[]>,
      default: () => []
    },
    showType: {
      type: Number as PropType<Display>,
      default: Display.EXHIBIT
    }
  },
  emits: ['update:dataSource'],
  setup(props, { emit }) {
    const fileRemove = (index: number): void => {
      const fileList = props.dataSource

      fileList.splice(index, 1)
      emit('update:dataSource', fileList)

      message.success('删除该附件成功')
    }

    return {
      fileRemove
    }
  },
  components: {
    Item
  }
})
</script>

<style lang="less" scoped>
.file-list-item {
  border-bottom: 1px solid #e5e9f2;
}

.file-list-item:last-child {
  border-bottom: none;
}
</style>
