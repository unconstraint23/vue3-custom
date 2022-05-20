<template>
  <div class="aside">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span v-if="!collapse" class="tit">Vue3+TS</span>
    </div>
    <el-menu
      default-active="2"
      active-text-color="#ffd04b"
      background-color="#001529"
      class="el-menu-vertical-demo"
      text-color="#909399"
      :collapse="collapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <template v-for="item in userMenu" :key="item.id">
        <!-- 可展开的菜单 -->
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon class="eicon" :size="20">
                <component :is="item.icon" />
              </el-icon>
              <span>{{ item.name }}</span>
            </template>

            <el-menu-item
              v-for="child in item.children"
              :key="child.id"
              :index="child.id + ''"
            >
              {{ child.name }}
            </el-menu-item>
          </el-sub-menu>
        </template>
        <!-- 不可展开的菜单 -->
        <template v-else-if="item.type == 2">
          <el-menu-item :index="item.id + ''">
             <el-icon v-if="'icon' in item" class="eicon" :size="20">
                <component :is="item.icon" />
              </el-icon>
            <span>{{item.name}}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import _ from 'lodash'
export default defineComponent({
  name: 'asideView',
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.handlerMenu()
  },
  setup(props) {
    // 这里这样做是想取到login模块下的类型
    const store = useStore()
    const tmp = store.state.login.userMenus

    const userMenu = _.cloneDeep(tmp)

    const handlerMenu = () => {
      userMenu.forEach((item: any) => {
        if ('icon' in item) {
          let strList = item.icon.split('-').splice(2)
          let str = ''
          strList.forEach((s: string) => {
            str += s[0].toUpperCase() + s.slice(1)
          })
          item.icon = str
        }
      })
      console.log(userMenu)
    }
    const handleOpen = () => {
      return {}
    }
    const handleClose = () => {
      return {}
    }
    return {
      handleOpen,
      handleClose,
      userMenu,
      handlerMenu
    }
  }
})
</script>
<style lang="scss" scoped>
.aside {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .tit {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
}
.el-menu {
  border-right: none;
}

// ::v-deep .el-submenu__title {
// background-color: #001529 !important;
// }

// hover 高亮
.el-menu-item:hover {
  color: #fff !important; // 菜单
}

.el-menu-item.is-active {
  color: #fff !important;
  background-color: #0a60bd !important;
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
