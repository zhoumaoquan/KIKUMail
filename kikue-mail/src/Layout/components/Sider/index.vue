<template>
  <div class="app-sider">
    <div class="app-sider-box">
      <div class="app-sider-box__header">
        <div class="app-siderbox__header__logo">
          <img src="@/assets/image/silder-logo.png" alt="LSS直投系统" />
        </div>
      </div>
      <div class="app-sider-box__menu">
        <item
          :icon="require('@/assets/image/sider-2.png')"
          :icon-active="require('@/assets/image/sider-2-active.png')"
          title="收件箱"
          path="/inbox"
        />
        <item
          :icon="require('@/assets/image/sider-1.png')"
          :icon-active="require('@/assets/image/sider-1-active.png')"
          title="回复记录"
          path="/reply"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Item from './comps/Item.vue'
</script>

<style lang="less" scoped>
.app-sider {
  width: 100%;
  height: 100%;
  background: #349e8c;
  box-shadow: 6px 1px 14px rgba(52, 158, 129, 0.32);
  opacity: 1;
  border-radius: 36px;
  .app-sider-box {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 25px;
    &__header {
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      padding-bottom: 20px;
    }

    &__menu {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
}
</style>
