import { RouteRecordRaw } from 'vue-router'

export function mapMenuToRoute(userMenu: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 默认展示所有路由
  const allRoute: RouteRecordRaw[] = []

  const routeFiles = require.context('../router/main', true, /\.ts$/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])

    allRoute.push(route.default)
  })

  // 2.根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route
  const _recurseGetRoute = (menus: any[]) => {
    if (!menus) {
      return
    }


    for (const menu of menus) {
      if (menu.type == 2) {
        const route = allRoute.find((route) => route.path == menu.url)
        if (route) {
          routes.push(route)
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenu)

  return routes
}
