<template>
  <div class="form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form
      :label-width="labelWidth"
      :rules="rules"
      ref="commonForm"
      :model="formData"
    >
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :prop="item.field"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="formData[item.field]"
                />
              </template>
              <template v-else-if="item.type === 'textarea'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  type="textarea"
                  v-model="formData[item.field]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.title"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
              <template v-else-if="item.type === 'upload'">
                <el-upload
                  v-bind="item.otherOptions"
                  v-model="formData[item.field]"
                  :http-request="httpRequest"

                >
                  <el-icon

                    ><Plus
                  /></el-icon>

                  <template #file="{ file }">
                    <div class="upload-list">
                      <img
                        class="el-upload-list__item-thumbnail"
                        :src="file.url"
                        alt=""
                      />
                      <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <el-icon><zoom-in /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleDownload(file)"
                        >
                          <el-icon><Download /></el-icon>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleRemove(file)"
                        >
                          <el-icon><Delete /></el-icon>
                        </span>
                      </span>
                    </div>
                  </template>
                </el-upload>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <el-dialog v-model="dialogVisible">
      <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </el-dialog>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from './type'
import { ElForm, UploadFile } from 'element-plus'

import _ from 'lodash'
export default defineComponent({
  name: 'formView',
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    rules: {
      type: Array,
      default: () => []
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    // const formData = ref(_.cloneDeep(props.modelValue))
    const commonForm = ref<InstanceType<typeof ElForm>>()
    const formData = ref({ ...props.modelValue })
    const dialogImageUrl = ref('')
    const dialogVisible = ref(false)
    const disabled = ref(false)
    // 计算属性是错误写法
    // const formData = computed({
    //     get: () => props.modelValue, //这里直接拿到父组件传过来的值直接用做修改，这样做是不对的
    //     set: (newValue) => {  // set方法并没有触发，当formData里边的属性发生改变时，computed无法检测到
    //       console.log("--------");
    //       emit("update:modelValue",newValue)
    //     }

    //   })
    watch(
      formData,
      (newValue) => {
        console.log(newValue)
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )
    const resetForm = (formEl: InstanceType<typeof ElForm> | undefined) => {
      if (!formEl) return
      formEl.resetFields()
    }
    const handleRemove = (file: UploadFile) => {
      console.log(file.name)
    }

    const handlePictureCardPreview = (file: UploadFile) => {
      dialogImageUrl.value = file.url!
      dialogVisible.value = true
    }

    const handleDownload = (file: UploadFile) => {
      console.log(file)
    }
    const httpRequest = (params: any) => {
      console.log(params)
      const { headers } = params
      let formData = new FormData()
      formData.append('fileName', params.file.name)
      formData.append('attachData', params.file)
      fetch(params.action, {
        method: 'POST',
        headers: headers
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
    return {
      formData,
      commonForm,
      handleRemove,
      handlePictureCardPreview,
      handleDownload,
      disabled,
      dialogVisible,
      dialogImageUrl,
      httpRequest
    }
  }
})
</script>
<style lang="scss" scoped>
.row-img {
  padding: 20px;
}
.el-form-item {
  ::v-deep .el-upload-list {
    flex-wrap: nowrap;
  }
}
</style>
