// SPDX-License-Identifier: AGPL-3.0-or-later
import { describe, expect, it } from 'vitest'
import { createFxTheme, getFxThemeBootstrapSnippet } from '../src/theme/createFxTheme'

describe('theme SSR safety', () => {
  it('createFxTheme does not require window until init', () => {
    const theme = createFxTheme({ storageKey: null, storage: null })
    expect(theme.preference.value).toBe('auto')
    expect(theme.resolved.value).toBe('light')
    expect(getFxThemeBootstrapSnippet()).toContain('data-fx-theme')
  })
})
