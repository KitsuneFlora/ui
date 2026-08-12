<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { computed } from 'vue'
import { useFxLocaleMessages } from '../../config/useFxConfig'

type Size = 'xs' | 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    size?: Size
    label?: string
  }>(),
  {
    size: 'md',
  },
)

const messages = useFxLocaleMessages()
const resolvedLabel = computed(() => props.label ?? messages.value.loading)

const px = computed(() => {
  switch (props.size) {
    case 'xs':
      return 14
    case 'sm':
      return 18
    case 'lg':
      return 32
    case 'md':
    default:
      return 24
  }
})

const stroke = computed(() => (props.size === 'xs' ? 2 : props.size === 'sm' ? 2.5 : 3))
</script>

<template>
  <span class="fx-spinner" role="status" :aria-label="resolvedLabel">
    <svg
      :width="px"
      :height="px"
      viewBox="0 0 24 24"
      fill="none"
      :stroke-width="stroke"
      stroke-linecap="round"
      aria-hidden="true"
    >
      <circle class="fx-spinner__track" cx="12" cy="12" r="9" />
      <circle class="fx-spinner__arc" cx="12" cy="12" r="9" />
    </svg>
  </span>
</template>

<style scoped>
.fx-spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
}

.fx-spinner svg {
  transform-origin: 50% 50%;
  animation: fx-spinner-rotate 0.9s linear infinite;
}

.fx-spinner__track {
  stroke: currentColor;
  opacity: 0.18;
}

.fx-spinner__arc {
  stroke: currentColor;
  stroke-dasharray: 56.5;
  stroke-dashoffset: 38;
}

@keyframes fx-spinner-rotate {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .fx-spinner svg {
    animation: none;
  }
}
</style>
