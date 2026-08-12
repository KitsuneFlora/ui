// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import FxButton from '../src/components/action/FxButton.vue'
import FxConfigProvider from '../src/config/FxConfigProvider.vue'

describe('FxButton', () => {
  it('renders label and emits click', async () => {
    const wrapper = mount(FxConfigProvider, {
      slots: {
        default: '<FxButton>Save</FxButton>',
      },
      global: {
        components: { FxButton },
      },
    })

    const button = wrapper.find('button')
    expect(button.text()).toContain('Save')
    await button.trigger('click')
  })

  it('supports prefix and suffix slots', () => {
    const wrapper = mount(FxButton, {
      slots: {
        prefix: '<span data-test="prefix">P</span>',
        default: 'Go',
        suffix: '<span data-test="suffix">S</span>',
      },
    })
    expect(wrapper.find('[data-test="prefix"]').exists()).toBe(true)
    expect(wrapper.find('[data-test="suffix"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Go')
  })
})
