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
      <breadcrumb :breadcrumbs="breadcrumbs"/>
    </div>
    </div>
    <div class="right">
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref,computed } from 'vue'
import userInfo from './userInfo.vue';
import breadcrumb from '../../base-ui/breadcrumb';
import { pathMapBreadcrumbs } from '@/utils/map-menu';
import { useStore } from '@/store';
import { useRoute } from 'vue-router';
export default defineComponent({
  name: "headerView",
  components: {
    userInfo,
    breadcrumb
  },
  setup(props, {emit}) {
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenu = store.state.login.userMenus
      const route = useRoute()
      return pathMapBreadcrumbs(userMenu,route.path)
    })
    const isFold = ref(false)
    const handleFoldClick = () => {
       isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleFoldClick,
      breadcrumbs
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
