// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Preview } from '@storybook/vue3'
import '../src/styles/tokens.css'
import '../src/styles/reset.css'
import '../src/styles/preset.css'
import { bootstrapFxTheme } from '../src/theme'

bootstrapFxTheme({ defaultPreference: 'light' })

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    layout: 'padded',
  },
}

export default preview
