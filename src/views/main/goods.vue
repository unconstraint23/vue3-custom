<template>
  <div class="goods">
    <page-content :content-table-config="contentTableConfig" page-name="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px;"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          :initial-index="0"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">{{ '¥' + scope.row.oldPrice }}</template>
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageContent from '@/components/page-content';
import { contentTableConfig } from './config/goods.content.config';
export default defineComponent({
  name: 'goodsView',
  components: {
    PageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
