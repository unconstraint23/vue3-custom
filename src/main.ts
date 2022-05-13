import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { registerGlobalApp } from './components/global';
import "./css/index.scss";
import "normalize.css"




const rootApp = createApp(App)
rootApp.use(store).use(router).mount("#app");
