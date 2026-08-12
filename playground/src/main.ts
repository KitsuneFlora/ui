// SPDX-License-Identifier: AGPL-3.0-or-later
import { createApp } from 'vue'
import App from './App.vue'
import '@kitsuneflora/ui/style.css'
import '@kitsuneflora/ui/reset.css'
import '@kitsuneflora/ui/preset.css'
import { bootstrapFxTheme } from '@kitsuneflora/ui'

bootstrapFxTheme()
createApp(App).mount('#app')
