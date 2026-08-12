<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { computed } from 'vue'
import FxDialog from './FxDialog.vue'
import FxButton from '../action/FxButton.vue'
import { useFxLocaleMessages } from '../../config/useFxConfig'

const props = withDefaults(
  defineProps<{
    open?: boolean
    title: string
    message?: string
    confirmLabel?: string
    cancelLabel?: string
    danger?: boolean
    busy?: boolean
  }>(),
  {
    open: false,
    message: '',
    danger: false,
    busy: false,
  },
)

const emit = defineEmits<{
  'update:open': [value: boolean]
  confirm: []
  close: []
}>()

const messages = useFxLocaleMessages()

const resolvedConfirm = computed(() => props.confirmLabel ?? messages.value.confirm)
const resolvedCancel = computed(() => props.cancelLabel ?? messages.value.cancel)

function onOpenUpdate(next: boolean) {
  emit('update:open', next)
  if (!next) emit('close')
}

function onClose() {
  if (!props.busy) onOpenUpdate(false)
}
</script>

<template>
  <FxDialog
    :open="open"
    :title="title"
    :dismissible="!busy"
    :show-close="!busy"
    role="alertdialog"
    @update:open="onOpenUpdate"
    @close="emit('close')"
  >
    <slot>
      <p class="fx-confirm__message">{{ message }}</p>
    </slot>

    <template #footer>
      <FxButton variant="ghost" size="sm" :disabled="busy" @click="onClose">
        {{ resolvedCancel }}
      </FxButton>
      <FxButton
        :variant="danger ? 'danger' : 'primary'"
        size="sm"
        :loading="busy"
        @click="emit('confirm')"
      >
        {{ resolvedConfirm }}
      </FxButton>
    </template>
  </FxDialog>
</template>

<style scoped>
.fx-confirm__message {
  margin: 0;
  color: var(--fx-color-text-soft);
  font-size: var(--fx-text-sm);
  line-height: 1.6;
  white-space: pre-line;
}
</style>
