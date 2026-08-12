// SPDX-License-Identifier: AGPL-3.0-or-later
import { computed, ref, type ComputedRef, type Ref } from 'vue'

export type ThemePreference = 'light' | 'dark' | 'auto'
export type ResolvedTheme = 'light' | 'dark'

export interface FxThemeStorage {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
}

export interface CreateFxThemeOptions {
  /** Default preference when nothing is stored. */
  defaultPreference?: ThemePreference
  /** localStorage key; set null to disable persistence. Default: kitsuneflora-ui.theme */
  storageKey?: string | null
  /** Custom storage; defaults to window.localStorage when available. */
  storage?: FxThemeStorage | null
  /**
   * Element or ShadowRoot that receives data-fx-theme.
   * Defaults to document.documentElement when available.
   */
  target?: HTMLElement | ShadowRoot | null
  /** Opt-in: update <meta name="theme-color"> from --fx-color-bg. */
  syncThemeColorMeta?: boolean
  /** Hold duration for fx-theme-transitioning class. */
  transitionHoldMs?: number
}

export interface FxThemeController {
  preference: Ref<ThemePreference>
  resolved: ComputedRef<ResolvedTheme>
  isDark: ComputedRef<boolean>
  systemPrefersDark: Ref<boolean>
  setTheme: (next: ThemePreference) => void
  toggle: () => void
  cycle: () => void
  /** Apply current resolved theme to the target (idempotent). */
  apply: (animated?: boolean) => void
  /** Start listening to system preference; safe to call multiple times. */
  init: () => void
  dispose: () => void
}

const DEFAULT_STORAGE_KEY = 'kitsuneflora-ui.theme'
const TRANSITION_CLASS = 'fx-theme-transitioning'
const DEFAULT_HOLD_MS = 260

function isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

function prefersReducedMotion(): boolean {
  if (!isBrowser()) return true
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function resolveTarget(target: HTMLElement | ShadowRoot | null | undefined): HTMLElement | null {
  if (!isBrowser()) return null
  if (!target) return document.documentElement
  if (target instanceof ShadowRoot) {
    const host = target.host
    return host instanceof HTMLElement ? host : null
  }
  return target
}

function readStored(
  storage: FxThemeStorage | null | undefined,
  key: string | null,
): ThemePreference | null {
  if (!key || !storage) return null
  try {
    const raw = storage.getItem(key)
    if (raw === 'light' || raw === 'dark' || raw === 'auto') return raw
  } catch {
    // privacy mode / unavailable storage
  }
  return null
}

function writeStored(
  storage: FxThemeStorage | null | undefined,
  key: string | null,
  value: ThemePreference,
): void {
  if (!key || !storage) return
  try {
    storage.setItem(key, value)
  } catch {
    // ignore
  }
}

/**
 * Create a theme controller. Does not touch window/document until init()/apply()/bootstrap.
 */
export function createFxTheme(options: CreateFxThemeOptions = {}): FxThemeController {
  const storageKey = options.storageKey === undefined ? DEFAULT_STORAGE_KEY : options.storageKey
  const syncThemeColorMeta = options.syncThemeColorMeta ?? false
  const transitionHoldMs = options.transitionHoldMs ?? DEFAULT_HOLD_MS

  const preference = ref<ThemePreference>(options.defaultPreference ?? 'auto')
  const systemPrefersDark = ref(false)

  let mediaQuery: MediaQueryList | null = null
  let onMediaChange: ((e: MediaQueryListEvent) => void) | null = null
  let initialized = false
  let transitionTimer: ReturnType<typeof setTimeout> | null = null
  const targetOverride: HTMLElement | ShadowRoot | null | undefined = options.target

  const resolved = computed<ResolvedTheme>(() =>
    preference.value === 'auto' ? (systemPrefersDark.value ? 'dark' : 'light') : preference.value,
  )

  const isDark = computed(() => resolved.value === 'dark')

  function getStorage(): FxThemeStorage | null {
    if (options.storage === null) return null
    if (options.storage) return options.storage
    if (!isBrowser()) return null
    try {
      return window.localStorage
    } catch {
      return null
    }
  }

  function apply(animated = false): void {
    const el = resolveTarget(targetOverride)
    if (!el) return

    const next = resolved.value
    const shouldAnimate = animated && !prefersReducedMotion()

    if (shouldAnimate) {
      el.classList.add(TRANSITION_CLASS)
      if (transitionTimer) clearTimeout(transitionTimer)
      transitionTimer = setTimeout(() => {
        el.classList.remove(TRANSITION_CLASS)
        transitionTimer = null
      }, transitionHoldMs)
    }

    el.setAttribute('data-fx-theme', next)
    el.style.colorScheme = next

    if (syncThemeColorMeta && isBrowser()) {
      const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
      const bg = getComputedStyle(el).getPropertyValue('--fx-color-bg').trim()
      if (themeColor && bg) themeColor.setAttribute('content', bg)
    }
  }

  function init(): void {
    if (initialized || !isBrowser()) return
    initialized = true

    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    systemPrefersDark.value = mediaQuery.matches
    onMediaChange = (e: MediaQueryListEvent) => {
      systemPrefersDark.value = e.matches
      if (preference.value === 'auto') apply(true)
    }
    mediaQuery.addEventListener('change', onMediaChange)

    const stored = readStored(getStorage(), storageKey)
    if (stored) preference.value = stored
    else if (options.defaultPreference) preference.value = options.defaultPreference

    apply(false)
  }

  function setTheme(next: ThemePreference): void {
    preference.value = next
    writeStored(getStorage(), storageKey, next)
    apply(true)
  }

  function toggle(): void {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  function cycle(): void {
    const order: ThemePreference[] = ['auto', 'light', 'dark']
    const idx = order.indexOf(preference.value)
    setTheme(order[(idx + 1) % order.length]!)
  }

  function dispose(): void {
    if (mediaQuery && onMediaChange) {
      mediaQuery.removeEventListener('change', onMediaChange)
    }
    mediaQuery = null
    onMediaChange = null
    if (transitionTimer) {
      clearTimeout(transitionTimer)
      transitionTimer = null
    }
    initialized = false
  }

  return {
    preference,
    resolved,
    isDark,
    systemPrefersDark,
    setTheme,
    toggle,
    cycle,
    apply,
    init,
    dispose,
  }
}

/**
 * Early bootstrap before createApp to avoid first-paint flash.
 * Safe no-op outside browser.
 */
export function bootstrapFxTheme(options: CreateFxThemeOptions = {}): FxThemeController {
  const controller = createFxTheme(options)
  controller.init()
  return controller
}

/** Inline snippet helper for HTML <script> before CSS paint. */
export function getFxThemeBootstrapSnippet(
  options: { storageKey?: string; attribute?: string } = {},
): string {
  const storageKey = options.storageKey ?? DEFAULT_STORAGE_KEY
  const attr = options.attribute ?? 'data-fx-theme'
  return `(function(){try{var k=${JSON.stringify(storageKey)};var p=localStorage.getItem(k);var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var r=(p==='light'||p==='dark')?p:(d?'dark':'light');var el=document.documentElement;el.setAttribute(${JSON.stringify(attr)},r);el.style.colorScheme=r;}catch(e){}})();`
}
