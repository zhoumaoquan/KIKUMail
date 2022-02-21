<template>
  <Layout>
    <template #header>
      <span class="header-title"
        >（共{{ amount.total }}封，其中 <span class="active">未读邮件</span>
        {{ amount.unread }}封）</span
      >
    </template>

    <TableList
      v-model:search="search"
      :columns="columns"
      :data-source="list || []"
      :pagination="pagination"
      :loading="loading"
      :link-callback="routerLink"
    >
      <template #icon="{ record }">
        <template v-if="record.is_read">
          <img src="@/assets/image/haveread.png" />
        </template>
        <template v-else>
          <img src="@/assets/image/unread.png" />
        </template>
      </template>
    </TableList>
  </Layout>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

import Layout from '@/Layout/components/Layout/index.vue'

import TableList from '@/components/TableList/index.vue'

import useListRequest from '@/components/TableList/useListRequest'

import { useRouter } from 'vue-router'

import { useRequest } from 'vue-request'

import { columns } from './config'

import { inboxList } from '@/service/Api/Inbox'

import { setReadInbox } from '@/service/Api/Inbox'

const router = useRouter()

const search = ref('')

const {
  loading,
  pagination,
  list,
  amount,
  run: runList
} = useListRequest(inboxList)

const { run } = useRequest(setReadInbox, {
  manual: true
})

watch(search, (v) => {
  const params = {
    page: 1,
    text: v
  }

  runList(params)
})

const routerLink = (id: number, is_read: boolean | undefined) => {
  if (!is_read) {
    run(id)
  }

  router.push(`/inbox/details/${id}`)
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
