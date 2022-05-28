<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" >
    </page-search>

    <div class="content">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { searchFormConfig } from './config/userConfig';
import PageSearch from '@/base-ui/page-search/page-search.vue';
export default defineComponent({
  name: 'userView',
  components: {

    PageSearch
},
  setup() {


    return {
      searchFormConfig
    }
  }
})
</script>

<style lang="scss" scoped>
.user {
  padding: 15px 0;
}
.el-col {
  border-radius: 4px;
}
.content {
  height: 90%;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
