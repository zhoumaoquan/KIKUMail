<template>
  <Layout>
    <TableList :columns="columns" :data-source="dataSource"> </TableList>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '@/Layout/components/Layout/index.vue'
import TableList from '@/components/TableList/index.vue'

const columns = [
  {
    name: 'icon',
    dataIndex: 'icon',
    key: 'icon',
    width: '5%'
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    width: '15%',
    ellipsis: true
  },
  {
    title: '时间',
    dataIndex: 'time',
    key: 'time',
    width: '15%'
  },
  {
    title: '回复内容',
    dataIndex: 'reply_content',
    key: 'reply_content',
    width: '55%',
    ellipsis: true
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    width: '10%'
  }
]

const dataSource = [
  {
    id: 1,
    is_read: 1,
    recipient: '黄蜀林',
    theme:
      'LSS_04_78_10_1.250环保（现代营销学苑）》 投资政府生态环境版与粤企业 粤港澳大湾区——以0座李圆圆为例',
    time: '2022年2月10日'
  },
  {
    id: 2,
    is_read: 1,
    recipient: '秦豪',
    theme:
      'LSS_04_78_10_1.250环保（现代营销学苑）》 投资政府生态环境版与粤企业 粤港澳大湾区——以0座李圆圆为例',
    time: '2022年2月10日'
  },
  {
    id: 3,
    is_read: 2,
    recipient: 'LSS直投系统',
    theme:
      'LSS_04_78_10_1.250环保（现代营销学苑）》 投资政府生态环境版与粤企业 粤港澳大湾区——以0座李圆圆为例',
    time: '2022年2月10日'
  },
  {
    id: 4,
    is_read: 2,
    recipient: '肖玮',
    theme:
      'LSS_04_78_10_1.250环保（现代营销学苑）》 投资政府生态环境版与粤企业 粤港澳大湾区——以0座李圆圆为例',
    time: '2022年2月10日'
  }
]
</script>

<style lang="less" scoped>
.header-title {
  font-size: 16px;
  font-family: HarmonyOS Sans SC;
  color: #333333;

  .active {
    color: #349e81;
  }
}
</style>
