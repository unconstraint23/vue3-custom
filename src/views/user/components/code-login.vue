<template>
  <div class="login-account">
       <el-form
    ref="ruleFormRef"

    status-icon

    label-width="66px"
    class="demo-ruleForm"
  >
    <el-form-item label="手机号" prop="phone">
      <el-input  type="text" autocomplete="off" />
    </el-form-item>

    <el-form-item label="验证码" prop="phoneCode">
      <div class="get-code">
        <el-input  />
        <el-button type="primary" class="get-btn">获取验证码</el-button>
      </div>
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
.get-code {
  display: flex;

  .get-btn {
    margin-left: 20px;
  }
}
</style>
