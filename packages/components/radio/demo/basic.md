---
order: 0
title:
  zh: 基本使用
  en: Basic usage
---

## zh

## en

## demo

```html
<template>
  <ix-radio v-model:checked="radio" name="demo" value="a" >a</ix-radio>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup(){
    const radio = ref(false)
  return {
    radio,
  }
  }
})
</script>
```
