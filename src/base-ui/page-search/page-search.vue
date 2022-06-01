<template>
  <div class="page-search">
    <rj-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1 class="header">高级检索</h1>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button @click="resethandle">
            <el-icon><RefreshLeft /></el-icon>
            重置
          </el-button>
          <el-button type="primary" @click="queryData">
            <el-icon><Search /></el-icon>
            搜索
          </el-button>
        </div>
      </template>
    </rj-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import rjForm from '../form'
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
  emits: ['resetClick', 'queryDataClick'],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    let formData = ref(formOriginData)
    const resethandle = () => {

      for (const key in formOriginData) {
        formData.value[`${key}`] = formOriginData[key]
      }

      emit("resetClick")
    }
    const queryData = () => {
      emit('queryDataClick', formData.value)
    }
    return {
      formData,
      queryData,
      resethandle
    }
  }
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
