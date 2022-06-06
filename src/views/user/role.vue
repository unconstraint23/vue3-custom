<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      @edit="handleEditData"
      @add="handleNewData"
    ></page-content>
    <page-modal
      pageName="role"
      ref="pageModalRef"
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      @confirm="handleConfirm"
    >
      <div class="tree">
        <el-tree
          ref="elTreeRef"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          :data="menus"
          @check="changeMenus"
        >
        </el-tree>
      </div>
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance, nextTick, ref } from 'vue'
import PageContent from '@/components/page-content'
import PageSearch from '@/base-ui/page-search'
import PageModal from '@/base-ui/page-modal'
import { contentTableConfig } from './config/role.content.config'
import { searchFormConfig } from './config/role.search.config'
import { modalConfig } from './config/role.modal.config'
import { usePageModal } from '@/hooks/use-page-modal'
import { ElTree } from 'element-plus'
import { useStore } from '@/store'
import { menuMapLeafKeys } from '@/utils/map-menu'
import useModalReq from '@/hooks/use-modal-req'
export default defineComponent({
  name: 'roleView',
  components: {
    PageContent,
    PageSearch,
    PageModal
  },
  setup() {
    const { proxy } = getCurrentInstance() as any
    const editCallback = (item: any) => {
      const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        console.log(elTreeRef.value)
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
      })

    }
    const newCallback = (item: any) => {
      // const leafKeys = menuMapLeafKeys(item.menuList)
      nextTick(() => {
        console.log(elTreeRef.value)

      })

    }
    const handleConfirm = (formData: any) => {
      modalFunc(formData,otherInfo.value)
    }

    const store = useStore()
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const otherInfo = ref({})
    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal(newCallback, editCallback)
    const menus = computed(() => store.state.entireMenu)
    const changeMenus = (checkedNodes: any, checkedKeys: any) => {
      const checkedKey = checkedKeys.checkedKeys
      const halfCheckedKeys = checkedKeys.halfCheckedKeys
      const menuList = [...checkedKey, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }
    const modalFunc = useModalReq(store,proxy,defaultInfo,"role",pageModalRef)
    return {
      contentTableConfig,
      searchFormConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleNewData,
      otherInfo,
      elTreeRef,
      menus,
      changeMenus,
      handleConfirm
    }
  }
})
</script>

<style lang="scss" scoped>
.role {
  padding-top: 15px;
}
.tree {
  margin-left: 25px;
}
</style>
