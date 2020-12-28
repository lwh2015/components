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
        <li class="tools-item zoom-out" :class="isZoomOutDisabled ? 'tools-item-disabled' : ''" @click="zoomOut">
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
const SCALE_MIN = 0.2
const SCALE_INIT = 1.0
const SCALE_SETUP = 0.1
const ROTATE_INIT = 0
const ROTATE_SETUP = 90

export default defineComponent({
  name: 'IxImgPreview',
  components: { IxIcon },
  props: {
    previewSrc: String,
  },
  setup(props: ImagePreviewProps, context) {
    let scale = ref(SCALE_INIT)
    let rotate = ref(ROTATE_INIT)
    let transform = ref('')
    const isZoomOutDisabled = computed(() => scale.value < SCALE_MIN)
    const close = () => {
      context.emit('close')
    }
    const zoomOut = () => {
      if (scale.value > SCALE_MIN) {
        scale.value -= SCALE_SETUP
      }
    }
    const zoomIn = () => {
      scale.value += SCALE_SETUP
    }
    const rotateLeft = () => {
      rotate.value -= ROTATE_SETUP
    }
    const rotateRight = () => {
      rotate.value += ROTATE_SETUP
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
      isZoomOutDisabled,
    }
  },
})
</script>
