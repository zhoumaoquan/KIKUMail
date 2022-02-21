<template>
  <Layout :loading="loading">
    <PageHeader isMore @more="next" />

    <a-descriptions :column="2">
      <a-descriptions-item label="发件人">{{
        data?.sender || 'LSS直投系统'
      }}</a-descriptions-item>
      <a-descriptions-item label="查询">&lt;{{ inquire }}></a-descriptions-item>
      <a-descriptions-item label="时间">{{
        data?.create_at
      }}</a-descriptions-item>
      <a-descriptions-item label="附件">
        <div class="number">{{ annex?.length || 0 }}个</div>
        <template v-for="item of annex" :key="item.id">
          {{ item.filename }}
        </template>
      </a-descriptions-item>
    </a-descriptions>

    <FileList :data-source="annex" />
  </Layout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import Layout from '@/Layout/components/Layout/index.vue'
import PageHeader from '@/components/PageHeader/index.vue'
import FileList from '@/components/FileList'

import { message } from 'ant-design-vue'

import { useRoute, useRouter } from 'vue-router'

import { useRequest } from 'vue-request'

import { inboxDetail } from '@/service/Api/Inbox'

import { getStorage } from '@/utils/storage'

import { USER_INFO } from '@/assets/context'

const route = useRoute()

const router = useRouter()

const id = computed(() => Number(route.params.id))

const { loading, data } = useRequest(inboxDetail, {
  defaultParams: [id.value],
  formatResult: (data) => {
    return data.data
  }
})

const annex = computed(() => data.value?.annex)
const inquire = computed(() => {
  const userInfo = getStorage(USER_INFO)

  return userInfo.name
})

const next = () => {
  const is_next = data.value?.is_next
  if (is_next && typeof is_next === 'object') {
    const id = is_next.id

    router.push(`/inbox/details/${id}`)
    return
  } else {
    return message.warning('没有更多未读邮件了~')
  }
}
</script>

<style lang="less" scoped>
/deep/ .ant-descriptions-item-content {
  display: block;
}

.number {
  display: inline-flex;
  padding: 3px 12px;
  margin: 0 5px;
  background-color: #d9f0fa;
  border-radius: 4px;
  font-size: 14px;
  font-family: HarmonyOS Sans SC;
  line-height: 30px;
  color: #008cd9;
}
</style>
