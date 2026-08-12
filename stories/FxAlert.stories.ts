// SPDX-License-Identifier: AGPL-3.0-or-later
import type { Meta, StoryObj } from '@storybook/vue3'
import FxAlert from '../src/components/feedback/FxAlert.vue'
import FxConfigProvider from '../src/config/FxConfigProvider.vue'

type StoryArgs = {
  variant: 'info' | 'success' | 'warning' | 'danger'
  title: string
  body: string
  closable: boolean
}

const meta = {
  title: 'Feedback/FxAlert',
  component: FxAlert,
  render: (args: StoryArgs) => ({
    components: { FxAlert, FxConfigProvider },
    setup: () => ({ args }),
    template: `
      <FxConfigProvider locale="en-US">
        <FxAlert :variant="args.variant" :title="args.title" :closable="args.closable">
          {{ args.body }}
        </FxAlert>
      </FxConfigProvider>
    `,
  }),
  args: {
    variant: 'info',
    title: 'Heads up',
    body: 'Something useful happened.',
    closable: true,
  },
} satisfies Meta<StoryArgs>

export default meta
type Story = StoryObj<typeof meta>

export const Info: Story = {}
export const Warning: Story = { args: { variant: 'warning', title: 'Careful' } }
