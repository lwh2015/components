<template>
  <img
    class="ix-image"
    :class="[isError ? 'ix-image-error' : 'ix-image-img', preview ? 'img-preview' : '']"
    :src="imgSrc"
    :style="{ width: imgWidth, height: imgHeight, objectFit: fit }"
    :alt="alt"
    v-bind="$attrs"
    @error="onError"
    @click="onClick"
  />
  <template v-if="!isError && preview">
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
    const imgWidth = computedImg(props.width || imageConfig.width)
    const imgHeight = computedImg(props.height || imageConfig.height)
    const isError = ref(false)

    function onError() {
      isError.value = true
      imgSrc.value = props.fallback || imageConfig.fallback
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
      isError,
      onError,
      onClick,
      isShow,
      onClose,
    }
  },
})
function computedImg(data: string | number | undefined) {
  return computed(() => {
    if (typeof data === 'number') {
      return data + 'px'
    } else {
      return data
    }
  })
}
</script>
