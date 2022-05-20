<template>
  <div class="home">
   <layout />

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import layout from '@/components/layout/index.vue';

export default defineComponent({
  name: "HomeView",
  components: {
    layout
  },
});
</script>
