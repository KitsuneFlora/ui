<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
withDefaults(
  defineProps<{
    sourceUrl: string
    licenseUrl?: string
    copyright?: string
    sourceLabel?: string
    licenseLabel?: string
  }>(),
  {
    licenseUrl: 'https://www.gnu.org/licenses/agpl-3.0.html',
    copyright: 'Copyright © KitsuneFlora contributors',
    sourceLabel: 'Source',
    licenseLabel: 'License',
  },
)
</script>

<template>
  <aside class="fx-legal" aria-label="Legal notice">
    <p v-if="copyright" class="fx-legal__copyright">{{ copyright }}</p>
    <p class="fx-legal__links">
      <a :href="sourceUrl" rel="noopener noreferrer">{{ sourceLabel }}</a>
      <span aria-hidden="true">·</span>
      <a :href="licenseUrl" rel="noopener noreferrer">{{ licenseLabel }}</a>
    </p>
    <div v-if="$slots.default" class="fx-legal__extra">
      <slot />
    </div>
  </aside>
</template>

<style scoped>
.fx-legal {
  font-size: var(--fx-text-xs);
  color: var(--fx-color-text-muted);
  line-height: var(--fx-leading-xs);
}

.fx-legal__copyright {
  margin: 0 0 var(--fx-space-1);
}

.fx-legal__links {
  margin: 0;
  display: flex;
  gap: var(--fx-space-2);
  align-items: center;
}

.fx-legal a {
  color: var(--fx-color-brand);
}

.fx-legal__extra {
  margin-top: var(--fx-space-2);
}
</style>
