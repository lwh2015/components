<template>
  <label
    class="ix-radio"
    :class="{
      'ix-radio-disabled': isDisabled,
      'ix-radio-checked': isChecked,
    }"
  >
    <span
      class="ix-radio-body"
      :class="{
        'ix-radio-disabled': isDisabled,
        'ix-radio-checked': isChecked,
      }"
    >
      <span class="ix-radio-body-inner"></span>
      <input
        ref="radioRef"
        type="radio"
        :name="name"
        :disabled="isDisabled"
        class="ix-radio-body-input"
        :checked="isChecked"
        :value="value"
        @change="onChange"
      />
    </span>
    <span class="ix-radio-label">
      <slot> </slot>
    </span>
  </label>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { RadioProps, modelValueType } from './types'
import { PropTypes } from '@idux/cdk/utils'
import { getRadioAttrs, radioMode } from './radio'

export default defineComponent({
  name: 'IxRadio',
  props: {
    value: PropTypes.oneOfType([String, Number, Boolean]),
    disabled: PropTypes.bool.def(false),
    name: PropTypes.string.def(''),
    checked: PropTypes.bool.def(false),
  },
  emits: ['change', 'update:checked'],
  setup(props: RadioProps, { emit }) {
    const { isGroup, radioGroup } = radioMode()
    const { isDisabled } = getRadioAttrs(props, isGroup, radioGroup)
    const isChecked = computed<boolean>(() => {
      return (isGroup.value ? radioGroup.modelValue === props.value : props.checked) as boolean
    })

    const onChange = (e: { target: { checked: boolean } }) => {
      const isChecked = e.target.checked
      emit('change', isChecked)
      emit('update:checked', isChecked)
      isGroup.value && radioGroup.change(props.value as modelValueType)
    }
    return {
      isDisabled,
      isChecked,
      onChange,
    }
  },
})
</script>
