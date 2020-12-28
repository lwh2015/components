export interface ImageProps {
  // please add readonly for every prop
  readonly src?: string
  readonly width?: string | number
  readonly height?: string | number
  readonly fallback?: string
  readonly preview?: boolean
  readonly alt?: string
  readonly fit?: string
}
export interface ImagePreviewProps {
  readonly previewSrc?: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IxImageComponent extends ImageProps {}
