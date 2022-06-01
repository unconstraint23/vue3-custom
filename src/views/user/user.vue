<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetClick="handleReset"
      @queryDataClick="handleQuery"
    >
    </page-search>
    <page-content ref="pageContentRef" :contentTableConfig="contentTableConfig" pageName="users">
    </page-content>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { searchFormConfig } from './config/userConfig'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/base-ui/page-search/page-search.vue'
import PageContent from '@/components/page-content'
import { usePageSearch } from '@/hooks/use-page-search'
export default defineComponent({
  name: 'userView',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const {pageContentRef, handleQuery,handleReset} = usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      pageContentRef,
      handleQuery,
      handleReset
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
