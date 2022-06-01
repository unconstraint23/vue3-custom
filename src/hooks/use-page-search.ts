import { ref } from 'vue';
import PageContent from '@/components/page-content';

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleReset = () => {
    console.log("重置")
    pageContentRef.value?.getData({})
  }
  const handleQuery = (queryInfo: any) => {
    console.log("模糊查询")
    pageContentRef.value?.getData(queryInfo)
  }
  return {pageContentRef:pageContentRef,handleQuery:handleQuery,handleReset:handleReset}
}
