<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { computed } from 'vue'
import { CircleCheck, CircleX, Info, TriangleAlert, X } from '@lucide/vue'
import FxIcon from '../icons/FxIcon.vue'
import { useFxLocaleMessages } from '../../config/useFxConfig'

type Variant = 'info' | 'success' | 'warning' | 'danger'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    title?: string
    closable?: boolean
    closeLabel?: string
  }>(),
  {
    variant: 'info',
    closable: false,
  },
)

defineEmits<{
  close: []
}>()

const messages = useFxLocaleMessages()
const resolvedCloseLabel = computed(() => props.closeLabel ?? messages.value.close)

const icon = computed(() => {
  switch (props.variant) {
    case 'success':
      return CircleCheck
    case 'warning':
      return TriangleAlert
    case 'danger':
      return CircleX
    default:
      return Info
  }
})
</script>

<template>
  <div :class="['fx-alert', `fx-alert--${variant}`]" role="alert">
    <span class="fx-alert__icon" aria-hidden="true">
      <FxIcon :icon="icon" size="md" />
    </span>

    <div class="fx-alert__body">
      <div v-if="title" class="fx-alert__title">{{ title }}</div>
      <div class="fx-alert__content"><slot /></div>
    </div>

    <button
      v-if="closable"
      type="button"
      class="fx-alert__close"
      :aria-label="resolvedCloseLabel"
      @click="$emit('close')"
    >
      <FxIcon :icon="X" size="sm" />
    </button>
  </div>
</template>

<style scoped>
.fx-alert {
  display: flex;
  align-items: flex-start;
  gap: var(--fx-space-3);
  padding: var(--fx-space-3) var(--fx-space-4);
  border-radius: var(--fx-radius-md);
  border: 1px solid transparent;
  font-size: var(--fx-text-sm);
  line-height: var(--fx-leading-sm);
}

.fx-alert__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
  flex-shrink: 0;
}

.fx-alert__body {
  flex: 1;
  min-width: 0;
}

.fx-alert__title {
  font-weight: var(--fx-font-weight-semibold);
  margin-bottom: var(--fx-space-0_5);
}

.fx-alert__close {
  color: inherit;
  opacity: 0.55;
  padding: var(--fx-space-0_5);
  border-radius: var(--fx-radius-xs);
  margin-left: auto;
  flex-shrink: 0;
  transition:
    opacity var(--fx-motion-fast-out),
    background-color var(--fx-motion-fast-out);
}
.fx-alert__close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.06);
}

.fx-alert--info {
  background: var(--fx-color-info-soft);
  color: var(--fx-color-info);
  border-color: var(--fx-color-info-border);
}
.fx-alert--success {
  background: var(--fx-color-success-soft);
  color: var(--fx-color-success);
  border-color: var(--fx-color-success-border);
}
.fx-alert--warning {
  background: var(--fx-color-warning-soft);
  color: var(--fx-color-warning);
  border-color: var(--fx-color-warning-border);
}
.fx-alert--danger {
  background: var(--fx-color-danger-soft);
  color: var(--fx-color-danger);
  border-color: var(--fx-color-danger-border);
}
</style>
