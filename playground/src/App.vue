<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { ref } from 'vue'
import {
  FxConfigProvider,
  FxButton,
  FxAlert,
  FxCard,
  FxPageHeader,
  FxFoxMark,
  FxLegalNotice,
  useFxTheme,
} from '@kitsuneflora/ui'

const open = ref(false)
const theme = useFxTheme()
theme.init()
</script>

<template>
  <FxConfigProvider locale="en-US">
    <main style="max-width: 720px; margin: 0 auto; padding: 32px">
      <FxPageHeader title="foxnature-ui" description="Minimal playground consumer.">
        <template #actions>
          <FxButton variant="secondary" size="sm" @click="theme.cycle()">Theme</FxButton>
        </template>
      </FxPageHeader>

      <FxCard>
        <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 16px">
          <FxFoxMark style="width: 40px; height: 40px; color: var(--fx-color-brand)" />
          <strong>Warm fox UI</strong>
        </div>
        <FxAlert variant="success" title="Ready" closable style="margin-bottom: 16px">
          Library styles and tokens are loaded.
        </FxAlert>
        <FxButton @click="open = !open">Toggle flag: {{ open }}</FxButton>
      </FxCard>

      <FxLegalNotice
        style="margin-top: 24px"
        source-url="https://github.com/KitsuneFlora/foxnature-ui"
      />
    </main>
  </FxConfigProvider>
</template>
