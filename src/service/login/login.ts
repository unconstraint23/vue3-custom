import { masterReq } from '../index';
import { IAccount, ILoginResult } from './type';
import { IDataType } from '../type';

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

export function accountLoginReq(account: IAccount) {
  return masterReq.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function getUserInfo(id: string|number) {
  return masterReq.get<IDataType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}
export function getUserMenu(id: string|number ) {
  return masterReq.get<IDataType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}

