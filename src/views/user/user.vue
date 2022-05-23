<template>
  <div class="user">
     <rj-form v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RjForm from '@/base-ui';
import { searchFormConfig } from './config/userConfig';
export default defineComponent({
  name: 'userView',
  components: {
    RjForm
  },
  setup() {
    console.log(searchFormConfig);

    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
