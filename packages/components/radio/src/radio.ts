import { computed, ComputedRef, inject } from 'vue'
import { RadioProps, RadioGroupConfig, radioModeConfig } from './types'
import type { InjectionKey } from 'vue'

export const getRadioAttrs = (
  props: RadioProps,
  isGroup: ComputedRef<boolean>,
  radioGroup: RadioGroupConfig,
): Record<string, ComputedRef> => {
  const isDisabled = computed(() => {
    return isGroup.value ? radioGroup.disabled : props.disabled
  })
  return {
    isDisabled,
  }
}

export const radioGroupKey: InjectionKey<RadioGroupConfig> = 'IxRadioGroup' as any

export const radioMode = (): radioModeConfig => {
  const radioGroup = inject(radioGroupKey, {} as RadioGroupConfig)
  const isGroup = computed(() => radioGroup.name === 'IxRadioGroup')
  return {
    isGroup,
    radioGroup,
  }
}
