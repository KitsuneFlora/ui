<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
type Elevation = 'none' | 'sm' | 'md' | 'lg'
type Padding = 'none' | 'sm' | 'md' | 'lg'

withDefaults(
  defineProps<{
    elevation?: Elevation
    padding?: Padding
    bordered?: boolean
    sunken?: boolean
    tag?: string
  }>(),
  {
    elevation: 'sm',
    padding: 'md',
    bordered: true,
    sunken: false,
    tag: 'div',
  },
)
</script>

<template>
  <component
    :is="tag"
    :class="[
      'fx-card',
      `fx-card--elev-${elevation}`,
      `fx-card--pad-${padding}`,
      { 'fx-card--bordered': bordered, 'fx-card--sunken': sunken },
    ]"
  >
    <slot />
  </component>
</template>

<style scoped>
.fx-card {
  background: var(--fx-color-surface);
  border-radius: var(--fx-radius-lg);
  color: var(--fx-color-text);
}

.fx-card--sunken {
  background: var(--fx-color-surface-sunken);
}

.fx-card--bordered {
  border: 1px solid var(--fx-color-border-subtle);
}

.fx-card--elev-none {
  box-shadow: none;
}
.fx-card--elev-sm {
  box-shadow: var(--fx-shadow-sm);
}
.fx-card--elev-md {
  box-shadow: var(--fx-shadow-md);
}
.fx-card--elev-lg {
  box-shadow: var(--fx-shadow-lg);
}

.fx-card--pad-none {
  padding: 0;
}
.fx-card--pad-sm {
  padding: var(--fx-space-4);
}
.fx-card--pad-md {
  padding: var(--fx-space-6);
}
.fx-card--pad-lg {
  padding: var(--fx-space-8);
}
</style>
