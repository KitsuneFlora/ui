<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { computed } from 'vue'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
} from 'reka-ui'
import { X } from '@lucide/vue'
import FxIcon from '../icons/FxIcon.vue'
import { useFxConfig, useFxLocaleMessages } from '../../config/useFxConfig'

const props = withDefaults(
  defineProps<{
    open?: boolean
    title?: string
    description?: string
    /** When false, Escape / overlay click do not close. */
    dismissible?: boolean
    modal?: boolean
    showClose?: boolean
    closeLabel?: string
    contentClass?: string
  }>(),
  {
    open: false,
    dismissible: true,
    modal: true,
    showClose: true,
  },
)

const emit = defineEmits<{
  'update:open': [value: boolean]
  close: []
}>()

const config = useFxConfig()
const messages = useFxLocaleMessages()
const teleportTo = computed(() => config?.teleportTarget.value ?? 'body')
const resolvedCloseLabel = computed(() => props.closeLabel ?? messages.value.close)

function onOpenChange(next: boolean) {
  emit('update:open', next)
  if (!next) emit('close')
}

function onEscapeKeyDown(event: Event) {
  if (!props.dismissible) event.preventDefault()
}

function onInteractOutside(event: Event) {
  if (!props.dismissible) event.preventDefault()
}
</script>

<template>
  <DialogRoot :open="open" :modal="modal" @update:open="onOpenChange">
    <DialogPortal :to="teleportTo">
      <DialogOverlay class="fx-dialog__overlay" />
      <DialogContent
        class="fx-dialog"
        :class="contentClass"
        @escape-key-down="onEscapeKeyDown"
        @interact-outside="onInteractOutside"
      >
        <header v-if="title || $slots.header || showClose" class="fx-dialog__header">
          <slot name="header">
            <DialogTitle v-if="title" class="fx-dialog__title">{{ title }}</DialogTitle>
          </slot>
          <DialogClose v-if="showClose" class="fx-dialog__close" :aria-label="resolvedCloseLabel">
            <FxIcon :icon="X" size="sm" />
          </DialogClose>
        </header>

        <DialogDescription v-if="description" class="fx-dialog__description">
          {{ description }}
        </DialogDescription>

        <div class="fx-dialog__body">
          <slot />
        </div>

        <footer v-if="$slots.footer" class="fx-dialog__footer">
          <slot name="footer" />
        </footer>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
.fx-dialog__overlay {
  position: fixed;
  inset: 0;
  z-index: var(--fx-z-overlay);
  background: var(--fx-color-overlay);
}

.fx-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: var(--fx-z-modal);
  width: min(var(--fx-dialog-width), calc(100vw - var(--fx-space-10)));
  max-height: calc(100vh - var(--fx-space-10));
  display: flex;
  flex-direction: column;
  gap: var(--fx-space-4);
  padding: var(--fx-space-5);
  border-radius: var(--fx-radius-lg);
  border: 1px solid var(--fx-color-border-subtle);
  background: var(--fx-color-bg);
  box-shadow: var(--fx-shadow-lg);
  color: var(--fx-color-text);
  outline: none;
}

.fx-dialog__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--fx-space-3);
}

.fx-dialog__title {
  margin: 0;
  font-size: var(--fx-text-base);
  font-weight: var(--fx-font-weight-semibold);
}

.fx-dialog__description {
  margin: 0;
  color: var(--fx-color-text-soft);
  font-size: var(--fx-text-sm);
}

.fx-dialog__body {
  min-height: 0;
  overflow: auto;
}

.fx-dialog__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--fx-space-2);
}

.fx-dialog__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--fx-size-control-sm);
  height: var(--fx-size-control-sm);
  border-radius: var(--fx-radius-sm);
  color: var(--fx-color-text-muted);
  flex-shrink: 0;
}

.fx-dialog__close:hover {
  background: var(--fx-color-bg-subtle);
  color: var(--fx-color-text);
}
</style>
