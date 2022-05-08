import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { registerGlobalApp } from './components/global';

import masterReq from './service';

masterReq.requst({
  url: "/get",
  method: "GET",
  interceptor: {
   requestInterceptor: config => {
    console.log("单独的拦截器");
    return config
  }
}
})

const rootApp = createApp(App)
rootApp.use(store).use(router).mount("#app");
