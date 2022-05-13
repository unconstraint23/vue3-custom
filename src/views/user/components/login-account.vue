<template>
  <div class="login-account">
       <el-form
    ref="ruleFormRef"

    status-icon

    label-width="66px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="username">
      <el-input class="el-input"  type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="checkPass">
      <el-input
      class="el-input"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="验证码" prop="verifyCode">
      <el-input class="el-input" />
    </el-form-item>

  </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {

    }
  },
})
</script>
<style lang="scss" scoped>
  .el-input {
    // width: 70%;
  }
</style>
