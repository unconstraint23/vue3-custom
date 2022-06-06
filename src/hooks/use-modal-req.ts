
import { IStoreType } from '@/store/type'

import { Store } from 'vuex'

export default function useModalReq(
  store: Store<IStoreType>,
  proxy: any,
  defaultInfo: any,
  pageName: string,
  pageModalRef: any

) {
  async function httpReq(formData: any, otherInfo: any = {}) {
    Promise.resolve(handleReq(formData,otherInfo)).then((flag: any) => {
      if (flag) {
        pageModalRef.value.dialogVisible = false
      } else {
        proxy.$message.error(flag)
      }
    })
  }
  async function handleReq(formData: any,otherInfo: any) {

    try {
      if (Object.keys(defaultInfo.value).length) {
        // 编辑

        await store.dispatch('system/editPageDataAction', {
          pageName: pageName,
          editData: { ...formData.value, ...otherInfo },
          id: defaultInfo.value.id
        })
      } else {
        // 新建

        await store.dispatch('system/createPageDataAction', {
          pageName: pageName,
          newData: { ...formData.value,...otherInfo }
        })
      }
      return true
      // eslint-disable-next-line no-empty
    } catch (error) {
      return error
    }
  }
  return httpReq
}
