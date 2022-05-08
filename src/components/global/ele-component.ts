import { ElButton,ElContainer,ElMessageBox,ElMessage } from 'element-plus'
import { App } from 'vue'

const components = [
    ElButton,
    ElContainer,
   
]


export default function (app:App):void {
   for (const component of components) {
        app.component(component.name,component)
} 
}
