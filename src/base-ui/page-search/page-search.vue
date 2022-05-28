
<template>
  <div class="page-search">
    <rj-form v-bind="searchFormConfig" v-model="formData">
    <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button>
            <el-icon><RefreshLeft /></el-icon>
            重置
            </el-button>
          <el-button type="primary">
            <el-icon><Search /></el-icon>
            搜索
          </el-button>
        </div>
      </template>
      </rj-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import rjForm from '../form';
export default defineComponent({
  components: {
    rjForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  setup(props, {emit}) {
  const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      formData
    }
  },
})
</script>
<style lang="scss" scoped>
.header {
  color: red;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
