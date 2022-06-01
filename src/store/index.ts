import { createStore,useStore as UseVuexStore,Store } from "vuex";
import login from "./login/login";
import system from "./main/system/system";
import { IStoreType } from './type';


const store = createStore({
  state() {
    return {
      name: '',
      age: 1
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login,
    system
  },
});

export function getLoginData() {
  store.dispatch("login/initLoginData")
}
export function useStore():Store<IStoreType> {
  return UseVuexStore()
}

export default store
