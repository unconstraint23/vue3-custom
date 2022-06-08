<template>
  <div class="overview">
    <page-search :search-form-config="searchFormConfig" @query-data-click="queryData">

    </page-search>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/base-ui/page-search';
import { searchFormConfig } from './config/test.search.config';
export default defineComponent({
  name: 'overviewView',
  components: {
    PageSearch
  },
  setup() {
    const queryData = (data: any) => {
        console.log(searchFormConfig)
    }
    return {
      searchFormConfig,
      queryData
    }
  }
})
</script>

<style scoped></style>
