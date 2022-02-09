<template>
  <div class="app-table">
    <a-input
      style="width: 400px"
      size="large"
      placeholder="请输入邮件关键字搜索"
    >
      <template #prefix> 搜索 </template>
    </a-input>

    <div class="app-table-list">
      <a-table :columns="columns"></a-table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const columns = [
  {
    title: '发件人',
    dataIndex: 'recipient',
    key: 'recipient'
  },
  {
    title: '主题',
    dataIndex: 'theme',
    key: 'theme'
  },
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time'
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action'
  }
]

export default defineComponent({
  name: 'TableList',
  setup() {
    return {
      columns
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

.app-table {
  padding-top: 35px;
}

.app-table-list {
  margin-top: 20px;
}
</style>
