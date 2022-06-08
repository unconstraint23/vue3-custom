type IFormType = 'input' | 'password' | 'select' | 'datepicker' | "textarea" | "upload"

export interface IFormItem {
    field: string,
    type: IFormType,
    label: string,
    rules?: any[],
    placeholder?: string,
     // 针对select
  options?: any[],
  // 针对特殊的属性
  otherOptions?: any,
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout?: any,
  rules?: object
}
