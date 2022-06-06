import { accountLoginReq, getUserInfo, getUserMenu } from '@/service/login/login';
import { IAccount } from '@/service/login/type';
import { Module } from 'vuex';
import { IRootState } from '../type';
import { ILoginState } from './type';
import localCache from '@/utils/cache';
import router from '@/router'
import { mapMenusToPermissions, mapMenuToRoute } from '@/utils/map-menu';
const loginModule:Module<ILoginState,IRootState> = {
    namespaced: true,
    state() {
      return {
        token: '',
        userInfo: {},
        userMenus: [],
        permissions: []
      }
    },
    mutations: {
        setToken(state,token) {
          state.token = token
        },
        setUserInfo(state, userInfo) {
          state.userInfo = userInfo
        },
        setUserMenu(state, menu) {
          state.userMenus = menu
          const routes = mapMenuToRoute(menu)

          routes.forEach(route => {
            // 添加一条新的路由记录作为现有路由的子路由。 addRoute(parentName: string | symbol, route: RouteRecordRaw): () => void
            // 参考:https://router.vuejs.org/zh/api/#addroute
            router.addRoute("main",route)
          })
          const permissions = mapMenusToPermissions(menu)
          state.permissions = permissions

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
              const userMenu = await getUserMenu(id)
              commit("setUserMenu",userMenu.data)
              localCache.setCache("userMenus", userMenu.data)
              router.push({path: "/"})
          // eslint-disable-next-line no-empty
          } catch (error) {

          }
      },
      initLoginData({commit,dispatch}) {
        const token = localCache.getCache("token")
        if(token) {
          commit("setToken", token)
          dispatch('getInitialDataAction',null, {root: true})
        }
        const userInfo = localCache.getCache("userInfo")
        if(userInfo) {
          commit("setUserInfo", userInfo)
        }
        const userMenu = localCache.getCache("userMenus")
        if(userMenu) {
          commit("setUserMenu",userMenu)
        }
      }
    }
}

export default loginModule
