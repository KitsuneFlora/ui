<!-- SPDX-License-Identifier: AGPL-3.0-or-later -->
<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, provide, ref, toRef, watch } from 'vue'
import {
  createFxTheme,
  type CreateFxThemeOptions,
  type FxThemeController,
  type ThemePreference,
} from '../theme/createFxTheme'
import { fxLocales, type FxLocale, type FxLocaleMessages } from '../locale/messages'
import { FX_CONFIG_KEY, type FxComponentDefaults, type FxConfigContext } from './context'

const props = withDefaults(
  defineProps<{
    locale?: FxLocale
    messages?: Partial<FxLocaleMessages>
    theme?: FxThemeController
    themeOptions?: CreateFxThemeOptions
    themePreference?: ThemePreference
    teleportTarget?: string | HTMLElement
    componentDefaults?: FxComponentDefaults
    reducedMotion?: 'system' | 'reduce' | 'no-preference'
    /** When true (default), call theme.init() on mount. */
    autoInitTheme?: boolean
  }>(),
  {
    locale: 'en-US',
    teleportTarget: 'body',
    reducedMotion: 'system',
    autoInitTheme: true,
  },
)

const ownedTheme = props.theme ?? createFxTheme(props.themeOptions)
const localeRef = toRef(props, 'locale')
const teleportTarget = toRef(props, 'teleportTarget')
const componentDefaults = ref<FxComponentDefaults>(props.componentDefaults ?? {})
const reducedMotion = toRef(props, 'reducedMotion')

const messages = computed<FxLocaleMessages>(() => ({
  ...fxLocales[localeRef.value],
  ...props.messages,
}))

watch(
  () => props.themePreference,
  (next) => {
    if (next) ownedTheme.setTheme(next)
  },
)

watch(
  () => props.componentDefaults,
  (next) => {
    componentDefaults.value = next ?? {}
  },
)

onMounted(() => {
  if (props.autoInitTheme) ownedTheme.init()
})

onBeforeUnmount(() => {
  if (!props.theme) ownedTheme.dispose()
})

const ctx: FxConfigContext = {
  theme: ownedTheme,
  locale: localeRef,
  messages,
  teleportTarget,
  componentDefaults,
  reducedMotion,
}

provide(FX_CONFIG_KEY, ctx)

defineExpose({
  theme: ownedTheme,
})
</script>

<template>
  <slot />
</template>
