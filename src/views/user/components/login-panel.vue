<template>
  <div class="login-panel" >
    <div class="title">
      CMS
    </div>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>


          <span>账号密码登录</span>

        </template>
        <login-account ref="accountRef"/>

      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>验证码登录</span>

        </template>
        <code-login />
      </el-tab-pane>

    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="signin"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import loginAccount from './login-account.vue';
import codeLogin from './code-login.vue';
export default defineComponent({
  components: {
    loginAccount,
    codeLogin
  },
  setup() {
    const isKeepPassword = ref(false)
    const accountRef = ref<InstanceType <typeof loginAccount>>()
    const signin = () => {

      console.log(accountRef);

      accountRef.value?.login()
    }
    return {
      isKeepPassword,
      signin,
      accountRef
    }
  },
})
</script>
<style lang="scss" scoped>
.login-panel {
  width: 400px;
  .title {
    margin: 20px 0;
  }
}

.account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
</style>
