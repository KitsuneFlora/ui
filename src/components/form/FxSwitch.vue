<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
withDefaults(
  defineProps<{
    modelValue: boolean
    disabled?: boolean
    label?: string
  }>(),
  {
    disabled: false,
    label: undefined,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>

<template>
  <label :class="['fx-switch', { 'fx-switch--disabled': disabled }]">
    <button
      type="button"
      role="switch"
      class="fx-switch__track"
      :aria-checked="modelValue"
      :aria-label="label"
      :disabled="disabled"
      @click="emit('update:modelValue', !modelValue)"
    >
      <span class="fx-switch__thumb" />
    </button>
    <span v-if="label || $slots.default" class="fx-switch__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<style scoped>
.fx-switch {
  display: inline-flex;
  align-items: center;
  gap: var(--fx-space-2);
  min-width: 0;
}

.fx-switch__track {
  width: 36px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  padding: 2px;
  border: 1px solid var(--fx-color-border);
  border-radius: var(--fx-radius-full);
  background: var(--fx-color-bg-muted);
  transition:
    background-color var(--fx-motion-fast-out),
    border-color var(--fx-motion-fast-out);
}

.fx-switch__track[aria-checked='true'] {
  border-color: var(--fx-color-brand);
  background: var(--fx-color-brand);
}

.fx-switch__thumb {
  width: 14px;
  height: 14px;
  border-radius: var(--fx-radius-full);
  background: var(--fx-color-surface);
  box-shadow: var(--fx-shadow-sm);
  transform: translateX(0);
  transition: transform var(--fx-motion-fast-out);
}

.fx-switch__track[aria-checked='true'] .fx-switch__thumb {
  transform: translateX(16px);
}

.fx-switch__label {
  overflow: hidden;
  color: var(--fx-color-text-soft);
  font-size: var(--fx-text-sm);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fx-switch--disabled {
  opacity: 0.55;
}
</style>
