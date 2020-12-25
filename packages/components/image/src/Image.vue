<template>
  <img
    v-if="imgStatus !== 'error'"
    :class="['ix-image', 'ix-image-img', preview ? 'image-preview' : '']"
    :src="imgSrc"
    :style="{ width: imgWidth, height: imgHeight, objectFit: fit }"
    :alt="alt"
    v-bind="$attrs"
    @error="onError"
    @load="onLoad"
    @click="onClick"
  />
  <img
    v-else
    :class="['ix-image', 'ix-image-error']"
    :src="imgSrc"
    :style="{ width: imgWidth, height: imgHeight, objectFit: fit }"
    :alt="alt"
    v-bind="$attrs"
  />
  <template v-if="imgStatus !== 'error' && preview">
    <img-preview v-if="isShow" :previewSrc="imgSrc" @close="onClose"></img-preview>
  </template>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { ImageProps } from './types'
import ImgPreview from './ImgPreview.vue'
import { useGlobalConfig } from '@idux/components/core/config'

export default defineComponent({
  name: 'IxImage',
  components: { ImgPreview },
  props: {
    src: String,
    width: [String, Number],
    height: [String, Number],
    preview: Boolean,
    fallback: {
      type: String,
    },
    alt: String,
    fit: String,
  },
  setup(props: ImageProps) {
    // init
    const imgSrc = ref(props.src)
    const isShow = ref(false)
    const imageConfig = useGlobalConfig('image')
    const imgWidth = computedImg(props.width, imageConfig.width)
    const imgHeight = computedImg(props.height, imageConfig.height)
    const imgStatus = ref('loading')

    function onError() {
      imgStatus.value = 'error'
      imgSrc.value = props.fallback || imageConfig.fallback
    }

    function onLoad() {
      imgStatus.value = 'load'
    }
    function onClick() {
      isShow.value = true
    }
    function onClose() {
      isShow.value = false
    }
    return {
      imgWidth,
      imgHeight,
      imgSrc,
      onLoad,
      onError,
      onClick,
      isShow,
      onClose,
      imgStatus,
    }
  },
})
function computedImg(data: string | number | undefined, globalData: string | number | undefined) {
  if (data == null || data === '') {
    data = globalData
  }
  return computed(() => {
    if (typeof data === 'number') {
      return data + 'px'
    } else {
      return data
    }
  })
}
</script>
