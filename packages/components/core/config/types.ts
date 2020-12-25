import type { ComponentSize, ButtonMode } from '../types'

export type GlobalConfigKey = keyof GlobalConfig

export interface GlobalConfig {
  button: ButtonConfig
  icon: IconConfig
  image: ImageConfig
}

export interface ButtonConfig {
  mode: ButtonMode
  size: ComponentSize
}

export interface IconConfig {
  loadIconDynamically?: (iconName: string) => Promise<string>
}

export interface ImageConfig {
  width?: string | number
  height?: string | number
  fallback?: string
}
