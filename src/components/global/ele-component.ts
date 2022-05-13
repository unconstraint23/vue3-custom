import { ElButton,ElContainer,ElMessageBox,ElMessage, ElTabs, ElTabPane, ElForm, ElFormItem, ElCheckbox } from 'element-plus'
import { App } from 'vue'

const components = [
    ElButton,
    ElContainer,
    ElTabs,
    ElTabPane,
    ElForm,
    ElFormItem,
    ElCheckbox
]


export default function (app:App):void {
   for (const component of components) {
        app.component(component.name,component)
}
}
