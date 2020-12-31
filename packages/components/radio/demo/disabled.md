---
order: 0
title:
  zh: 不可用
  en: Disabled usage
---

## zh

## en

## demo

```html
<template>
  <ix-radio v-model:checked="radio"  value="a" :disabled="disabled">a</ix-radio>
  <ix-radio v-model:checked="radio1"  value="b" :disabled="disabled">b</ix-radio>
  <ix-button @click="toggle">Toggle disabled</ix-button>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup(){
    const radio = ref(false)
    const radio1 = ref(true)
    const disabled = ref(true)
    const toggle = ()=>{
        disabled.value = !disabled.value
        console.log(disabled.value)
    }
  return {
    radio,
    radio1,
    toggle,
    disabled
  }
  }
})
</script>
```
