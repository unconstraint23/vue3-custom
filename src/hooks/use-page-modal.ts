import { ref } from 'vue';
import PageModal from '@/base-ui/page-modal';
type CallbackCn = (item?: any) => void

export function usePageModal(newCb?: CallbackCn, editCb?: CallbackCn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref<any>({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if(pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    newCb && newCb()
  }
  const handleEditData = (item: any) => {
    defaultInfo.value = {...item}
    if(pageModalRef.value) {
      pageModalRef.value.dialogVisible = true
    }
    editCb && editCb(item)
  }

  return [pageModalRef, defaultInfo, handleEditData, handleNewData]
}
