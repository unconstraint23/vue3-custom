<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="!isCollapse ? '200px': '60px'">
        <Aside :collapse="isCollapse" />
      </el-aside>

      <el-container>
        <el-header>
          <Header @foldChange="handleFold" />
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from 'vue'
import Aside from './aside.vue';
import Header from './header.vue';
export default defineComponent({
  name: 'LayoutView',
  components: {
    Aside,
    Header
  },
  setup() {
    const isCollapse = ref(false)
    const handleFold = (isFold:boolean) => {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      handleFold
    }
  }
})
</script>
<style lang="scss" scoped>
.el-container {
  height: 100vh;
  overflow: auto;
  display: flex;
}

.el-aside {
  position: sticky;
  top: 0;
  max-height: 100vh;
  background: #d3dce6;
  transition: all 0.3s;
}

.el-header {
  background: #f8f9fb;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 48px;
}

.el-main {
  background: #e9eef3;
}
.page-content {
  height: calc(100% - 48px);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}
</style>
