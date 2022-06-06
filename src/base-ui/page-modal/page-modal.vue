<template>
  <div class="page-modal">
    <el-dialog :title="title" v-model="dialogVisible" width="30%" center destroy-on-close>
      <rj-form v-bind="modalConfig" v-model="formData">
      </rj-form>
      <slot></slot>
        <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleConfirmClick">
            确 定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent,getCurrentInstance,ref, watch } from 'vue'
import rjForm from '@/base-ui/form';
import { useStore } from '@/store';
export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: '新建用户'
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
  },
  components: {
    rjForm
  },
  emits: ["confirm"],
  setup(props, { emit }) {

    const dialogVisible = ref(false)

    const formData = ref<any>({})
    watch(() => props.defaultInfo,
      nv => {
        for (const item of props.modalConfig.formItems) {
            formData.value[`${item.field}`] = nv[`${item.field}`]
        }
      }
    )
    function handleConfirmClick() {
      emit("confirm",formData)

    }

    return {
      dialogVisible,
      handleConfirmClick,
      formData
    }
  }
})
</script>
<style lang="scss" scoped></style>
