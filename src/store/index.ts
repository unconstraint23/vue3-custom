import { createStore } from "vuex";
import login from "./login/login";


export default createStore({
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
    login
  },
});
