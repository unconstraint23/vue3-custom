import { getListData } from '@/service/main/system/system';
import { IRootState } from '@/store/type';
import { Module } from 'vuex';
import { ISystemState } from './type';


const systemModule: Module<ISystemState,IRootState> = {
  namespaced: true,
  state() {
    return {
      usersCount: 0,
      usersList: [],
      roleCount: 0,
      roleList: [],
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]

      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeUsersList(state, userList: any[]) {
      state.usersList = userList
    },
    changeUsersCount(state, userCount: number) {
      state.usersCount = userCount
    },
    changeRoleList(state, list: any[]) {
      state.roleList = list
    },
    changeRoleCount(state, count: number) {
      state.roleCount = count
    },
    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },
    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    },
    changeMenuList(state, list: any[]) {
      state.menuList = list
    },
    changeMenuCount(state, count: number) {
      state.menuCount = count
    }
  },
  actions: {
   async getPageListActions({ commit }, payload:any) {
    const pageName = payload.pageName
    const pageUrl = `/${pageName}/list`
    try {
      const pageRes = await getListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageRes.data
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    // eslint-disable-next-line no-empty
    } catch (error) {

    }

    }
  }
}

export default systemModule
