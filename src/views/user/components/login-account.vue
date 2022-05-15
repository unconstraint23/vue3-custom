<template>
  <div class="login-account">
    <el-form
      ref="loginForm"
      status-icon
      label-width="66px"
      class="demo-ruleForm"
      :rules="rules"
      :model="formData"
    >
      <el-form-item label="账号" prop="username">
        <el-input
          class="el-input"
          type="text"
          autocomplete="off"
          v-model="formData.username"
        />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          class="el-input"
          type="password"
          v-model="formData.password"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item label="验证码">
        <el-input class="el-input" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../utils/rule'
import { ElForm } from 'element-plus'
export default defineComponent({
  setup() {
    const formData = reactive({
      username: '',
      password: '',
      code: ''
    })
    const loginForm = ref<InstanceType<typeof ElForm>>()
    const login = () => {
      console.log("login");

      loginForm.value?.validate((valid) => {
        console.log(valid)
      })
    }
    const resetForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
      if (!formEl) return
      formEl.resetFields()
    }
    return {
      formData,
      rules,
      login,
      loginForm,
      resetForm
    }
  }
})
</script>
<style lang="scss" scoped>
.el-input {
  // width: 70%;
}
</style>
