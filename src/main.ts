import { createApp } from "vue";
import AppView from "./App.vue";
import router from "./router";
import store from "./store";
import { getLoginData } from './store';
import { registerI } from './components/global';
import { globalRegister } from './public-methods';
import "./css/index.scss";
import "normalize.css"
import menuPlugin from '@/base-ui/menu';




const rootApp = createApp(AppView)
rootApp.use(store)
getLoginData()
rootApp.use(router)
rootApp.use(globalRegister)
rootApp.use(menuPlugin)

registerI(rootApp)

rootApp.mount("#app");
