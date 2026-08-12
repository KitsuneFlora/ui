// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import { nextTick, ref } from 'vue'
import FxDialog from '../src/components/overlay/FxDialog.vue'
import FxConfigProvider from '../src/config/FxConfigProvider.vue'

describe('FxDialog keyboard', () => {
  it('closes on Escape when dismissible', async () => {
    const open = ref(true)
    const wrapper = mount(
      {
        components: { FxConfigProvider, FxDialog },
        setup: () => ({ open }),
        template: `
          <FxConfigProvider>
            <FxDialog v-model:open="open" title="Demo" description="Dialog keyboard test">
              Content
            </FxDialog>
          </FxConfigProvider>
        `,
      },
      { attachTo: document.body },
    )

    await flushPromises()
    await nextTick()

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
    await flushPromises()
    await nextTick()

    expect(open.value).toBe(false)
    wrapper.unmount()
  })
})
