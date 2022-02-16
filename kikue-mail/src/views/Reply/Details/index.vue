<template>
  <Layout>
    <PageHeader />
    <a-descriptions :column="1">
      <a-descriptions-item label="手抄报">LSS直投系统</a-descriptions-item>
      <a-descriptions-item label="主题"
        >LSS_04_78_10_1.250环保（现代营销学苑）》 投资政府生态环境版与粤企业
        粤港澳大湾区——以0座李圆圆为例</a-descriptions-item
      >
    </a-descriptions>

    <div class="main-body">
      <div class="main-body-header">
        <span>正文</span>
        <span class="active">回复内容：</span>
      </div>
      <div class="main-body-box">
        <div class="content">
          环保（现代营销学苑）》
          投资政府生态环境版与粤企业粤港澳大湾区——以0座李圆圆为例李圆……环保（现代营销学苑）》
          投资政府生态环境版与粤企业粤港澳大湾区——以0座李圆圆为例李圆……环保（现代营销学苑）》
          投资政府生态环境版与粤企业粤港澳大湾区——以0座李圆圆为例李圆……环保（现代营销学苑）》
          投资政府生态环境版与粤企业粤港澳大湾区——以0座李圆圆为例李圆……
        </div>

        <div class="other">
          <p class="other-title">
            ---------- 附 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;件 ----------
          </p>
          <FileList />
        </div>

        <div class="other">
          <p class="other-title">---------- 原始邮件 ----------</p>
          <a-descriptions :column="2">
            <a-descriptions-item label="发件人"
              >LSS直投系统</a-descriptions-item
            >
            <a-descriptions-item label="查询"
              >&lt;1351097225@.com></a-descriptions-item
            >
            <a-descriptions-item label="时间"
              >2022年1月21日（周五）下午3:14</a-descriptions-item
            >
            <a-descriptions-item label="主题">
              LS_S_032_091_04_《世界佳苑》基于餐饮主题文化打造的以A集团的东湖美食之有道的曹伟3.3docx
            </a-descriptions-item>
          </a-descriptions>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '@/Layout/components/Layout/index.vue'
import PageHeader from '@/components/PageHeader/index.vue'
import FileList from '@/components/FileList'
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
