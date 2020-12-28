<template>
  <div class="ix-image">
    <img
      v-if="imgStatus !== 'error'"
      :class="['ix-image-img', preview ? 'image-preview' : '']"
      :src="src"
      :style="{ width: imageWidth, height: imageHeight, objectFit: objectFit }"
      :alt="alt"
      @error="onError"
      @load="onLoaded"
      @click="onClick"
    />
    <div
      v-else-if="imgStatus === 'error'"
      class="image-error"
      :style="{
        width: imageWidth,
        height: imageHeight,
        objectFit: objectFit,
        background: `url(${fallback || imageConfig.fallback})`,
      }"
    ></div>
    <template v-if="imgStatus !== 'error' && preview">
      <img-preview v-if="isShowPreview" :previewSrc="src" @close="onClose"></img-preview>
    </template>
  </div>
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
    objectFit: {
      type: String,
      default: 'fill',
    },
  },
  setup(props: ImageProps, context) {
    // init
    const isShowPreview = ref(false)
    const imageConfig = useGlobalConfig('image')
    const imageWidth = computedImg(props, imageConfig, 'width')
    const imageHeight = computedImg(props, imageConfig, 'height')
    const imgStatus = ref('loading')
    const onError = () => {
      imgStatus.value = 'error'
      context.emit('error')
    }
    const onLoaded = () => {
      imgStatus.value = 'loaded'
      context.emit('loaded')
    }
    const onClick = () => {
      isShowPreview.value = true
    }
    const onClose = () => {
      isShowPreview.value = false
    }
    return {
      imageWidth,
      imageHeight,
      onLoaded,
      onError,
      onClick,
      isShowPreview,
      onClose,
      imgStatus,
      imageConfig,
    }
  },
})
const computedImg = (props: ImageProps, imageConfig: ImageProps, type: 'width' | 'height') => {
  return computed(() => {
    if (props[type] == null) {
      return typeof imageConfig[type] === 'number' ? `${imageConfig[type]}px` : imageConfig[type]
    }
    return typeof props[type] === 'number' ? `${props[type]}px` : props[type]
  })
}
</script>
