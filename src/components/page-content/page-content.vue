<template>
  <div class="page-content">
    <rj-table
      :listData="dataList"
      :listCount="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate">新建用户</el-button>
      </template>
      <template #status="scope">
        <el-button :type="scope.row.enable ? 'success' : 'danger'">{{
          scope.row.enable ? '启用' : '禁用'
        }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button v-if="isUpdate" size="small" type="text">
            <el-icon>
              <Edit />
            </el-icon>
            编辑
          </el-button>
          <el-button v-if="isDelete" size="small" type="text">
            <el-icon>
              <Delete />
            </el-icon>
            删除
          </el-button>
        </div>
      </template>
      <template
        v-for="item in otherPropSlots"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row"></slot>
        </template>
      </template>
    </rj-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import rjTable from '@/base-ui/table'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/use-permission';
export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      require: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    rjTable
  },
  setup(props, { emit }) {
    const store = useStore()
    const pageInfo = ref({ currentPage: 0, pageSize: 10 })
    let queryParam = {}
    const isCreate = usePermission(props.pageName, 'create')
    const isUpdate = usePermission(props.pageName, 'update')
    const isDelete = usePermission(props.pageName, 'delete')
    const isQuery = usePermission(props.pageName, 'query')
    watch(pageInfo, () => getData(queryParam))
    const getData = (queryInfo: any) => {

      queryParam = queryInfo
      store.dispatch('system/getPageListActions', {
      pageName: props.pageName,
      queryInfo: {
        offset: pageInfo.value.currentPage * pageInfo.value.pageSize,
        size: pageInfo.value.pageSize,
        ...queryParam
      }
    })
    }
    getData(queryParam)

    const dataList = computed(() =>
      store.getters[`system/pageListData`](props.pageName)
    )
 const dataCount = computed(() =>
      store.getters[`system/pageListCount`](props.pageName)
    )
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotName === 'status') return false
        if (item.slotName === 'createAt') return false
        if (item.slotName === 'updateAt') return false
        if (item.slotName === 'handler') return false
        if (item.slotName === 'enable') return false
        return true
      }
    )
    return {
      dataList,
      pageInfo,
      getData,
      dataCount,
      otherPropSlots,
      isCreate,
      isQuery,
      isUpdate,
      isDelete
    }
  }
})
</script>
<style lang="scss" scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
