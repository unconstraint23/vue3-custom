<template>
  <transition name="menu">
  <div class="menu" ref="menuRef" v-if="isVisible">
      <div class="item" v-for="(item,index) in menuList" :key="index">
          {{item.label }}
      </div>
  </div>
  </transition>
</template>

<script lang="ts" setup>

import { ref, defineProps, withDefaults, onMounted,defineEmits, onUnmounted,watch } from 'vue'
const menuRef = ref()
  const props = withDefaults(defineProps<
    {

      visible: boolean,
      x: number,
      y:number,
      event?: any,
      menuList: any,
      zIndex: number
    }
  >(),
  {
    visible: false,
    x: 0,
    y:0,
    menuList: [],
    zIndex: 3000
  })
  const emit = defineEmits(["update:visible"])
  console.log(props)
  let isVisible = ref(props.visible)
  onMounted(() => {
    document.body.addEventListener("click",() => hide(false))
  })
  onUnmounted(() => {
    document.body.removeEventListener("click",() => hide(false))
  })
  watch(
    () => props.x,
    () => {
      console.log(props.x,props.y)
      changeStyle()
  })
  function changeStyle() {
      menuRef.value.style.left = props.x
      menuRef.value.style.top = props.y
      menuRef.value.style.zIndex = props.zIndex
  }
  function hide(flag:boolean) {
    isVisible.value = false
    emit("update:visible",flag)
  }
</script>
<style lang="scss" scoped>
.menu {
  position: absolute;
  width: 150px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  .item {
    font-size: 14px;
    color: #666;
  }
}
</style>
