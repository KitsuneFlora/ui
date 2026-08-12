<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { computed } from 'vue'
import { useFxLocaleMessages } from '../../config/useFxConfig'

const props = defineProps<{
  title?: string
  description?: string
}>()

const messages = useFxLocaleMessages()
const resolvedTitle = computed(() => props.title ?? messages.value.empty)
</script>

<template>
  <div class="fx-empty">
    <div v-if="$slots.icon" class="fx-empty__icon">
      <slot name="icon" />
    </div>
    <h3 class="fx-empty__title">{{ resolvedTitle }}</h3>
    <p v-if="description || $slots.default" class="fx-empty__desc">
      <slot>{{ description }}</slot>
    </p>
    <div v-if="$slots.action" class="fx-empty__action">
      <slot name="action" />
    </div>
  </div>
</template>

<style scoped>
.fx-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--fx-space-3);
  padding: var(--fx-space-10) var(--fx-space-6);
  text-align: center;
  color: var(--fx-color-text-muted);
}

.fx-empty__icon {
  color: var(--fx-color-text-disabled);
  line-height: 0;
}

.fx-empty__title {
  margin: 0;
  font-size: var(--fx-text-md);
  font-weight: var(--fx-font-weight-semibold);
  color: var(--fx-color-text-soft);
}

.fx-empty__desc {
  margin: 0;
  max-width: 36ch;
  font-size: var(--fx-text-sm);
  line-height: var(--fx-leading-sm);
}

.fx-empty__action {
  margin-top: var(--fx-space-2);
}
</style>
