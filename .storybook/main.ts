// SPDX-License-Identifier: AGPL-3.0-or-later
import type { StorybookConfig } from '@storybook/vue3-vite'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-links'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
}

export default config
