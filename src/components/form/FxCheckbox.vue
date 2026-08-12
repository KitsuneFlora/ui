<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { Check } from '@lucide/vue'
import FxIcon from '../icons/FxIcon.vue'

withDefaults(
  defineProps<{
    modelValue?: boolean
    disabled?: boolean
    invalid?: boolean
    label?: string
    id?: string
  }>(),
  {
    modelValue: false,
    disabled: false,
    invalid: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <label
    :class="['fx-checkbox', { 'fx-checkbox--disabled': disabled, 'fx-checkbox--invalid': invalid }]"
  >
    <input
      :id="id"
      class="fx-checkbox__input"
      type="checkbox"
      :checked="modelValue"
      :disabled="disabled"
      :aria-invalid="invalid || undefined"
      @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <span class="fx-checkbox__box" aria-hidden="true">
      <FxIcon v-if="modelValue" :icon="Check" size="sm" />
    </span>
    <span v-if="label || $slots.default" class="fx-checkbox__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style scoped>
.fx-checkbox {
  display: inline-flex;
  align-items: center;
  gap: var(--fx-space-2);
  cursor: pointer;
  user-select: none;
}

.fx-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  pointer-events: none;
}

.fx-checkbox__box {
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--fx-color-border);
  border-radius: var(--fx-radius-xs);
  background: var(--fx-color-surface);
  color: var(--fx-color-text-on-brand);
  transition:
    background-color var(--fx-motion-fast-out),
    border-color var(--fx-motion-fast-out);
}

.fx-checkbox__input:checked + .fx-checkbox__box {
  background: var(--fx-color-brand);
  border-color: var(--fx-color-brand);
}

.fx-checkbox__input:focus-visible + .fx-checkbox__box {
  box-shadow: var(--fx-ring-focus);
}

.fx-checkbox__label {
  color: var(--fx-color-text);
  font-size: var(--fx-text-sm);
}

.fx-checkbox--disabled {
  opacity: 0.55;
  cursor: not-allowed;
}

.fx-checkbox--invalid .fx-checkbox__box {
  border-color: var(--fx-color-danger);
}
</style>
