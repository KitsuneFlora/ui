// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/vue3'
import { Search } from '@lucide/vue'
import FxButton from '../src/components/action/FxButton.vue'
import FxIcon from '../src/components/icons/FxIcon.vue'
import FxConfigProvider from '../src/config/FxConfigProvider.vue'

type StoryArgs = {
  label: string
  showPrefix: boolean
  variant: 'primary' | 'secondary' | 'ghost' | 'danger'
  size: 'xs' | 'sm' | 'md' | 'lg'
}

const meta = {
  title: 'Action/FxButton',
  component: FxButton,
  render: (args: StoryArgs) => ({
    components: { FxButton, FxConfigProvider, FxIcon },
    setup: () => ({ args, Search }),
    template: `
      <FxConfigProvider locale="en-US">
        <FxButton :variant="args.variant" :size="args.size">
          <template v-if="args.showPrefix" #prefix>
            <FxIcon :icon="Search" />
          </template>
          {{ args.label }}
        </FxButton>
      </FxConfigProvider>
    `,
  }),
  args: {
    label: 'Continue',
    variant: 'primary',
    size: 'md',
    showPrefix: true,
  },
} satisfies Meta<StoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Danger: Story = { args: { variant: 'danger', label: 'Delete' } }
