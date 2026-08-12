<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { computed } from 'vue'
import FxSpinner from '../feedback/FxSpinner.vue'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'xs' | 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    /** Required accessible name for icon-only control. */
    'aria-label': string
    variant?: Variant
    size?: Size
    type?: 'button' | 'submit' | 'reset'
    loading?: boolean
    disabled?: boolean
  }>(),
  {
    variant: 'ghost',
    size: 'md',
    type: 'button',
    loading: false,
    disabled: false,
  },
)

defineEmits<{
  click: [event: MouseEvent]
}>()

const spinnerSize = computed<'xs' | 'sm'>(() =>
  props.size === 'xs' || props.size === 'sm' ? 'xs' : 'sm',
)
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :aria-label="props['aria-label']"
    :class="[
      'fx-icon-btn',
      `fx-icon-btn--${variant}`,
      `fx-icon-btn--${size}`,
      { 'fx-icon-btn--loading': loading },
    ]"
    @click="(e) => $emit('click', e)"
  >
    <span v-if="loading" class="fx-icon-btn__spinner">
      <FxSpinner :size="spinnerSize" />
    </span>
    <span class="fx-icon-btn__icon" :class="{ 'fx-icon-btn__icon--hidden': loading }">
      <slot name="icon" />
      <slot />
    </span>
  </button>
</template>

<style scoped>
.fx-icon-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--fx-radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  color: var(--fx-color-text-soft);
  transition:
    background-color var(--fx-motion-fast-out),
    border-color var(--fx-motion-fast-out),
    color var(--fx-motion-fast-out);
}

.fx-icon-btn:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.fx-icon-btn__icon {
  display: inline-flex;
  line-height: 0;
}

.fx-icon-btn__icon--hidden {
  visibility: hidden;
}

.fx-icon-btn__spinner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fx-icon-btn--xs {
  width: var(--fx-size-control-xs);
  height: var(--fx-size-control-xs);
}
.fx-icon-btn--sm {
  width: var(--fx-size-control-sm);
  height: var(--fx-size-control-sm);
}
.fx-icon-btn--md {
  width: var(--fx-size-control-md);
  height: var(--fx-size-control-md);
}
.fx-icon-btn--lg {
  width: var(--fx-size-control-lg);
  height: var(--fx-size-control-lg);
}

.fx-icon-btn--ghost:hover:not(:disabled) {
  background: var(--fx-color-bg-subtle);
  color: var(--fx-color-text);
}

.fx-icon-btn--secondary {
  background: var(--fx-color-surface);
  border-color: var(--fx-color-border);
  color: var(--fx-color-text);
}
.fx-icon-btn--secondary:hover:not(:disabled) {
  background: var(--fx-color-bg-subtle);
}

.fx-icon-btn--primary {
  background: var(--fx-color-brand);
  border-color: var(--fx-color-brand);
  color: var(--fx-color-text-on-brand);
}

.fx-icon-btn--danger {
  background: var(--fx-color-danger);
  border-color: var(--fx-color-danger);
  color: #fff;
}
</style>
