<template>
  <Layout>
    <template #header>
      <span class="header-title"
        >（共263封，其中 <span class="active">未读邮件</span> 10封）</span
      >
    </template>

    <TableList></TableList>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '@/Layout/components/Layout/index.vue'
import TableList from '@/components/TableList/index.vue'
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
