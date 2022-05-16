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
      <el-form-item label="账号" prop="name">
        <el-input
          class="el-input"
          type="text"
          autocomplete="off"
          v-model="formData.name"
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
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    const formData = reactive({
      name: '',
      password: '',

    })
    const loginForm = ref<InstanceType<typeof ElForm>>()
    const login = () => {
      console.log("login");

      loginForm.value?.validate((valid) => {

        if(valid) {
          store.dispatch("login/accountLoginAction", {...formData})
        }
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
