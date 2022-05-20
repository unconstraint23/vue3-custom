<template>
  <div class="header">
    <div class="left">
    <el-icon class="eicon" v-show="!isFold" @click="handleFoldClick" :size="30">
    <Fold />
    </el-icon>
    <el-icon class="eicon" v-show="isFold" @click="handleFoldClick" :size="30">
      <Expand />
    </el-icon>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: "headerView",
  setup(props, {emit}) {
    const isFold = ref(false)
    const handleFoldClick = () => {
       isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick
    }
  },
})
</script>
<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  align-items: center;
  .eicon {
    cursor: pointer;
  }
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
