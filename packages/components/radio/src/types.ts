import { ComputedRef } from 'vue'

export interface RadioProps {
  value?: boolean | string | number
  disabled?: boolean
  name?: string
  checked?: boolean
}
export interface RadioButtonProps {
  checked?: boolean
  disabled?: boolean
  value?: boolean | string | number
  name?: string
}
export interface RadioGroupProps {
  modelValue?: boolean | string | number
  disabled?: boolean
  size?: string
  mode?: string
  color?: string
}
export type modelValueType = boolean | string | number
export interface RadioGroupConfig extends RadioGroupProps {
  name: 'IxRadioGroup'
  change: (value: modelValueType) => void
  radioGroupSize: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IxRadioComponent extends RadioProps {}
export type IxRadioButtonComponent = RadioButtonProps

export type IxRadioGroupComponent = RadioGroupProps

export interface radioModeConfig {
  isGroup: ComputedRef
  radioGroup: RadioGroupConfig
}
