import type { App } from 'vue'
import { IxButton, IxButtonGroup } from './button'
import { IxIcon } from './icon'
import { IxImage } from './image'

const components = [IxButton, IxButtonGroup, IxIcon, IxImage]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

const version = '0.0.0'

export default {
  install,
  version,
}

export * from './core/config'
export * from './core/types'
export * from './button'
export * from './i18n'
export * from './icon'
export * from './image'
