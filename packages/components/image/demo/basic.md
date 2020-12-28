---
order: 0
title:
  zh: 基本使用
 
---

## zh

## demo

```html
<template>
  <!-- 基础用法 -->
  <div>
  <h3>基础用法（可通过fit确定图片如何适应到容器框，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-objectFit" target="_blank">object-objectFit</a>）</h3>
  <div style="display:flex;justify-content: space-around">
   <ix-image objectFit="fill" :width="width" :height="height"  src="https://cdn.jsdelivr.net/gh/danranvm/image-hosting/images/idux.jpg" alt="demo"/>
   <ix-image objectFit="contain" class="demo" src="https://cdn.jsdelivr.net/gh/danranvm/image-hosting/images/idux.jpg" />
    <ix-image objectFit="contain" class="demo" src="https://cdn.jsdelivr.net/gh/danranvm/image-hosting/images/idux.jpg" />
     <ix-image objectFit="cover" class="demo" src="https://cdn.jsdelivr.net/gh/danranvm/image-hosting/images/idux.jpg" />
      <ix-image objectFit="none" class="demo" src="https://cdn.jsdelivr.net/gh/danranvm/image-hosting/images/idux.jpg" />
      <ix-image objectFit="scale-down" class="demo" src="https://cdn.jsdelivr.net/gh/danranvm/image-hosting/images/idux.jpg" />
  </div>
  </div>
</template>

<style lang="less" scoped>
  .demo{
    width:100px;
    height:100px;
  }
</style>
<script>

  export default{
    data(){
      return{
        width:100,
        height:100
      }
    }
  }
</script>

```
