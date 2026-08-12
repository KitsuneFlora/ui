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
import type { FxDrawerPlacement } from './drawer-types'

const props = withDefaults(
  defineProps<{
    open?: boolean
    title?: string
    description?: string
    placement?: FxDrawerPlacement
    dismissible?: boolean
    showClose?: boolean
    closeLabel?: string
  }>(),
  {
    open: false,
    placement: 'end',
    dismissible: true,
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
  <DialogRoot :open="open" modal @update:open="onOpenChange">
    <DialogPortal :to="teleportTo">
      <DialogOverlay class="fx-drawer__overlay" />
      <DialogContent
        class="fx-drawer"
        :class="`fx-drawer--${placement}`"
        @escape-key-down="onEscapeKeyDown"
        @interact-outside="onInteractOutside"
      >
        <header v-if="title || $slots.header || showClose" class="fx-drawer__header">
          <slot name="header">
            <DialogTitle v-if="title" class="fx-drawer__title">{{ title }}</DialogTitle>
          </slot>
          <DialogClose v-if="showClose" class="fx-drawer__close" :aria-label="resolvedCloseLabel">
            <FxIcon :icon="X" size="sm" />
          </DialogClose>
        </header>

        <DialogDescription v-if="description" class="fx-drawer__description">
          {{ description }}
        </DialogDescription>

        <div class="fx-drawer__body">
          <slot />
        </div>

        <footer v-if="$slots.footer" class="fx-drawer__footer">
          <slot name="footer" />
        </footer>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
.fx-drawer__overlay {
  position: fixed;
  inset: 0;
  z-index: var(--fx-z-overlay);
  background: var(--fx-color-overlay);
}

.fx-drawer {
  position: fixed;
  z-index: var(--fx-z-modal);
  display: flex;
  flex-direction: column;
  gap: var(--fx-space-4);
  background: var(--fx-color-bg);
  border: 1px solid var(--fx-color-border-subtle);
  box-shadow: var(--fx-shadow-xl);
  color: var(--fx-color-text);
  outline: none;
  padding: var(--fx-space-5);
}

.fx-drawer--end {
  top: 0;
  right: 0;
  bottom: 0;
  width: min(var(--fx-drawer-width), 100vw);
  border-right: 0;
  border-radius: var(--fx-radius-lg) 0 0 var(--fx-radius-lg);
}

.fx-drawer--start {
  top: 0;
  left: 0;
  bottom: 0;
  width: min(var(--fx-drawer-width), 100vw);
  border-left: 0;
  border-radius: 0 var(--fx-radius-lg) var(--fx-radius-lg) 0;
}

.fx-drawer--top {
  top: 0;
  left: 0;
  right: 0;
  height: min(var(--fx-drawer-height), 100vh);
  border-top: 0;
  border-radius: 0 0 var(--fx-radius-lg) var(--fx-radius-lg);
}

.fx-drawer--bottom {
  bottom: 0;
  left: 0;
  right: 0;
  height: min(var(--fx-drawer-height), 100vh);
  border-bottom: 0;
  border-radius: var(--fx-radius-lg) var(--fx-radius-lg) 0 0;
}

.fx-drawer__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--fx-space-3);
}

.fx-drawer__title {
  margin: 0;
  font-size: var(--fx-text-base);
  font-weight: var(--fx-font-weight-semibold);
}

.fx-drawer__description {
  margin: 0;
  color: var(--fx-color-text-soft);
  font-size: var(--fx-text-sm);
}

.fx-drawer__body {
  flex: 1;
  min-height: 0;
  overflow: auto;
}

.fx-drawer__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--fx-space-2);
}

.fx-drawer__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--fx-size-control-sm);
  height: var(--fx-size-control-sm);
  border-radius: var(--fx-radius-sm);
  color: var(--fx-color-text-muted);
}

.fx-drawer__close:hover {
  background: var(--fx-color-bg-subtle);
  color: var(--fx-color-text);
}
</style>
