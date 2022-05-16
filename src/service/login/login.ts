import { masterReq } from '../index';
import { IAccount, IDataType, ILoginResult } from './type';

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
  return masterReq.get({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}
