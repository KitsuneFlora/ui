// SPDX-License-Identifier: AGPL-3.0-or-later
import { inject } from 'vue'
import { FX_CONFIG_KEY, type FxConfigContext } from '../config/context'
import { createFxTheme, type FxThemeController } from './createFxTheme'

let fallback: FxThemeController | null = null

/**
 * Read the theme controller from nearest FxConfigProvider.
 * Falls back to a lazily-created default controller (still SSR-safe until init).
 */
export function useFxTheme(): FxThemeController {
  const ctx = inject<FxConfigContext | null>(FX_CONFIG_KEY, null)
  if (ctx?.theme) return ctx.theme
  if (!fallback) fallback = createFxTheme()
  return fallback
}
