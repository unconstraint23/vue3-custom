import ContextMenu from './bro-menu.vue';
import { createApp,App } from 'vue';
import { ElMessage } from 'element-plus'
let $vm:any = null
const menuPlugin: any = {

}
const initInstance = () => {
  const app = createApp(ContextMenu)
  const container = document.createElement("div")
  app.config.globalProperties.$message = ElMessage
  $vm = app.mount(container)
  document.body.appendChild(container)
}
const defaultProps = {
  menuList: [
    {
      label: '复制',

    },
    {
      label: '复制整行',

    },
    {
      label: '复制整列',

    },
    {
      label: '复制表格',

    }
  ],

  x: 0,
  y: 0,
  // customClass: 'class-a',
  zIndex: 3000,

}
menuPlugin.install = function(app: App) {
  const menuInstance = {
    show(options: any) {
      if(!$vm) {
      initInstance()
    }
    options = Object.assign({}, defaultProps, options);


    for (const i in options) {
      $vm[i] = options[i];
    }
    $vm.isVisible = true
      return $vm
    }

  }
    app.config.globalProperties.$contextMenu = menuInstance
}

export default menuPlugin
