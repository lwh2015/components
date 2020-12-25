import { installComponent } from '@idux/components/core/utils'
import IxImage from './src/Image.vue'
import IxImagePreview from './src/ImgPreview.vue'

IxImage.install = installComponent(IxImage)
IxImagePreview.install = installComponent(IxImagePreview)

export { IxImage, IxImagePreview }
export type { ImageComponent } from './src/types'
