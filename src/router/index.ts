import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import  localCache  from '@/utils/cache';
// import user from "./main/system/user";
// import role from "./main/system/role";
import { fristMenu } from '@/utils/map-menu';
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/Home.vue"),
    // children: []
  },
  {
    path: "/login",
    name: "login",
    component: () => import('@/views/user/login.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found.vue')
  }
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to,from,next) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }



  if (to.path == "/main" || to.path == "/") {

    next({path:fristMenu.url})
  }
  next()
})

export default router;
