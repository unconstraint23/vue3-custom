import { IBreadcrumb } from '@/base-ui/breadcrumb'
import { RouteRecordRaw } from 'vue-router'

let fristMenu: any = null
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
          if(!fristMenu) {
            fristMenu = menu
          }
        }
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenu)

  return routes
}

export function pathMapBreadcrumbs(userMenu: any[], currentPath:string):any {


  const breadcrumbs: IBreadcrumb[] = []
  pathMapToMenu(userMenu,currentPath,breadcrumbs)
  return breadcrumbs
}

export function pathMapToMenu(userMenu:any[],currentPath: string, breadcrumb?: IBreadcrumb[]) :any {

  for (const menu of userMenu) {

      if(menu.type === 1) {
        const findMenu = pathMapToMenu(menu.children ?? [], currentPath)

        if(findMenu) {
          breadcrumb?.push({name: menu.name})
          breadcrumb?.push({name: findMenu.name})
          return findMenu
        }
      } else if(menu.type === 2 && menu.url === currentPath) {
        console.log(menu);

        return menu
      }
   }

}
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermission(userMenus)

  return permissions
}

export {fristMenu}
