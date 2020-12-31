<template>
  <div ref="radioGroupRef" class="ix-radio-group">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { PropTypes, withUndefined } from '@idux/cdk/utils'
import { computed, defineComponent, provide, reactive, toRefs } from 'vue'
import { RadioGroupProps, modelValueType } from './types'
import { radioGroupKey } from './radio'

export default defineComponent({
  name: 'IxRadioGroup',
  props: {
    modelValue: PropTypes.oneOfType([String, Number, Boolean]),
    size: withUndefined(PropTypes.oneOf(['large', 'medium', 'small'])).def('medium'),
    mode: withUndefined(PropTypes.oneOf(['fill', 'border'])),
    disabled: PropTypes.bool.def(false),
    color: PropTypes.string.def('#00b27a'),
  },
  emits: ['change', 'update:modelValue'],
  setup(props: RadioGroupProps, { emit }) {
    const change = (radioValue: modelValueType) => {
      emit('update:modelValue', radioValue)
      emit('change', radioValue)
    }
    //TODO 等待form表单设计完成再兼容form配置
    const radioGroupSize = computed(() => {
      return props.size
    })
    // const radioGroupMode = computed(()=>{

    // })
    provide(
      radioGroupKey,
      reactive({
        name: 'IxRadioGroup',
        ...toRefs(props),
        change: change,
        radioGroupSize,
      }),
    )
  },
})
</script>
