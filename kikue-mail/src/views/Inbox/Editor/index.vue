<template>
  <Layout>
    <PageHeader />

    <div class="editor-container">
      <div class="editor-info-line">
        <div class="editor-info-label">手抄报</div>
        <div class="editor-info-content">1351097663@qq.com</div>
      </div>
      <div class="editor-info-line">
        <div class="editor-info-label">主题</div>
        <div class="editor-info-content">
          LSS_032_091_04_ 《世界佳苑》基于餐饮主题文化打造 中国服务 亮名片的剖析
          以A集团的东湖味道 食之有道 为例 曹伟 3版.docx
        </div>
      </div>
      <div class="editor-main">
        <div class="editor-info-label">正文</div>
        <div class="editor-main-box">
          <Editor />
          <div class="other">
            <p class="other-title">
              ---------- 附 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;件 ----------
            </p>
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

      <div class="editor-btn">
        <a-button type="primary" size="large">
          <template #icon><send-outlined /></template>
          发送</a-button
        >
      </div>
    </div>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '@/Layout/components/Layout/index.vue'
import PageHeader from '@/components/PageHeader/index.vue'
import Editor from '@/components/Editor/index.vue'
import { SendOutlined } from '@ant-design/icons-vue'
</script>

<style lang="less" scoped>
.editor-info-line {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.editor-info-label {
  flex-shrink: 0;
  width: 70px;
  font-size: 16px;
  font-family: HarmonyOS Sans SC;
  line-height: 30px;
  color: #2d3541;
}

.editor-info-content {
  box-sizing: border-box;
  padding: 0 15px;
  flex: 1;
  height: 40px;
  background-color: #f0f4fc;
  border-radius: 6px;

  font-size: 14px;
  font-family: HarmonyOS Sans SC;
  line-height: 40px;
  color: #2d3541;
}

.editor-main {
  display: flex;
}

.editor-main-box {
  height: 550px;
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
}

.other {
  margin-top: 10px;
}
.other-title {
  padding-bottom: 20px;
  font-size: 14px;
  font-family: HarmonyOS Sans SC;
  line-height: 27px;
  color: #2d3541;
}

.editor-btn {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
