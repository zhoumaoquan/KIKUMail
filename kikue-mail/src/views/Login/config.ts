import type { RuleObject } from 'ant-design-vue/es/form'

// 邮箱正则表达式
export const MailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

const validateName = async (
  _rule: RuleObject,
  value: string
): Promise<string | void> => {
  if (value.trim().length === 0) {
    return Promise.reject('请输入邮箱来进行登录')
  }

  if (!MailReg.test(value)) {
    return Promise.reject('请输入正确的邮箱')
  }

  return Promise.resolve()
}

export const formRules = {
  username: [
    {
      required: true,
      validator: validateName,
      trigger: 'change'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'change',
      message: '请输入密码'
    },
    {
      min: 6,
      message: '密码不得少于6位'
    }
  ],
  captcha: [
    {
      required: true,
      trigger: 'change',
      message: '请输入验证码'
    }
  ]
}
