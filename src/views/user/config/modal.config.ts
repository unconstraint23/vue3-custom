import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      // rules: [
      //   {
      //     required: true,
      //     message: '请输入用户名',
      //     trigger: 'blur'
      //   },
      //   {
      //     pattern: /^[a-z0-9]{3,10}$/,
      //     message: '用户名必须是3~10个字母或者数字~',
      //     trigger: 'blur'
      //   }
      // ]
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      // rules: [
      //   {
      //     required: true,
      //     message: '请输入真是姓名',
      //     trigger: 'blur'
      //   },
      //   {
      //     pattern: /^\w{2,}$/,
      //     message: '真实姓名必须合法',
      //     trigger: 'blur'
      //   }
      // ]
    },
    {
      field: 'password',
      type: 'password',
      label: '用户密码',
      placeholder: '请输入密码',
      isHidden: false,
      // rules: [
      //   {
      //     required: true,
      //     message: '密码是必传内容~',
      //     trigger: 'blur'
      //   },
      //   {
      //     pattern: /^[a-z0-9]{3,}$/,
      //     message: '用户名必须是3位以上的字母或者数字~',
      //     trigger: 'blur'
      //   }
      // ]
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码',
      // rules: [
      //   {
      //     required: true,
      //     message: '请输入手机号码',
      //     trigger: 'blur'
      //   },
      //   {
      //     pattern: /^1[3456789]\d{9}$/,
      //     message: '请输入合法手机号',
      //     trigger: 'blur'
      //   }
      // ]
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '选择部门',
      placeholder: '请选择部门',
      options: [],
      // rules: [
      //   {
      //     required: true,
      //     message: '请选择部门',
      //     trigger: 'blur'
      //   }
      // ]
    },
    {
      field: 'roleId',
      type: 'select',
      label: '选择角色',
      placeholder: '请选择角色',
      options: [],
      // rules: [
      //   {
      //     required: true,
      //     message: '请选择角色',
      //     trigger: 'blur'
      //   }
      // ]
    }
  ],
  colLayout: { span: 24 },
  rules: {
    name: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      },
      {
        pattern: /^[a-z0-9]{3,10}$/,
        message: '用户名必须是3~10个字母或者数字~',
        trigger: 'blur'
      }
    ],
    realname: [
      {
        required: true,
        message: '请输入真是姓名',
        trigger: 'blur'
      },
      {
        pattern: /^[\u4e00-\u9fa5]{1,7}$|^[\dA-Za-z_]{1,14}$/,
        message: '真实姓名必须合法',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: '密码是必传内容~',
        trigger: 'blur'
      },
      {
        pattern: /^[a-z0-9]{3,}$/,
        message: '用户名必须是3位以上的字母或者数字~',
        trigger: 'blur'
      }
    ],
    cellphone: [
      {
        required: true,
        message: '请输入手机号码',
        trigger: 'blur'
      },
      {
        pattern: /^1[3456789]\d{9}$/,
        message: '请输入合法手机号',
        trigger: 'blur'
      }
    ],
    departmentId: [
      {
        required: true,
        message: '请选择部门',
        trigger: 'blur'
      }
    ],
    roleId: [
      {
        required: true,
        message: '请选择角色',
        trigger: 'blur'
      }
    ]
  }
}
