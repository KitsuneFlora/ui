<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { computed } from 'vue'
import {
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'reka-ui'
import { Check, ChevronDown } from '@lucide/vue'
import FxIcon from '../icons/FxIcon.vue'
import { useFxConfig, useFxLocaleMessages } from '../../config/useFxConfig'
import type { FxSelectOption } from './select-types'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    options: FxSelectOption[]
    size?: 'sm' | 'md'
    placeholder?: string
    disabled?: boolean
    invalid?: boolean
    ariaLabel?: string
  }>(),
  {
    modelValue: '',
    size: 'md',
    disabled: false,
    invalid: false,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const config = useFxConfig()
const messages = useFxLocaleMessages()
const teleportTo = computed(() => config?.teleportTarget.value ?? 'body')
const resolvedPlaceholder = computed(() => props.placeholder ?? messages.value.selectPlaceholder)

const selectedLabel = computed(() => {
  const hit = props.options.find((o) => o.value === props.modelValue)
  return hit?.label
})
</script>

<template>
  <SelectRoot
    :model-value="modelValue || undefined"
    :disabled="disabled"
    @update:model-value="(v) => emit('update:modelValue', String(v ?? ''))"
  >
    <SelectTrigger
      class="fx-select__trigger"
      :class="[`fx-select--${size}`, { 'fx-select--invalid': invalid }]"
      :aria-label="ariaLabel"
      :aria-invalid="invalid || undefined"
    >
      <SelectValue class="fx-select__value" :placeholder="resolvedPlaceholder">
        {{ selectedLabel }}
      </SelectValue>
      <SelectIcon class="fx-select__chevron">
        <FxIcon :icon="ChevronDown" size="sm" />
      </SelectIcon>
    </SelectTrigger>

    <SelectPortal :to="teleportTo">
      <SelectContent class="fx-select__content" position="popper" :side-offset="4">
        <SelectViewport class="fx-select__viewport">
          <SelectItem
            v-for="option in options"
            :key="option.value"
            class="fx-select__option"
            :value="option.value"
            :disabled="option.disabled"
          >
            <SelectItemText>{{ option.label }}</SelectItemText>
            <SelectItemIndicator class="fx-select__check">
              <FxIcon :icon="Check" size="sm" />
            </SelectItemIndicator>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<style scoped>
.fx-select__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--fx-space-2);
  padding: 0 var(--fx-space-2_5);
  border: 1px solid var(--fx-color-border);
  border-radius: var(--fx-radius-md);
  background: var(--fx-color-surface);
  color: var(--fx-color-text);
  font-size: var(--fx-text-sm);
  transition:
    border-color var(--fx-motion-fast-out),
    box-shadow var(--fx-motion-fast-out),
    background-color var(--fx-motion-fast-out);
}

.fx-select--sm {
  height: var(--fx-size-control-sm);
  font-size: var(--fx-text-xs);
}

.fx-select--md {
  height: var(--fx-size-control-md);
}

.fx-select__trigger:hover:not(:disabled) {
  border-color: var(--fx-color-border-strong);
  background: var(--fx-color-bg-subtle);
}

.fx-select__trigger[data-state='open'] {
  border-color: var(--fx-color-brand-border);
  box-shadow: var(--fx-ring-focus);
}

.fx-select__trigger:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

.fx-select--invalid {
  border-color: var(--fx-color-danger);
}

.fx-select__value {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fx-select__chevron {
  display: inline-flex;
  color: var(--fx-color-text-muted);
  flex-shrink: 0;
}

.fx-select__content {
  z-index: var(--fx-z-dropdown);
  min-width: var(--reka-select-trigger-width);
  max-height: 240px;
  overflow: hidden;
  border: 1px solid var(--fx-color-border-subtle);
  border-radius: var(--fx-radius-lg);
  background: var(--fx-color-surface);
  box-shadow: var(--fx-shadow-lg);
}

.fx-select__viewport {
  padding: var(--fx-space-1);
}

.fx-select__option {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--fx-space-2);
  padding: var(--fx-space-1_5) var(--fx-space-2_5);
  border-radius: var(--fx-radius-md);
  color: var(--fx-color-text-soft);
  font-size: var(--fx-text-xs);
  cursor: pointer;
  outline: none;
}

.fx-select__option[data-highlighted] {
  background: var(--fx-color-bg-subtle);
  color: var(--fx-color-text);
}

.fx-select__option[data-state='checked'] {
  color: var(--fx-color-brand);
  font-weight: var(--fx-font-weight-semibold);
}

.fx-select__option[data-disabled] {
  opacity: 0.45;
  pointer-events: none;
}

.fx-select__check {
  display: inline-flex;
  color: var(--fx-color-brand);
}
</style>
