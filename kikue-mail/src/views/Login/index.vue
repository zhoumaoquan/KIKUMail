<template>
  <div class="app-login-container">
    <div class="app-login">
      <a-row>
        <a-col :xxl="12" :xl="12" :lg="0" :md="0" :sm="0" :xs="0">
          <div class="app-login-left">
            <div class="app-login-bg">
              <img src="@/assets/image/login-bg.png" />
            </div>
          </div>
        </a-col>
        <a-col :xxl="12" :xl="12" :lg="24" :md="24" :sm="24" :xs="24">
          <div class="app-login-main">
            <div class="app-login-box">
              <p class="title">用户登录</p>

              <login-form></login-form>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import LoginForm from './form.vue'

export default defineComponent({
  name: 'AppLogin',
  components: {
    LoginForm
  }
})
</script>

<style lang="less" scoped>
.app-login-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.app-login {
  box-sizing: border-box;
  padding-bottom: 5%;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    height: 4px;
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #edf1fb;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4b7dfd;
    border-radius: 20px;
  }
}

.app-login-main {
  box-sizing: border-box;
  padding: 0 15%;

  .logo {
    max-width: 100%;
    display: block;
  }

  .app-login-box {
    margin-top: 18%;

    .title {
      margin-bottom: 12%;
      font-size: 30px;
      font-family: HarmonyOS Sans SC;
      font-weight: bold;
      letter-spacing: 10px;
      color: #333333;
    }

    /deep/ .ant-input-lg {
      padding: 17px 11px;
      border: 1px solid #d0d0d0;
      border-radius: 20px;
    }

    /deep/ .ant-form-item-label {
      padding: 0 0 18px;
    }

    /deep/ .ant-form-item-label > label {
      font-size: 22px;
      font-family: Microsoft YaHei;
      font-weight: 500;
      color: #333;
      line-height: 30px;
    }

    /deep/ .ant-input-password .ant-input-lg {
      padding: 10px 0;
      border: none;
      border-radius: 0;
    }

    /deep/ .ant-input-affix-wrapper {
      border: 1px solid #d0d0d0;
      border-radius: 20px;
    }

    /deep/ .ant-form-item-explain,
    .ant-form-item-extra {
      padding-left: 10px;
    }

    /deep/ .ant-btn-lg {
      margin-top: 10%;
      width: 80%;
      height: 60px;
      border-radius: 20px;

      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
    }
  }
}

.app-login-left {
  box-sizing: border-box;
  padding: 8%;
  width: 100%;
  float: right;
  background-color: #f3f5fc;
  border-radius: 0px 40px 40px 0px;
}
.app-login-bg {
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 1920px) {
  .app-login-bg {
    width: 800px;
  }
}
</style>
