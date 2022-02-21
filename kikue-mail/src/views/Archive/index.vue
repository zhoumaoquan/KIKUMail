<template>
  <Layout abort :loading="loading">
    <a-row>
      <a-col :span="12">
        <div class="archive-form">
          <a-form
            :wrapperCol="{ span: 10 }"
            :labelCol="{ span: 2 }"
            labelAlign="left"
          >
            <a-form-item label="账号">
              <a-typography-paragraph :copyable="{ text: inquire }">
                {{ inquire }}
              </a-typography-paragraph>
            </a-form-item>
            <a-form-item
              name="password"
              label="修改密码"
              v-bind="validateInfos.password"
              has-feedback
            >
              <a-input-password
                placeholder="修改密码"
                v-model:value="modelRef.password"
              />
            </a-form-item>
            <a-form-item
              name="password_confirmation"
              label="确认密码"
              v-bind="validateInfos.password_confirmation"
              has-feedback
            >
              <a-input-password
                placeholder="重复密码"
                v-model:value="modelRef.password_confirmation"
              />
            </a-form-item>
            <a-form-item>
              <a-space :size="270">
                <a-button type="primary" @click="resetFields">重置</a-button>
                <a-button type="primary" @click="submit">提交</a-button>
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
import { computed, reactive } from 'vue'
import Layout from '@/Layout/components/Layout/index.vue'

import { useRouter } from 'vue-router'

import { Form, message } from 'ant-design-vue'

import { useRequest } from 'vue-request'

import { editPassword } from '@/service/Api/user'

import { getStorage, clearStorage } from '@/utils/storage'

import { USER_INFO } from '@/assets/context'

import { RuleObject } from 'ant-design-vue/lib/form'

import { passReg } from './config'

const useForm = Form.useForm

const router = useRouter()

const modelRef = reactive({
  password: '',
  password_confirmation: ''
})

let validatePass = async (_rule: RuleObject, value: string) => {
  if (value === '') {
    return Promise.reject('请输入新密码')
  } else {
    if (!passReg.test(value)) {
      return Promise.reject('密码格式8~16位并必须包含数字、字母、符号的组合')
    }

    return Promise.resolve()
  }
}

let checkPass = async (_rule: RuleObject, value: string) => {
  if (value === '') {
    return Promise.reject('请重复输入密码')
  } else if (value !== modelRef.password) {
    return Promise.reject('二次密码输入不一致')
  } else {
    return Promise.resolve()
  }
}

const rulesRef = reactive({
  password: [{ validator: validatePass, trigger: 'change' }],
  password_confirmation: [{ validator: checkPass, trigger: 'change' }]
})

const { loading, run } = useRequest(editPassword, {
  manual: true,
  onSuccess() {
    resetFields()
    message.success('修改密码成功，需重新登录，正在跳转登录页...', 3, () => {
      clearStorage()
      router.replace('/login')
    })
  }
})

const inquire = computed(() => {
  const userInfo = getStorage(USER_INFO)

  return userInfo.name
})

const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef)

const submit = () => {
  validate().then(() => {
    run(modelRef)
  })
}
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
