<template>
  <Layout>
    <TableList
      v-model:search="search"
      :columns="columns"
      :data-source="list || []"
      :pagination="pagination"
      :loading="loading"
      :link-callback="routerLink"
    >
    </TableList>
  </Layout>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import Layout from '@/Layout/components/Layout/index.vue'
import TableList from '@/components/TableList/index.vue'

import useListRequest from '@/components/TableList/useListRequest'

import { useRouter } from 'vue-router'

import { recordList } from '@/service/Api/record'

import { columns } from './config'

const router = useRouter()

const search = ref('')

const { loading, pagination, list, run } = useListRequest(recordList)

watch(search, (v) => {
  const params = {
    page: 1,
    text: v
  }

  run(params)
})

const routerLink = (id: number) => {
  router.push(`/reply/details/${id}`)
}
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
