// SPDX-License-Identifier: AGPL-3.0-or-later
import { computed, inject, type ComputedRef } from 'vue'
import { FX_CONFIG_KEY, type FxConfigContext } from './context'
import { fxLocales, type FxLocaleMessages } from '../locale/messages'

export function useFxConfig(): FxConfigContext | null {
  return inject(FX_CONFIG_KEY, null)
}

export function useFxLocaleMessages(): ComputedRef<FxLocaleMessages> {
  const ctx = useFxConfig()
  return computed(() => ctx?.messages.value ?? fxLocales['en-US'])
}
