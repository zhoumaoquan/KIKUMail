<template>
  <Layout class="app-layout">
    <Sider width="130">
      <AppSider />
    </Sider>
    <Content class="app-main">
      <router-view></router-view>
    </Content>
  </Layout>
</template>

<script lang="ts" setup>
import { Layout } from 'ant-design-vue'

import AppSider from './components/Sider/index.vue'

import { useRequest } from 'vue-request'

import { getUserInfo } from '@/service/Api/user'

import * as Storage from '@/utils/storage'

import { USER_INFO } from '@/assets/context'

const { Sider, Content } = Layout

useRequest(getUserInfo, {
  onSuccess(data) {
    Storage.setStorage(USER_INFO, data.data)
  }
})
</script>

<style lang="less" scoped>
/deep/ .ant-layout,
.ant-layout-sider {
  background-color: #fff;
}
.app-layout {
  box-sizing: border-box;
  padding: 35px 0px 35px 35px;
  height: 100vh;
  background-color: #fff;
}

.app-main {
  display: flex;
  height: calc(100vh - 70px);
  overflow: hidden;
}
</style>
