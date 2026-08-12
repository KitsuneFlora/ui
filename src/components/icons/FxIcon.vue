<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import type { Component } from 'vue'

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

withDefaults(
  defineProps<{
    /** Lucide (or any) component to render. Prefer slot when composing markup. */
    icon?: Component
    size?: Size
    /** Decorative by default; set false when the icon is the sole accessible name. */
    decorative?: boolean
    label?: string
  }>(),
  {
    size: 'md',
    decorative: true,
  },
)
</script>

<template>
  <span
    class="fx-icon"
    :class="`fx-icon--${size}`"
    :aria-hidden="decorative ? 'true' : undefined"
    :aria-label="!decorative ? label : undefined"
    :role="!decorative ? 'img' : undefined"
  >
    <component :is="icon" v-if="icon" />
    <slot v-else />
  </span>
</template>

<style scoped>
.fx-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 0;
  color: currentColor;
}

.fx-icon :deep(svg) {
  width: 1em;
  height: 1em;
  stroke-width: 2;
}

.fx-icon--xs {
  font-size: var(--fx-size-icon-xs);
}
.fx-icon--sm {
  font-size: var(--fx-size-icon-sm);
}
.fx-icon--md {
  font-size: var(--fx-size-icon-md);
}
.fx-icon--lg {
  font-size: var(--fx-size-icon-lg);
}
.fx-icon--xl {
  font-size: var(--fx-size-icon-xl);
}
</style>
