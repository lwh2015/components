<template>
  <div class="ix-image-preview">
    <div class="ix-image-preview-mask"></div>
    <div class="ix-image-preview-tools">
      <ul class="preview-tools">
        <li class="tools-item rotate-left" @click="rotateLeft">
          <ix-icon name="rotate-left" />
        </li>
        <li class="tools-item rotate-right" @click="rotateRight">
          <ix-icon name="rotate-right" />
        </li>
        <li class="tools-item zoom-in" @click="zoomIn">
          <ix-icon name="zoom-in" />
        </li>
        <li class="tools-item zoom-out" :class="scale < 0.2 ? 'tools-item__disabled' : ''" @click="zoomOut">
          <ix-icon name="zoom-out" />
        </li>
        <li class="tools-item close" @click="close">
          <ix-icon name="close" />
        </li>
      </ul>
    </div>
    <div class="ix-image-preview-img">
      <img :src="previewSrc" alt="" :style="{ transform: transform }" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { ImagePreviewProps } from './types'
import { IxIcon } from '@idux/components/icon'

export default defineComponent({
  name: 'IxImgPreview',
  components: { IxIcon },
  props: {
    previewSrc: String,
  },
  setup(props: ImagePreviewProps, context) {
    let scale = ref(1.0)
    let rotate = ref(0)
    let transform = ref('')
    function close() {
      context.emit('close')
    }
    function zoomOut() {
      if (scale.value > 0.2) {
        scale.value -= 0.1
      }
    }
    function zoomIn() {
      scale.value += 0.1
    }
    function rotateLeft() {
      rotate.value -= 90
    }
    function rotateRight() {
      rotate.value += 90
    }
    transform = computed(() => `scale3d(${scale.value}, ${scale.value}, 1) rotate(${rotate.value}deg)`)

    return {
      close,
      scale,
      rotate,
      zoomOut,
      zoomIn,
      rotateLeft,
      rotateRight,
      transform,
    }
  },
})
</script>
