<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { computed } from 'vue'
import FxSpinner from '../feedback/FxSpinner.vue'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'
type Size = 'xs' | 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    type?: 'button' | 'submit' | 'reset'
    loading?: boolean
    disabled?: boolean
    block?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    loading: false,
    disabled: false,
    block: false,
  },
)

defineEmits<{
  click: [event: MouseEvent]
}>()

const spinnerSize = computed<'xs' | 'sm' | 'md'>(() =>
  props.size === 'xs' || props.size === 'sm' ? 'xs' : 'sm',
)
</script>

<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'fx-btn',
      `fx-btn--${variant}`,
      `fx-btn--${size}`,
      { 'fx-btn--block': block, 'fx-btn--loading': loading },
    ]"
    @click="(e) => $emit('click', e)"
  >
    <span v-if="loading" class="fx-btn__spinner">
      <FxSpinner :size="spinnerSize" />
    </span>
    <span class="fx-btn__content">
      <span v-if="$slots.prefix" class="fx-btn__affix fx-btn__prefix">
        <slot name="prefix" />
      </span>
      <span class="fx-btn__label">
        <slot />
      </span>
      <span v-if="$slots.suffix" class="fx-btn__affix fx-btn__suffix">
        <slot name="suffix" />
      </span>
    </span>
  </button>
</template>

<style scoped>
.fx-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--fx-space-2);
  font-family: var(--fx-font-sans);
  font-weight: var(--fx-font-weight-medium);
  border-radius: var(--fx-radius-md);
  border: 1px solid transparent;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition:
    background-color var(--fx-motion-fast-out),
    border-color var(--fx-motion-fast-out),
    color var(--fx-motion-fast-out),
    box-shadow var(--fx-motion-fast-out),
    transform var(--fx-motion-fast-out);
}

.fx-btn:active:not(:disabled) {
  transform: translateY(1px);
}

.fx-btn:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.fx-btn--loading {
  cursor: progress;
  opacity: 1;
}

.fx-btn--loading .fx-btn__content {
  visibility: hidden;
}

.fx-btn__spinner {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fx-btn__content {
  display: inline-flex;
  align-items: center;
  gap: var(--fx-space-2);
}

.fx-btn__affix {
  display: inline-flex;
  align-items: center;
  line-height: 0;
}

.fx-btn--block {
  display: flex;
  width: 100%;
}

.fx-btn--xs {
  height: var(--fx-size-control-xs);
  padding: 0 var(--fx-space-2_5);
  font-size: var(--fx-text-xs);
  border-radius: var(--fx-radius-sm);
}
.fx-btn--sm {
  height: var(--fx-size-control-sm);
  padding: 0 var(--fx-space-3);
  font-size: var(--fx-text-sm);
}
.fx-btn--md {
  height: var(--fx-size-control-md);
  padding: 0 var(--fx-space-4);
  font-size: var(--fx-text-base);
}
.fx-btn--lg {
  height: var(--fx-size-control-lg);
  padding: 0 var(--fx-space-5);
  font-size: var(--fx-text-md);
  border-radius: var(--fx-radius-lg);
}

.fx-btn--primary {
  background: var(--fx-color-brand);
  color: var(--fx-color-text-on-brand);
  border-color: var(--fx-color-brand);
}
.fx-btn--primary:hover:not(:disabled) {
  background: var(--fx-color-brand-hover);
  border-color: var(--fx-color-brand-hover);
  box-shadow: var(--fx-shadow-sm);
}
.fx-btn--primary:active:not(:disabled) {
  background: var(--fx-color-brand-active);
  border-color: var(--fx-color-brand-active);
}

.fx-btn--secondary {
  background: var(--fx-color-surface);
  color: var(--fx-color-text);
  border-color: var(--fx-color-border);
}
.fx-btn--secondary:hover:not(:disabled) {
  background: var(--fx-color-bg-subtle);
  border-color: var(--fx-color-border-strong);
}
.fx-btn--secondary:active:not(:disabled) {
  background: var(--fx-color-bg-muted);
}

.fx-btn--ghost {
  background: transparent;
  color: var(--fx-color-text-soft);
  border-color: transparent;
}
.fx-btn--ghost:hover:not(:disabled) {
  background: var(--fx-color-bg-subtle);
  color: var(--fx-color-text);
}
.fx-btn--ghost:active:not(:disabled) {
  background: var(--fx-color-bg-muted);
}

.fx-btn--danger {
  background: var(--fx-color-danger);
  color: #fff;
  border-color: var(--fx-color-danger);
}
.fx-btn--danger:hover:not(:disabled) {
  filter: brightness(0.92);
  box-shadow: var(--fx-shadow-sm);
}
</style>
