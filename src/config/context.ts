// SPDX-License-Identifier: AGPL-3.0-or-later
import type { ComputedRef, InjectionKey, Ref } from 'vue'
import type { FxThemeController } from '../theme/createFxTheme'
import type { FxLocale, FxLocaleMessages } from '../locale/messages'

export interface FxComponentDefaults {
  button?: Record<string, unknown>
  dialog?: Record<string, unknown>
  [key: string]: Record<string, unknown> | undefined
}

export interface FxConfigContext {
  theme: FxThemeController
  locale: Ref<FxLocale>
  messages: Ref<FxLocaleMessages> | ComputedRef<FxLocaleMessages>
  teleportTarget: Ref<string | HTMLElement>
  componentDefaults: Ref<FxComponentDefaults>
  reducedMotion: Ref<'system' | 'reduce' | 'no-preference'>
}

export const FX_CONFIG_KEY: InjectionKey<FxConfigContext> = Symbol('kitsuneflora-ui.config')
