<template>
  <div class="login">
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPanel from './components/login-panel.vue';
export default defineComponent({
  name: "LoginName",
  components: {
    loginPanel
  },
  setup() {
    return {

    }
  },
})
</script>
<style lang="scss" scoped>
  .login {
    display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
  }
</style>


