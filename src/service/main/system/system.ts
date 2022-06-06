import { masterReq } from "@/service";
import { IDataType } from "@/service/type";


export function getListData(url:string, queryInfo:any) {
  return masterReq.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
// url: /users/id
export function deletePageData(url: string) {
  return masterReq.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return masterReq.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return masterReq.patch<IDataType>({
    url: url,
    data: editData
  })
}
