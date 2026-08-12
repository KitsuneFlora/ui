<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { computed, ref, useAttrs } from 'vue'
import { Eye, EyeOff } from '@lucide/vue'
import FxIcon from '../icons/FxIcon.vue'
import { useFxLocaleMessages } from '../../config/useFxConfig'

defineOptions({ inheritAttrs: false })

type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    modelValue?: string
    type?: 'text' | 'password' | 'email' | 'url' | 'tel' | 'search' | 'number'
    placeholder?: string
    size?: Size
    disabled?: boolean
    readonly?: boolean
    invalid?: boolean
    revealable?: boolean
    id?: string
  }>(),
  {
    modelValue: '',
    type: 'text',
    size: 'md',
    disabled: false,
    readonly: false,
    invalid: false,
    revealable: true,
  },
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const attrs = useAttrs()
const revealed = ref(false)
const messages = useFxLocaleMessages()

const effectiveType = computed(() => {
  if (props.type !== 'password') return props.type
  return revealed.value ? 'text' : 'password'
})

const showReveal = computed(() => props.type === 'password' && props.revealable && !props.disabled)

const revealLabel = computed(() =>
  revealed.value ? messages.value.hidePassword : messages.value.showPassword,
)

function onInput(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div
    :class="[
      'fx-input',
      `fx-input--${size}`,
      {
        'fx-input--disabled': disabled,
        'fx-input--invalid': invalid,
      },
    ]"
  >
    <span v-if="$slots.prefix" class="fx-input__affix fx-input__prefix">
      <slot name="prefix" />
    </span>

    <input
      v-bind="attrs"
      :id="id"
      :type="effectiveType"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :aria-invalid="invalid || undefined"
      class="fx-input__field"
      @input="onInput"
      @focus="(e) => emit('focus', e)"
      @blur="(e) => emit('blur', e)"
    />

    <button
      v-if="showReveal"
      type="button"
      class="fx-input__reveal"
      :aria-label="revealLabel"
      :aria-pressed="revealed"
      @click="revealed = !revealed"
    >
      <FxIcon :icon="revealed ? EyeOff : Eye" size="md" />
    </button>

    <span v-if="$slots.suffix" class="fx-input__affix fx-input__suffix">
      <slot name="suffix" />
    </span>
  </div>
</template>

<style scoped>
.fx-input {
  display: inline-flex;
  align-items: center;
  width: 100%;
  background: var(--fx-color-surface);
  border: 1px solid var(--fx-color-border);
  border-radius: var(--fx-radius-md);
  transition:
    border-color var(--fx-motion-fast-out),
    box-shadow var(--fx-motion-fast-out),
    background-color var(--fx-motion-fast-out);
}

.fx-input:hover:not(.fx-input--disabled):not(.fx-input--invalid) {
  border-color: var(--fx-color-border-strong);
}

.fx-input:focus-within {
  border-color: var(--fx-color-brand);
  box-shadow: var(--fx-ring-focus);
}

.fx-input--invalid {
  border-color: var(--fx-color-danger);
}
.fx-input--invalid:focus-within {
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--fx-color-danger) 30%, transparent);
}

.fx-input--disabled {
  background: var(--fx-color-bg-subtle);
  color: var(--fx-color-text-disabled);
  cursor: not-allowed;
}

.fx-input__field {
  flex: 1;
  min-width: 0;
  background: transparent;
  border: 0;
  outline: none;
  color: var(--fx-color-text);
  font-family: inherit;
}

.fx-input__field:focus,
.fx-input__field:focus-visible {
  box-shadow: none;
  border-radius: 0;
}

.fx-input__field:-webkit-autofill,
.fx-input__field:-webkit-autofill:hover,
.fx-input__field:-webkit-autofill:focus,
.fx-input__field:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 1000px var(--fx-color-surface) inset;
  -webkit-text-fill-color: var(--fx-color-text);
  caret-color: var(--fx-color-text);
  transition: background-color 5000s ease-in-out 0s;
}

.fx-input__field::placeholder {
  color: var(--fx-color-text-muted);
}

.fx-input__field:disabled {
  cursor: not-allowed;
  color: var(--fx-color-text-disabled);
}

.fx-input__affix {
  display: inline-flex;
  align-items: center;
  color: var(--fx-color-text-muted);
  flex-shrink: 0;
}

.fx-input__prefix {
  margin-right: var(--fx-space-2);
}
.fx-input__suffix {
  margin-left: var(--fx-space-2);
}

.fx-input__reveal {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--fx-color-text-muted);
  border-radius: var(--fx-radius-xs);
  padding: var(--fx-space-1);
  margin-left: var(--fx-space-1);
  transition:
    color var(--fx-motion-fast-out),
    background-color var(--fx-motion-fast-out);
}
.fx-input__reveal:hover {
  color: var(--fx-color-text);
  background: var(--fx-color-bg-subtle);
}

.fx-input--sm {
  height: var(--fx-size-control-sm);
  padding: 0 var(--fx-space-2_5);
  font-size: var(--fx-text-sm);
}
.fx-input--md {
  height: var(--fx-size-control-md);
  padding: 0 var(--fx-space-3);
  font-size: var(--fx-text-base);
}
.fx-input--lg {
  height: var(--fx-size-control-lg);
  padding: 0 var(--fx-space-4);
  font-size: var(--fx-text-md);
  border-radius: var(--fx-radius-lg);
}
</style>
