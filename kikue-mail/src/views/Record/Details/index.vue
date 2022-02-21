<template>
  <Layout :loading="loading">
    <PageHeader />
    <a-descriptions :column="1">
      <a-descriptions-item label="手抄报">{{
        data?.rcpt || '未知'
      }}</a-descriptions-item>
      <a-descriptions-item label="主题">{{
        data?.subject || '未知'
      }}</a-descriptions-item>
    </a-descriptions>

    <div class="main-body">
      <div class="main-body-header">
        <span>正文</span>
        <span class="active">回复内容：</span>
      </div>
      <div class="main-body-box">
        <div class="content" v-html="data?.content"></div>

        <div class="other">
          <p class="other-title">
            ---------- 附 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;件 ----------
          </p>
          <FileList
            :data-source="data?.reply || []"
            :show-type="Display.RECORD"
          />
        </div>

        <div class="other">
          <p class="other-title">---------- 原始邮件 ----------</p>
          <a-descriptions :column="2">
            <a-descriptions-item label="发件人">{{
              original?.sender || 'LSS直投系统'
            }}</a-descriptions-item>
            <a-descriptions-item label="查询"
              >&lt;{{ original?.rcpt }}></a-descriptions-item
            >
            <a-descriptions-item label="时间">{{
              original?.create_at
            }}</a-descriptions-item>
            <a-descriptions-item label="主题">
              {{ original?.subject }}
            </a-descriptions-item>
          </a-descriptions>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

import Layout from '@/Layout/components/Layout/index.vue'
import PageHeader from '@/components/PageHeader/index.vue'
import FileList from '@/components/FileList'

import { useRoute } from 'vue-router'

import { useRequest } from 'vue-request'

import { recordDetail } from '@/service/Api/record'

import { Display } from '@/components/FileList/config'

const route = useRoute()

const id = computed(() => Number(route.params.id))

const { loading, data } = useRequest(recordDetail, {
  defaultParams: [id.value],
  formatResult: (data) => {
    return data.data
  }
})

const original = computed(() => data.value?.original)
</script>

<style lang="less" scoped>
.main-body {
  margin-top: 30px;

  &-header {
    font-size: 16px;
    font-family: HarmonyOS Sans SC;
    line-height: 30px;
    color: #2d3541;

    .active {
      margin-left: 30px;
      font-weight: 550;
    }
  }

  &-box {
    box-sizing: border-box;
    padding-left: 60px;
    padding-right: 20px;
    height: 500px;
    overflow-y: scroll;
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

    .content {
      box-sizing: border-box;
      padding: 10px 0px 20px 0px;
      min-height: 300px;
    }

    .other-title {
      padding-bottom: 20px;
      font-size: 14px;
      font-family: HarmonyOS Sans SC;
      line-height: 27px;
      color: #2d3541;
    }
  }
}
</style>
