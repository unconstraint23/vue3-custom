<template>

  <transition name="fade">
  <div class="menu" ref="menuRef" :style="{left: x + 'px',top: y + 'px',zIndex: zIndex}" v-if="isVisible">
      <div class="item" v-for="(item,index) in menuList" :key="index" @click="itemClick(item)">
          {{item.label }}
      </div>
  </div>
</transition>

</template>
<script lang="ts">
import { defineComponent,nextTick,onMounted,onUnmounted,reactive,ref, toRefs, watch,getCurrentInstance } from 'vue'
import _ from 'lodash';
import contextMenu from './index';
export default defineComponent({
  props: {
      visible: {
        type: Boolean,
        default: false
      },
      x: {
        type: Number,
        default: 0
      },
      y: {
        type: Number,
        default: 0
      },
      zIndex: {
        type: Number,
        default: 3000
      },
      menuList: {
        type: Array,
        required: true
      }

  },
  setup(props,{ emit }) {
    let tempData = _.cloneDeep(props);
    const { proxy } = getCurrentInstance() as any
    console.log(proxy);

    const propsData = tempData;
    const menuRef = ref<InstanceType <typeof contextMenu>>()
    let isVisible = ref(false)
    onMounted(() => {
      nextTick(() => {

            changeStyle()
      })

    document.body.addEventListener("click",() => hide(false))
  })
  onUnmounted(() => {
    document.body.removeEventListener("click",() => hide(false))
  })
  watch(
    () => props,
    () => {
      console.log(props.x,props.y)
      changeStyle()
  },
  {deep: true})
  function changeStyle() {

      menuRef.value.style.left = propsData.x
      menuRef.value.style.top = propsData.y
      menuRef.value.style.zIndex = propsData.zIndex

  }
  function hide(flag:boolean) {
    isVisible.value = flag
    // emit("update:visible",flag)
  }
  const itemClick = (item: any) => {
     Promise.resolve(item.onClick()).then((res) => {
        if(!res) {
          proxy.$message({
              type: 'success',
              message: '复制成功'
            })
        } else {
          proxy.$message({
              type: 'warning',
              message: res
            })
        }

     })

  }
    return {
    ...toRefs(propsData),
    menuRef,
    itemClick,
    isVisible
    }
  },
})
</script>
<style lang="scss" scoped>
.menu {
  position: absolute;
  width: 150px;
  background-color: #fff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  .item {
    font-size: 14px;

    text-align: center;
    line-height: 36px;
    color: #666;
    &:hover {
      background-color: #f4f6f7;
    }
  }
}
</style>
