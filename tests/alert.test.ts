// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import FxAlert from '../src/components/feedback/FxAlert.vue'
import FxConfigProvider from '../src/config/FxConfigProvider.vue'

describe('FxAlert', () => {
  it('uses locale close label', async () => {
    const wrapper = mount(FxConfigProvider, {
      props: { locale: 'en-US' },
      slots: {
        default: '<FxAlert closable variant="info">Hello</FxAlert>',
      },
      global: {
        components: { FxAlert },
      },
    })
    await nextTick()
    const close = wrapper.find('.fx-alert__close')
    expect(close.attributes('aria-label')).toBe('Close')
  })

  it('emits close', async () => {
    const wrapper = mount(FxAlert, {
      props: { closable: true },
      slots: { default: 'Body' },
      global: {
        stubs: {
          FxIcon: true,
        },
      },
    })
    await wrapper.find('.fx-alert__close').trigger('click')
    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
