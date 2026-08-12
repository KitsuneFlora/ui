<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { computed, useId } from 'vue'

const props = withDefaults(
  defineProps<{
    label?: string
    hint?: string
    error?: string
    required?: boolean
    for?: string
  }>(),
  {
    required: false,
  },
)

const autoId = useId()
const controlId = computed(() => props.for ?? `fx-field-${autoId}`)
const showError = computed(() => Boolean(props.error))
const descriptionId = computed(() =>
  props.hint || props.error ? `${controlId.value}-desc` : undefined,
)
</script>

<template>
  <div class="fx-field" :class="{ 'fx-field--invalid': showError }">
    <label v-if="label" :for="controlId" class="fx-field__label">
      <span>{{ label }}</span>
      <span v-if="required" class="fx-field__required" aria-hidden="true">*</span>
    </label>

    <div class="fx-field__control">
      <slot :control-id="controlId" :described-by="descriptionId" :invalid="showError" />
    </div>

    <p
      v-if="showError"
      :id="descriptionId"
      class="fx-field__message fx-field__message--error"
      role="alert"
    >
      {{ error }}
    </p>
    <p v-else-if="hint" :id="descriptionId" class="fx-field__message fx-field__message--hint">
      {{ hint }}
    </p>
  </div>
</template>

<style scoped>
.fx-field {
  display: flex;
  flex-direction: column;
  gap: var(--fx-space-1_5);
}

.fx-field__label {
  display: inline-flex;
  align-items: center;
  gap: var(--fx-space-1);
  font-size: var(--fx-text-sm);
  font-weight: var(--fx-font-weight-medium);
  color: var(--fx-color-text);
}

.fx-field__required {
  color: var(--fx-color-danger);
}

.fx-field__message {
  font-size: var(--fx-text-xs);
  line-height: var(--fx-leading-xs);
  margin: 0;
}

.fx-field__message--hint {
  color: var(--fx-color-text-muted);
}

.fx-field__message--error {
  color: var(--fx-color-danger);
}
</style>
