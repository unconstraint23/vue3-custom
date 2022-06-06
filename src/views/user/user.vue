<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetClick="handleReset"
      @queryDataClick="handleQuery"
    >


    </page-search>
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
      btn-name="新建用户"
      @add="handleNewData"
      @edit="handleEditData"

    >
    </page-content>
    <page-modal
      pageName="users"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
      :modalConfig="modalConfigRef"
      @confirm="httpReq"
    >
    </page-modal>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, getCurrentInstance } from 'vue'
import { searchFormConfig } from './config/userConfig'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/base-ui/page-search/page-search.vue'
import PageContent from '@/components/page-content'
import PageModal from '@/base-ui/page-modal'
import { usePageSearch } from '@/hooks/use-page-search'
import { modalConfig } from './config/modal.config'
import { rules } from './form-rule/user.modal.rule';
import { usePageModal } from '@/hooks/use-page-modal'
import { useStore } from '@/store';
import  useModalReq  from '@/hooks/use-modal-req';
export default defineComponent({
  name: 'userView',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { proxy } = getCurrentInstance() as any
     const { pageContentRef, handleQuery, handleReset } = usePageSearch()
    const store = useStore()

     const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find(
        (item) => item.field === 'departmentId'
      )
      departmentItem!.options = store.state.entireDepartment.map((item) => {
        return { title: item.name, value: item.id }
      })
      const roleItem = modalConfig.formItems.find(
        (item) => item.field === 'roleId'
      )
      roleItem!.options = store.state.entireRole.map((item) => {
        return { title: item.name, value: item.id }
      })
      console.log(modalConfig)
      return modalConfig
    })
     const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      passwordItem!.isHidden = true
    }
    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal(newCallback, editCallback)
      const modalFunc = useModalReq(store,proxy,defaultInfo,"users",pageModalRef)
    async function httpReq(formData: any) {
      modalFunc(formData)



    }

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleQuery,
      handleReset,
      pageModalRef,
      defaultInfo,
      handleEditData,
      handleNewData,
      modalConfigRef,
      rules,
      httpReq
    }
  }
})
</script>

<style lang="scss" scoped>
.user {
  padding: 10px 0px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
