<template>
  <div class="header">
    <div class="left">
    <el-icon class="eicon" v-show="!isFold" @click="handleFoldClick" :size="30">
    <Fold />
    </el-icon>
    <el-icon class="eicon" v-show="isFold" @click="handleFoldClick" :size="30">
      <Expand />
    </el-icon>
    <div class="menu-name">
      bread
    </div>
    </div>
    <div class="right">
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import userInfo from './userInfo.vue';
export default defineComponent({
  name: "headerView",
  components: {
    userInfo
  },
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
  justify-content: space-between;
  .left{
    display: flex;
    align-items: center;
    .menu-name {
      margin-left: 15px;
    }
  }
  .right {




  }
  .eicon {
    cursor: pointer;
  }
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
