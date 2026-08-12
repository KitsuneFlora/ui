<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
type Variant = 'neutral' | 'brand' | 'success' | 'warning' | 'danger' | 'info'
type Size = 'sm' | 'md'

withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
  }>(),
  {
    variant: 'neutral',
    size: 'md',
  },
)
</script>

<template>
  <span class="fx-badge" :class="[`fx-badge--${variant}`, `fx-badge--${size}`]">
    <slot />
  </span>
</template>

<style scoped>
.fx-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--fx-space-1);
  border-radius: var(--fx-radius-full);
  font-weight: var(--fx-font-weight-medium);
  white-space: nowrap;
  border: 1px solid transparent;
}

.fx-badge--sm {
  height: 20px;
  padding: 0 var(--fx-space-2);
  font-size: var(--fx-text-xs);
}

.fx-badge--md {
  height: 24px;
  padding: 0 var(--fx-space-2_5);
  font-size: var(--fx-text-sm);
}

.fx-badge--neutral {
  background: var(--fx-color-bg-muted);
  color: var(--fx-color-text-soft);
  border-color: var(--fx-color-border-subtle);
}

.fx-badge--brand {
  background: var(--fx-color-brand-soft);
  color: var(--fx-color-brand);
  border-color: var(--fx-color-brand-border);
}

.fx-badge--success {
  background: var(--fx-color-success-soft);
  color: var(--fx-color-success);
  border-color: var(--fx-color-success-border);
}

.fx-badge--warning {
  background: var(--fx-color-warning-soft);
  color: var(--fx-color-warning);
  border-color: var(--fx-color-warning-border);
}

.fx-badge--danger {
  background: var(--fx-color-danger-soft);
  color: var(--fx-color-danger);
  border-color: var(--fx-color-danger-border);
}

.fx-badge--info {
  background: var(--fx-color-info-soft);
  color: var(--fx-color-info);
  border-color: var(--fx-color-info-border);
}
</style>
