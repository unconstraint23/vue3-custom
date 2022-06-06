import { ref } from 'vue';
import PageContent from '@/components/page-content';

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleReset = () => {

    pageContentRef.value?.getData({})
  }
  const handleQuery = (queryInfo: any) => {

    pageContentRef.value?.getData(queryInfo)
  }
  return {pageContentRef:pageContentRef,handleQuery:handleQuery,handleReset:handleReset}
}
