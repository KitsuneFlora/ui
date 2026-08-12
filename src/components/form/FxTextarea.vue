<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { useAttrs } from 'vue'

defineOptions({ inheritAttrs: false })

withDefaults(
  defineProps<{
    modelValue?: string
    placeholder?: string
    rows?: number
    disabled?: boolean
    readonly?: boolean
    invalid?: boolean
    id?: string
    resize?: 'none' | 'vertical' | 'horizontal' | 'both'
  }>(),
  {
    modelValue: '',
    rows: 4,
    disabled: false,
    readonly: false,
    invalid: false,
    resize: 'vertical',
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const attrs = useAttrs()

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLTextAreaElement).value)
}
</script>

<template>
  <textarea
    v-bind="attrs"
    :id="id"
    class="fx-textarea"
    :class="{
      'fx-textarea--disabled': disabled,
      'fx-textarea--invalid': invalid,
      [`fx-textarea--resize-${resize}`]: true,
    }"
    :value="modelValue"
    :placeholder="placeholder"
    :rows="rows"
    :disabled="disabled"
    :readonly="readonly"
    :aria-invalid="invalid || undefined"
    @input="onInput"
    @focus="(e) => emit('focus', e)"
    @blur="(e) => emit('blur', e)"
  />
</template>

<style scoped>
.fx-textarea {
  width: 100%;
  padding: var(--fx-space-2_5) var(--fx-space-3);
  background: var(--fx-color-surface);
  color: var(--fx-color-text);
  border: 1px solid var(--fx-color-border);
  border-radius: var(--fx-radius-md);
  font-family: inherit;
  font-size: var(--fx-text-base);
  line-height: var(--fx-leading-base);
  transition:
    border-color var(--fx-motion-fast-out),
    box-shadow var(--fx-motion-fast-out);
}

.fx-textarea::placeholder {
  color: var(--fx-color-text-muted);
}

.fx-textarea:hover:not(:disabled):not(.fx-textarea--invalid) {
  border-color: var(--fx-color-border-strong);
}

.fx-textarea:focus,
.fx-textarea:focus-visible {
  border-color: var(--fx-color-brand);
  box-shadow: var(--fx-ring-focus);
  outline: none;
}

.fx-textarea--invalid {
  border-color: var(--fx-color-danger);
}

.fx-textarea--disabled,
.fx-textarea:disabled {
  background: var(--fx-color-bg-subtle);
  color: var(--fx-color-text-disabled);
  cursor: not-allowed;
}

.fx-textarea--resize-none {
  resize: none;
}
.fx-textarea--resize-vertical {
  resize: vertical;
}
.fx-textarea--resize-horizontal {
  resize: horizontal;
}
.fx-textarea--resize-both {
  resize: both;
}
</style>
