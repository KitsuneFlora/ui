<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <header class="fx-page-header">
    <div class="fx-page-header__text">
      <h1 class="fx-page-header__title">{{ title }}</h1>
      <p v-if="description || $slots.description" class="fx-page-header__desc">
        <slot name="description">{{ description }}</slot>
      </p>
    </div>
    <div v-if="$slots.actions" class="fx-page-header__actions">
      <slot name="actions" />
    </div>
  </header>
</template>

<style scoped>
.fx-page-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--fx-space-4);
  margin-bottom: var(--fx-space-6);
}

.fx-page-header__title {
  margin: 0;
  font-size: var(--fx-text-3xl);
  line-height: var(--fx-leading-3xl);
  font-weight: var(--fx-font-weight-semibold);
  color: var(--fx-color-text);
}

.fx-page-header__desc {
  margin: var(--fx-space-2) 0 0;
  color: var(--fx-color-text-muted);
  font-size: var(--fx-text-sm);
  line-height: var(--fx-leading-sm);
  max-width: 60ch;
}

.fx-page-header__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--fx-space-2);
  flex-shrink: 0;
}
</style>
