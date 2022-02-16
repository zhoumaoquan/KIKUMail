<template>
  <Layout abort>
    <a-row>
      <a-col :span="12">
        <div class="archive-form">
          <a-form
            :wrapperCol="{ span: 8 }"
            :labelCol="{ span: 2 }"
            labelAlign="left"
          >
            <a-form-item label="账号">
              <a-typography-paragraph :copyable="{ text: '1351097225@qq.com' }">
                1351097225@qq.com
              </a-typography-paragraph>
            </a-form-item>
            <a-form-item label="修改密码">
              <a-input-password />
            </a-form-item>
            <a-form-item label="确认密码">
              <a-input-password />
            </a-form-item>
            <a-form-item>
              <a-space :size="215">
                <a-button type="primary">重置</a-button>
                <a-button type="primary">提交</a-button>
              </a-space>
            </a-form-item>
          </a-form>
        </div>
      </a-col>

      <div class="archive-form-bg">
        <img src="@/assets/image/bg-1.png" />
      </div>
    </a-row>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '@/Layout/components/Layout/index.vue'
</script>

<style lang="less" scoped>
/deep/ div.ant-typography,
.ant-typography p {
  margin-bottom: 0;
  font-size: 20px;
}
.archive-form {
  box-sizing: border-box;
  padding: 30px 10px 10px 0px;
}

.archive-form-bg {
  position: fixed;
  bottom: 50px;
  right: 32px;
  z-index: 1;
}
</style>
