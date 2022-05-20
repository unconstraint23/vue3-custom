import { createApp } from "vue";
import AppView from "./App.vue";
import router from "./router";
import store from "./store";
import { getLoginData } from './store';
import { registerI } from './components/global';
import "./css/index.scss";
import "normalize.css"




const rootApp = createApp(AppView)
rootApp.use(store).use(router)
registerI(rootApp)
getLoginData()
rootApp.mount("#app");
