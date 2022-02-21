<template>
  <a-form
    :rules="formRules"
    :model="formDate"
    hideRequiredMark
    :wrapper-col="{ span: 18 }"
    size="large"
    layout="vertical"
    @finish="run"
  >
    <a-form-item has-feedback :colon="false" name="username" label="账号">
      <a-input
        autocomplete
        v-model:value="formDate.username"
        size="large"
        placeholder="请输入账号"
      />
    </a-form-item>
    <a-form-item has-feedback :colon="false" name="password" label="密码">
      <a-input-password
        autocomplete="off"
        size="large"
        placeholder="请输入密码"
        v-model:value="formDate.password"
      />
    </a-form-item>
    <a-form-item
      class="captcha"
      has-feedback
      :colon="false"
      name="captcha"
      label="验证码"
    >
      <a-input
        style="width: 55%"
        size="large"
        autocomplete="off"
        placeholder="请输入验证码"
        v-model:value="formDate.captcha"
      />

      <div class="verify">
        <a-spin :spinning="codeLogin">
          <a-tooltip>
            <template #title>点击刷新验证码</template>
            <img :src="verifyImg" @click="refresh" />
          </a-tooltip>
        </a-spin>
      </div>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 23 }">
      <a-button
        htmlType="submit"
        size="large"
        type="primary"
        :loading="loginLoading"
        >登录</a-button
      >
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import { useRouter } from 'vue-router'

import { message } from 'ant-design-vue'

import { useRequest } from 'vue-request'

import { getCode, userLogin } from '@/service/Api/login'

import { formRules } from './config'

import { TOKEN, TOKEN_TYPE } from '@/assets/context'

import * as Storage from '@/utils/storage'

import type { IVerifyCode, ILoginRes } from '@/service/Api/login'

const router = useRouter()

const formDate = reactive({
  username: '',
  password: '',
  captcha: '',
  captcha_key: ''
})

const verifyImg = ref<string>()

const { loading: codeLogin, refresh } = useRequest<IVerifyCode>(getCode, {
  debounceInterval: 800,
  onSuccess: (data) => {
    verifyImg.value = data.img
    formDate.captcha_key = data.key
  }
})

const { loading: loginLoading, run } = useRequest(() => userLogin(formDate), {
  manual: true,
  debounceInterval: 500,
  onSuccess: (data) => {
    loginSuccess(data)
  },
  onError: () => {
    refresh()
  }
})

const loginSuccess = (data: ILoginRes): void => {
  const { token, token_type } = data
  Storage.setStorage(TOKEN_TYPE, token_type)
  Storage.setStorage(TOKEN, token)

  message.success({
    content: '登录成功，正在跳转页面...',
    duration: 2,
    onClose: () => {
      router.replace('/')
    }
  })
}
</script>

<style lang="less" scoped>
.verify {
  box-sizing: border-box;
  max-width: 100%;
  width: 40%;
  height: 55px;
  margin-left: 5%;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  img {
    width: 100%;
    height: 55px;
  }
}

/deep/ .ant-form-item-control-input-content {
  display: flex;
  align-items: center;
}
</style>
