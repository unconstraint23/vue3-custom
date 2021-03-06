import { ElButton,ElContainer,ElMessageBox,ElMessage, ElTabs, ElTabPane, ElForm, ElFormItem, ElCheckbox, ElSelect, ElHeader, ElMain, ElRow, ElCol, ElSubMenu, ElRadioGroup, ElInput, ElDatePicker, ElBreadcrumb, ElBreadcrumbItem, ElTable, ElTableColumn, ElPagination, ElImage, ElDialog } from 'element-plus'
import { App } from 'vue'
import {Fold,Expand, Van, Tools, CirclePlus, ElementPlus,Monitor, Setting, Goods, ChatLineRound, ArrowRight, ArrowDown, Close, RefreshLeft, Search, Edit, Delete, ZoomIn, Plus, Download} from '@element-plus/icons-vue'
const Icon = [
  Fold,
  Expand,
  Van,
  Tools,
  CirclePlus,
  ElementPlus,
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
  ArrowRight,
  ArrowDown,
  Close,
  RefreshLeft,
  Search,
  Edit,
  Delete,
  ZoomIn,
  Plus,
  Download
]
const components = [
    ElButton,
    ElContainer,
    ElTabs,
    ElTabPane,
    ElForm,
    ElFormItem,
    ElCheckbox,
    ElSelect,
    ElContainer,
    ElHeader,
    ElMain,
    ElRow,
    ElCol,
    ElSubMenu,
    ElRadioGroup,
    ElFormItem,
    ElInput,
    ElDatePicker,
    ElBreadcrumb,
    ElBreadcrumbItem,
    ElTable,
    ElTableColumn,
    ElPagination,
    ElImage,
    ElDialog,

]


export function registerIcon(app:App):void {
for (const component of Icon) {
  app.component(component.name, component)
}
}



export default function (app:App):void {
   for (const component of components) {
        app.component(component.name,component)
}
}
