import { App } from 'vue'

import { formatUtcString } from '@/utils/date-format'
import { ElMessage, ElMessageBox } from 'element-plus'
import 'element-plus/es/components/message-box/style/index'
import 'element-plus/es/components/message/style/index'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$msgBox = ElMessageBox
}
