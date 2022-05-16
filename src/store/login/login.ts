import { accountLoginReq, getUserInfo } from '@/service/login/login';
import { IAccount } from '@/service/login/type';
import { Module } from 'vuex';
import { IRootState } from '../type';
import { ILoginState } from './type';
import localCache from '@/utils/cache';
import router from '@/router'
const loginModule:Module<ILoginState,IRootState> = {
    namespaced: true,
    state() {
      return {
        token: '',
        userInfo: {},
        userMenus: []
      }
    },
    mutations: {
        setToken(state,token) {
          state.token = token
        },
        setUserInfo(state, userInfo) {
          state.userInfo = userInfo
        }
    },
    actions: {
     async accountLoginAction({ commit },payload: IAccount) {
          try {

              const res = await accountLoginReq(payload)

              const {id, token} = res.data
              commit("setToken",token)
              localCache.setCache("token",token)
              const userRes = await getUserInfo(id)
              commit("setUserInfo",userRes.data)
              localCache.setCache("userInfo",userRes.data)
              router.push({path: "/"})
          // eslint-disable-next-line no-empty
          } catch (error) {

          }
      }
    }
}

export default loginModule
