<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <rj-card title="分类商品数量(饼图)">
          <pie-chart :pieData="categoryGoodsCount"></pie-chart>
        </rj-card>
      </el-col>
      <el-col :span="10">
        <rj-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </rj-card>
      </el-col>
      <el-col :span="7">
        <rj-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </rj-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <rj-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </rj-card>
      </el-col>
      <el-col :span="12">
        <rj-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"></bar-echart>
        </rj-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import rjCard from '@/base-ui/card'
import { useStore } from '@/store'
import {
  PieChart,
  LineEchart,
  RoseEchart,
  MapEchart,
  BarEchart
} from '@/components/page-charts'
export default defineComponent({
  name: 'dashboardView',
  components: {
    rjCard,
    PieChart,
    LineEchart,
    RoseEchart,
    MapEchart,
    BarEchart
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return { xLabels, values }
    })
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = []
      const values: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return { xLabels, values }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })
    })
    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped>
  .el-row{
    margin-bottom: 20px;
  }
</style>
