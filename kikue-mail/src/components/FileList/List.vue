<template>
  <a-spin :spinning="false">
    <div class="file-list">
      <div class="file-list-item" v-for="item in dataSource" :key="item.id">
        <Item :item="item" />
      </div>
    </div>
  </a-spin>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import type { Annex } from '@/service/Api/Inbox'

import Item from './Item.vue'

export default defineComponent({
  name: 'FileList',
  props: {
    dataSource: {
      type: Array as PropType<Annex[]>,
      default: () => []
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
