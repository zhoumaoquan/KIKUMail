<template>
  <div class="app-table">
    <a-input
      style="width: 400px"
      size="large"
      placeholder="请输入邮件关键字搜索"
      :value="search"
      @change="searchInput"
    >
      <template #prefix> 搜索 </template>
    </a-input>

    <div class="app-table-list">
      <a-table
        :loading="loading"
        :columns="columns"
        :data-source="dataSource"
        :scroll="{ y: 600 }"
        rowKey="id"
        :rowClassName="rowClassName"
        :pagination="pagination"
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'icon'">
            <img src="@/assets/image/letter.png" />
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'icon'">
            <slot name="icon" :record="record">
              <img src="@/assets/image/haveread.png" />
            </slot>
          </template>
          <template v-if="column.key === 'subject'">
            <a-tooltip color="#349E81" placement="topLeft">
              <template #title>{{ record.subject }}</template>
              {{ record.subject }}
            </a-tooltip>
          </template>
          <template v-if="column.key === 'action'">
            <a-button
              type="link"
              @click="routerLink(record.id, record?.is_read)"
              >查看详情</a-button
            >
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

import { TableColumnsType } from 'ant-design-vue'

import { IPagination } from './types'

export default defineComponent({
  name: 'TableList',
  props: {
    search: {
      type: String as PropType<string>,
      default: ''
    },
    columns: {
      type: Array as PropType<TableColumnsType>,
      required: true
    },
    dataSource: {
      type: Array as PropType<any[]>,
      required: true
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    pagination: {
      type: Object as PropType<IPagination>
    },
    linkCallback: {
      type: Function as PropType<
        (id: number, is_read?: boolean | undefined) => void
      >
    }
  },
  emits: ['update:search'],
  setup(props, { emit }) {
    const rowClassName = (record: any) => {
      return record.is_read ? 'haveread' : 'unread'
    }

    const routerLink = (id: number, is_read: boolean | undefined): void => {
      props.linkCallback?.(id, is_read)
    }

    const searchInput = (e: InputEvent) => {
      const value = (e.target as HTMLInputElement).value

      emit('update:search', value)
    }

    return {
      rowClassName,
      routerLink,
      searchInput
    }
  }
})
</script>

<style lang="less" scoped>
/deep/ .ant-input-affix-wrapper-lg {
  background-color: #f0f4fc;
  border: 1px solid #f0f4fc;
}

/deep/ .ant-input-lg {
  background-color: #f0f4fc;
  font-size: 14px;
  text-align: center;
}

/deep/ .ant-input-affix-wrapper-lg {
  font-size: 14px;
  font-family: HarmonyOS Sans SC;
  color: #2d3541;
}

/deep/ .ant-input-prefix {
  padding-right: 10px;
  border-right: 2px solid #b4b6c0;
}

/deep/ .ant-table-thead > tr > th {
  background-color: #eff2f5;
  border-bottom: none;
  color: #2d3541;
}

/deep/
  .ant-table-thead
  > tr
  > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
  content: none;
}

/deep/.ant-table-body {
  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #edf1fb;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #349e81;
    border-radius: 20px;
  }
}

/deep/ .ant-table-tbody > tr > td {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e9f2;
}

/deep/ .ant-table-tbody > tr.ant-table-row:hover > td {
  background-color: #f4f8fe;
}

/deep/ .ant-btn-link {
  font-weight: 300;
  color: #2d3541;
}

/deep/ .ant-btn-link:hover,
.ant-btn-link:focus {
  color: #349e81;
}

/deep/ .ant-pagination-item {
  border-radius: 50%;
  border: none;
  line-height: 32px;
}

/deep/ .ant-pagination-item-active {
  background-color: #349e81;
}

/deep/ .ant-pagination-item-active a {
  color: #fff;
}

/deep/ .ant-pagination-prev .ant-pagination-item-link,
/deep/ .ant-pagination-next .ant-pagination-item-link {
  border: none;
}

.app-table {
  padding-top: 35px;
}

.app-table-list {
  margin-top: 20px;
}

/deep/ .unread {
  color: #2d3541;
}

/deep/ .haveread {
  color: #91959c;
}
</style>
