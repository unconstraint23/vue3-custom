<template>
  <div class="base-echarts">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps, withDefaults, onMounted, watchEffect } from 'vue';
import { EChartsOption } from 'echarts';
import useCharts from './hooks/useCharts';
const props = withDefaults(
  defineProps<
    {
      options: EChartsOption
      width?: string
      height?: string
    }
  >(),
  {
    width: '100%',
    height: '360px'
  }
)
const echartDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useCharts(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>
<style lang="scss" scoped>
</style>
