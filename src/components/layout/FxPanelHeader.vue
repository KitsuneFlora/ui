<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <div class="fx-panel-header">
    <div class="fx-panel-header__text">
      <h2 class="fx-panel-header__title">{{ title }}</h2>
      <p v-if="description || $slots.description" class="fx-panel-header__desc">
        <slot name="description">{{ description }}</slot>
      </p>
    </div>
    <div v-if="$slots.actions" class="fx-panel-header__actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<style scoped>
.fx-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--fx-space-3);
  margin-bottom: var(--fx-space-4);
}

.fx-panel-header__title {
  margin: 0;
  font-size: var(--fx-text-md);
  line-height: var(--fx-leading-md);
  font-weight: var(--fx-font-weight-semibold);
  color: var(--fx-color-text);
}

.fx-panel-header__desc {
  margin: var(--fx-space-1) 0 0;
  color: var(--fx-color-text-muted);
  font-size: var(--fx-text-xs);
}

.fx-panel-header__actions {
  display: flex;
  gap: var(--fx-space-2);
  flex-shrink: 0;
}
</style>
