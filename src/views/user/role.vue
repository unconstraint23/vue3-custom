<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content';
import PageSearch from '@/base-ui/page-search';
import { contentTableConfig } from './config/role.content.config';
import { searchFormConfig } from './config/role.search.config';
export default defineComponent({
  name: 'roleView',
  components: {
    PageContent,
    PageSearch
  },
  setup() {
    return {
      contentTableConfig,
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
