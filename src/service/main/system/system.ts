import { masterReq } from "@/service";
import { IDataType } from "@/service/type";


export function getListData(url:string, queryInfo:any) {
  return masterReq.post<IDataType>({
    url: url,
    data: queryInfo
  })
}
