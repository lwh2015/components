import { mount, MountingOptions, VueWrapper } from '@vue/test-utils'
import { DefineComponent } from 'vue'
import IxRadio from '../src/Radio.vue'
import { RadioProps } from '../src/types'

describe('Radio.vue', () => {
  let RadioMount: (
    options?: MountingOptions<Partial<RadioProps>>,
  ) => VueWrapper<InstanceType<DefineComponent<RadioProps>>>

  beforeEach(() => {
    RadioMount = (options = {}) => {
      return mount<RadioProps>(IxRadio, {
        ...options,
      })
    }
  })

  test('render work', () => {
    const wrapper = RadioMount()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
