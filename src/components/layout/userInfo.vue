<template>
  <div class="userInfo">
    <el-avatar
       size="small"
       src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
     ></el-avatar>
    <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      {{username}}<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
            >
            退出登录
            <el-icon class="el-icon--right"><close /></el-icon>
            </el-dropdown-item
          >
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from '@/store';
export default defineComponent({
  setup() {
    const store = useStore()
    const username = store.state.login.userInfo.name
    const handleCommand = (command: string | number | object) => {
      return
  }
    return {
      handleCommand,
      username
    }
  },
})
</script>
<style lang="scss" scoped>
.userInfo {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.el-avatar {
  margin-right: 10px;
}
</style>
