<template>
  <div class="pie-chart">
    <base-chart :options="options"></base-chart>
  </div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from 'vue'
import baseChart from '@/base-ui/echarts';
const props = defineProps<
  {
    pieData: any[]
  }
>()
const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>
