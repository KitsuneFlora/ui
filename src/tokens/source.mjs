// SPDX-License-Identifier: AGPL-3.0-or-later
/**
 * Single source of truth for @kitsuneflora/ui design tokens.
 * Consumed by scripts/generate-tokens.mjs
 */

/** @typedef {'shared' | 'light' | 'dark'} ThemeLayer */

/**
 * @typedef {{
 *   cssName: string
 *   tsPath: string[]
 *   shared?: string
 *   light?: string
 *   dark?: string
 * }} TokenDef
 */

/** @type {TokenDef[]} */
export const tokens = [
  // —— Surfaces ——
  { cssName: 'fx-color-bg', tsPath: ['color', 'bg'], light: '#fbf6ef', dark: '#1a140e' },
  {
    cssName: 'fx-color-bg-subtle',
    tsPath: ['color', 'bgSubtle'],
    light: '#f4ecdf',
    dark: '#221a12',
  },
  { cssName: 'fx-color-bg-muted', tsPath: ['color', 'bgMuted'], light: '#efe5d2', dark: '#2b2118' },
  { cssName: 'fx-color-surface', tsPath: ['color', 'surface'], light: '#ffffff', dark: '#241b12' },
  {
    cssName: 'fx-color-surface-raised',
    tsPath: ['color', 'surfaceRaised'],
    light: '#ffffff',
    dark: '#2e2419',
  },
  {
    cssName: 'fx-color-surface-sunken',
    tsPath: ['color', 'surfaceSunken'],
    light: '#f4ecdf',
    dark: '#1a140e',
  },

  // —— Borders ——
  {
    cssName: 'fx-color-border-subtle',
    tsPath: ['color', 'borderSubtle'],
    light: '#ece1cd',
    dark: '#2f2517',
  },
  { cssName: 'fx-color-border', tsPath: ['color', 'border'], light: '#d9c9ae', dark: '#4d3f2a' },
  {
    cssName: 'fx-color-border-strong',
    tsPath: ['color', 'borderStrong'],
    light: '#b89a6f',
    dark: '#6b5739',
  },

  // —— Text ——
  { cssName: 'fx-color-text', tsPath: ['color', 'text'], light: '#2a1f14', dark: '#e8dcc8' },
  {
    cssName: 'fx-color-text-soft',
    tsPath: ['color', 'textSoft'],
    light: '#5c4a35',
    dark: '#bda989',
  },
  {
    cssName: 'fx-color-text-muted',
    tsPath: ['color', 'textMuted'],
    light: '#8a7559',
    dark: '#8e7b5c',
  },
  {
    cssName: 'fx-color-text-disabled',
    tsPath: ['color', 'textDisabled'],
    light: '#b8a589',
    dark: '#5e5040',
  },
  {
    cssName: 'fx-color-text-inverse',
    tsPath: ['color', 'textInverse'],
    light: '#fbf6ef',
    dark: '#1a140e',
  },
  {
    cssName: 'fx-color-text-on-brand',
    tsPath: ['color', 'textOnBrand'],
    light: '#ffffff',
    dark: '#1a140e',
  },

  // —— Brand ——
  { cssName: 'fx-color-brand', tsPath: ['color', 'brand'], light: '#c2632b', dark: '#e8945a' },
  {
    cssName: 'fx-color-brand-hover',
    tsPath: ['color', 'brandHover'],
    light: '#a5511f',
    dark: '#f2ab7a',
  },
  {
    cssName: 'fx-color-brand-active',
    tsPath: ['color', 'brandActive'],
    light: '#863f14',
    dark: '#fbc197',
  },
  {
    cssName: 'fx-color-brand-soft',
    tsPath: ['color', 'brandSoft'],
    light: '#fce9d5',
    dark: '#3a2615',
  },
  {
    cssName: 'fx-color-brand-soft-hover',
    tsPath: ['color', 'brandSoftHover'],
    light: '#f8d8b8',
    dark: '#4a311a',
  },
  {
    cssName: 'fx-color-brand-border',
    tsPath: ['color', 'brandBorder'],
    light: '#e8a36e',
    dark: '#8a5530',
  },

  // —— Accent ——
  { cssName: 'fx-color-accent', tsPath: ['color', 'accent'], light: '#6b8e4e', dark: '#9db87a' },
  {
    cssName: 'fx-color-accent-hover',
    tsPath: ['color', 'accentHover'],
    light: '#557239',
    dark: '#b5cb94',
  },
  {
    cssName: 'fx-color-accent-active',
    tsPath: ['color', 'accentActive'],
    light: '#3f5827',
    dark: '#cbd9ad',
  },
  {
    cssName: 'fx-color-accent-soft',
    tsPath: ['color', 'accentSoft'],
    light: '#dde8cc',
    dark: '#283220',
  },
  {
    cssName: 'fx-color-accent-border',
    tsPath: ['color', 'accentBorder'],
    light: '#a8c084',
    dark: '#5a7340',
  },

  // —— Semantic + borders ——
  { cssName: 'fx-color-success', tsPath: ['color', 'success'], light: '#5c8a3a', dark: '#8fb668' },
  {
    cssName: 'fx-color-success-soft',
    tsPath: ['color', 'successSoft'],
    light: '#dceacb',
    dark: '#2a3320',
  },
  {
    cssName: 'fx-color-success-border',
    tsPath: ['color', 'successBorder'],
    light: '#a8c084',
    dark: '#5a7340',
  },
  { cssName: 'fx-color-warning', tsPath: ['color', 'warning'], light: '#c77f1f', dark: '#e6b056' },
  {
    cssName: 'fx-color-warning-soft',
    tsPath: ['color', 'warningSoft'],
    light: '#f7e3c2',
    dark: '#3a2c14',
  },
  {
    cssName: 'fx-color-warning-border',
    tsPath: ['color', 'warningBorder'],
    light: '#e0b06a',
    dark: '#8a6a2e',
  },
  { cssName: 'fx-color-danger', tsPath: ['color', 'danger'], light: '#b8442e', dark: '#e0795f' },
  {
    cssName: 'fx-color-danger-soft',
    tsPath: ['color', 'dangerSoft'],
    light: '#f3d3cb',
    dark: '#3a1f18',
  },
  {
    cssName: 'fx-color-danger-border',
    tsPath: ['color', 'dangerBorder'],
    light: '#e0a090',
    dark: '#8a4030',
  },
  { cssName: 'fx-color-info', tsPath: ['color', 'info'], light: '#4a7aaa', dark: '#7aa6d4' },
  {
    cssName: 'fx-color-info-soft',
    tsPath: ['color', 'infoSoft'],
    light: '#d3e0ee',
    dark: '#1c2a3a',
  },
  {
    cssName: 'fx-color-info-border',
    tsPath: ['color', 'infoBorder'],
    light: '#9bb6d4',
    dark: '#3a5570',
  },

  // —— Focus / selection / overlay ——
  {
    cssName: 'fx-color-focus-ring',
    tsPath: ['color', 'focusRing'],
    light: 'rgba(194, 99, 43, 0.45)',
    dark: 'rgba(232, 148, 90, 0.55)',
  },
  {
    cssName: 'fx-color-selection-bg',
    tsPath: ['color', 'selectionBg'],
    light: '#fce9d5',
    dark: '#3a2615',
  },
  {
    cssName: 'fx-color-selection-text',
    tsPath: ['color', 'selectionText'],
    light: '#2a1f14',
    dark: '#fbc197',
  },
  {
    cssName: 'fx-color-overlay',
    tsPath: ['color', 'overlay'],
    light: 'rgba(42, 31, 20, 0.45)',
    dark: 'rgba(0, 0, 0, 0.65)',
  },
  {
    cssName: 'fx-color-overlay-soft',
    tsPath: ['color', 'overlaySoft'],
    light: 'rgba(42, 31, 20, 0.2)',
    dark: 'rgba(0, 0, 0, 0.35)',
  },

  // —— Space ——
  { cssName: 'fx-space-0', tsPath: ['space', '0'], shared: '0' },
  { cssName: 'fx-space-px', tsPath: ['space', 'px'], shared: '1px' },
  { cssName: 'fx-space-0_5', tsPath: ['space', '0.5'], shared: '2px' },
  { cssName: 'fx-space-1', tsPath: ['space', '1'], shared: '4px' },
  { cssName: 'fx-space-1_5', tsPath: ['space', '1.5'], shared: '6px' },
  { cssName: 'fx-space-2', tsPath: ['space', '2'], shared: '8px' },
  { cssName: 'fx-space-2_5', tsPath: ['space', '2.5'], shared: '10px' },
  { cssName: 'fx-space-3', tsPath: ['space', '3'], shared: '12px' },
  { cssName: 'fx-space-4', tsPath: ['space', '4'], shared: '16px' },
  { cssName: 'fx-space-5', tsPath: ['space', '5'], shared: '20px' },
  { cssName: 'fx-space-6', tsPath: ['space', '6'], shared: '24px' },
  { cssName: 'fx-space-7', tsPath: ['space', '7'], shared: '28px' },
  { cssName: 'fx-space-8', tsPath: ['space', '8'], shared: '32px' },
  { cssName: 'fx-space-10', tsPath: ['space', '10'], shared: '40px' },
  { cssName: 'fx-space-12', tsPath: ['space', '12'], shared: '48px' },
  { cssName: 'fx-space-14', tsPath: ['space', '14'], shared: '56px' },
  { cssName: 'fx-space-16', tsPath: ['space', '16'], shared: '64px' },
  { cssName: 'fx-space-20', tsPath: ['space', '20'], shared: '80px' },
  { cssName: 'fx-space-24', tsPath: ['space', '24'], shared: '96px' },
  { cssName: 'fx-space-32', tsPath: ['space', '32'], shared: '128px' },

  // —— Control / icon / container sizes ——
  { cssName: 'fx-size-control-xs', tsPath: ['size', 'control', 'xs'], shared: '24px' },
  { cssName: 'fx-size-control-sm', tsPath: ['size', 'control', 'sm'], shared: '28px' },
  { cssName: 'fx-size-control-md', tsPath: ['size', 'control', 'md'], shared: '32px' },
  { cssName: 'fx-size-control-lg', tsPath: ['size', 'control', 'lg'], shared: '40px' },
  { cssName: 'fx-size-control-xl', tsPath: ['size', 'control', 'xl'], shared: '48px' },
  { cssName: 'fx-size-icon-xs', tsPath: ['size', 'icon', 'xs'], shared: '12px' },
  { cssName: 'fx-size-icon-sm', tsPath: ['size', 'icon', 'sm'], shared: '14px' },
  { cssName: 'fx-size-icon-md', tsPath: ['size', 'icon', 'md'], shared: '16px' },
  { cssName: 'fx-size-icon-lg', tsPath: ['size', 'icon', 'lg'], shared: '20px' },
  { cssName: 'fx-size-icon-xl', tsPath: ['size', 'icon', 'xl'], shared: '24px' },
  { cssName: 'fx-container-sm', tsPath: ['size', 'container', 'sm'], shared: '640px' },
  { cssName: 'fx-container-md', tsPath: ['size', 'container', 'md'], shared: '768px' },
  { cssName: 'fx-container-lg', tsPath: ['size', 'container', 'lg'], shared: '1024px' },
  { cssName: 'fx-container-xl', tsPath: ['size', 'container', 'xl'], shared: '1280px' },
  { cssName: 'fx-container-2xl', tsPath: ['size', 'container', '2xl'], shared: '1440px' },

  // —— Typography ——
  {
    cssName: 'fx-font-sans',
    tsPath: ['font', 'sans'],
    shared:
      "'Inter', 'PingFang SC', 'HarmonyOS Sans SC', 'Microsoft YaHei', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  },
  { cssName: 'fx-font-heading', tsPath: ['font', 'heading'], shared: 'var(--fx-font-sans)' },
  {
    cssName: 'fx-font-mono',
    tsPath: ['font', 'mono'],
    shared:
      "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace",
  },
  { cssName: 'fx-text-xs', tsPath: ['text', 'xs', 'size'], shared: '12px' },
  { cssName: 'fx-leading-xs', tsPath: ['text', 'xs', 'leading'], shared: '1.5' },
  { cssName: 'fx-text-sm', tsPath: ['text', 'sm', 'size'], shared: '13px' },
  { cssName: 'fx-leading-sm', tsPath: ['text', 'sm', 'leading'], shared: '1.55' },
  { cssName: 'fx-text-base', tsPath: ['text', 'base', 'size'], shared: '14px' },
  { cssName: 'fx-leading-base', tsPath: ['text', 'base', 'leading'], shared: '1.6' },
  { cssName: 'fx-text-md', tsPath: ['text', 'md', 'size'], shared: '15px' },
  { cssName: 'fx-leading-md', tsPath: ['text', 'md', 'leading'], shared: '1.6' },
  { cssName: 'fx-text-lg', tsPath: ['text', 'lg', 'size'], shared: '16px' },
  { cssName: 'fx-leading-lg', tsPath: ['text', 'lg', 'leading'], shared: '1.6' },
  { cssName: 'fx-text-xl', tsPath: ['text', 'xl', 'size'], shared: '18px' },
  { cssName: 'fx-leading-xl', tsPath: ['text', 'xl', 'leading'], shared: '1.55' },
  { cssName: 'fx-text-2xl', tsPath: ['text', '2xl', 'size'], shared: '20px' },
  { cssName: 'fx-leading-2xl', tsPath: ['text', '2xl', 'leading'], shared: '1.45' },
  { cssName: 'fx-text-3xl', tsPath: ['text', '3xl', 'size'], shared: '24px' },
  { cssName: 'fx-leading-3xl', tsPath: ['text', '3xl', 'leading'], shared: '1.35' },
  { cssName: 'fx-text-4xl', tsPath: ['text', '4xl', 'size'], shared: '30px' },
  { cssName: 'fx-leading-4xl', tsPath: ['text', '4xl', 'leading'], shared: '1.25' },
  { cssName: 'fx-text-5xl', tsPath: ['text', '5xl', 'size'], shared: '36px' },
  { cssName: 'fx-leading-5xl', tsPath: ['text', '5xl', 'leading'], shared: '1.2' },
  { cssName: 'fx-text-6xl', tsPath: ['text', '6xl', 'size'], shared: '48px' },
  { cssName: 'fx-leading-6xl', tsPath: ['text', '6xl', 'leading'], shared: '1.1' },
  { cssName: 'fx-font-weight-regular', tsPath: ['font', 'weight', 'regular'], shared: '400' },
  { cssName: 'fx-font-weight-medium', tsPath: ['font', 'weight', 'medium'], shared: '500' },
  { cssName: 'fx-font-weight-semibold', tsPath: ['font', 'weight', 'semibold'], shared: '600' },
  { cssName: 'fx-font-weight-bold', tsPath: ['font', 'weight', 'bold'], shared: '700' },
  { cssName: 'fx-tracking-tight', tsPath: ['font', 'tracking', 'tight'], shared: '-0.01em' },
  { cssName: 'fx-tracking-normal', tsPath: ['font', 'tracking', 'normal'], shared: '0' },
  { cssName: 'fx-tracking-wide', tsPath: ['font', 'tracking', 'wide'], shared: '0.02em' },

  // —— Radius ——
  { cssName: 'fx-radius-none', tsPath: ['radius', 'none'], shared: '0' },
  { cssName: 'fx-radius-xs', tsPath: ['radius', 'xs'], shared: '4px' },
  { cssName: 'fx-radius-sm', tsPath: ['radius', 'sm'], shared: '6px' },
  { cssName: 'fx-radius-md', tsPath: ['radius', 'md'], shared: '8px' },
  { cssName: 'fx-radius-lg', tsPath: ['radius', 'lg'], shared: '12px' },
  { cssName: 'fx-radius-xl', tsPath: ['radius', 'xl'], shared: '16px' },
  { cssName: 'fx-radius-2xl', tsPath: ['radius', '2xl'], shared: '24px' },
  { cssName: 'fx-radius-3xl', tsPath: ['radius', '3xl'], shared: '32px' },
  { cssName: 'fx-radius-full', tsPath: ['radius', 'full'], shared: '9999px' },

  // —— Shadow ——
  {
    cssName: 'fx-shadow-xs',
    tsPath: ['shadow', 'xs'],
    light: '0 1px 2px 0 rgba(42, 31, 20, 0.04)',
    dark: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
  },
  {
    cssName: 'fx-shadow-sm',
    tsPath: ['shadow', 'sm'],
    light: '0 1px 2px 0 rgba(42, 31, 20, 0.05), 0 1px 3px 0 rgba(42, 31, 20, 0.04)',
    dark: '0 1px 2px 0 rgba(0, 0, 0, 0.35), 0 1px 3px 0 rgba(0, 0, 0, 0.25)',
  },
  {
    cssName: 'fx-shadow-md',
    tsPath: ['shadow', 'md'],
    light: '0 2px 4px -1px rgba(42, 31, 20, 0.06), 0 4px 12px -2px rgba(42, 31, 20, 0.08)',
    dark: '0 2px 4px -1px rgba(0, 0, 0, 0.4), 0 4px 12px -2px rgba(0, 0, 0, 0.45)',
  },
  {
    cssName: 'fx-shadow-lg',
    tsPath: ['shadow', 'lg'],
    light: '0 4px 8px -2px rgba(42, 31, 20, 0.06), 0 12px 32px -4px rgba(42, 31, 20, 0.12)',
    dark: '0 4px 8px -2px rgba(0, 0, 0, 0.45), 0 12px 32px -4px rgba(0, 0, 0, 0.55)',
  },
  {
    cssName: 'fx-shadow-xl',
    tsPath: ['shadow', 'xl'],
    light: '0 8px 16px -4px rgba(42, 31, 20, 0.08), 0 24px 64px -8px rgba(42, 31, 20, 0.16)',
    dark: '0 8px 16px -4px rgba(0, 0, 0, 0.5), 0 24px 64px -8px rgba(0, 0, 0, 0.65)',
  },
  {
    cssName: 'fx-shadow-inset',
    tsPath: ['shadow', 'inset'],
    light: 'inset 0 1px 2px 0 rgba(42, 31, 20, 0.06)',
    dark: 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.4)',
  },
  {
    cssName: 'fx-ring-focus',
    tsPath: ['shadow', 'ringFocus'],
    shared: '0 0 0 3px var(--fx-color-focus-ring)',
  },

  // —— Motion ——
  {
    cssName: 'fx-motion-duration-instant',
    tsPath: ['motion', 'duration', 'instant'],
    shared: '0ms',
  },
  { cssName: 'fx-motion-duration-fast', tsPath: ['motion', 'duration', 'fast'], shared: '150ms' },
  { cssName: 'fx-motion-duration-base', tsPath: ['motion', 'duration', 'base'], shared: '240ms' },
  { cssName: 'fx-motion-duration-slow', tsPath: ['motion', 'duration', 'slow'], shared: '360ms' },
  {
    cssName: 'fx-motion-duration-slower',
    tsPath: ['motion', 'duration', 'slower'],
    shared: '480ms',
  },
  { cssName: 'fx-motion-ease-linear', tsPath: ['motion', 'ease', 'linear'], shared: 'linear' },
  {
    cssName: 'fx-motion-ease-out',
    tsPath: ['motion', 'ease', 'out'],
    shared: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
  },
  {
    cssName: 'fx-motion-ease-in',
    tsPath: ['motion', 'ease', 'in'],
    shared: 'cubic-bezier(0.64, 0, 0.78, 0)',
  },
  {
    cssName: 'fx-motion-ease-in-out',
    tsPath: ['motion', 'ease', 'inOut'],
    shared: 'cubic-bezier(0.65, 0, 0.35, 1)',
  },
  {
    cssName: 'fx-motion-ease-spring',
    tsPath: ['motion', 'ease', 'spring'],
    shared: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  {
    cssName: 'fx-motion-fast-out',
    tsPath: ['motion', 'fastOut'],
    shared: 'var(--fx-motion-duration-fast) var(--fx-motion-ease-out)',
  },
  {
    cssName: 'fx-motion-base-out',
    tsPath: ['motion', 'baseOut'],
    shared: 'var(--fx-motion-duration-base) var(--fx-motion-ease-out)',
  },
  {
    cssName: 'fx-motion-slow-out',
    tsPath: ['motion', 'slowOut'],
    shared: 'var(--fx-motion-duration-slow) var(--fx-motion-ease-out)',
  },

  // —— Z-index ——
  { cssName: 'fx-z-hide', tsPath: ['zIndex', 'hide'], shared: '-1' },
  { cssName: 'fx-z-base', tsPath: ['zIndex', 'base'], shared: '0' },
  { cssName: 'fx-z-raised', tsPath: ['zIndex', 'raised'], shared: '10' },
  { cssName: 'fx-z-docked', tsPath: ['zIndex', 'docked'], shared: '100' },
  { cssName: 'fx-z-dropdown', tsPath: ['zIndex', 'dropdown'], shared: '1000' },
  { cssName: 'fx-z-sticky', tsPath: ['zIndex', 'sticky'], shared: '1100' },
  { cssName: 'fx-z-banner', tsPath: ['zIndex', 'banner'], shared: '1200' },
  { cssName: 'fx-z-overlay', tsPath: ['zIndex', 'overlay'], shared: '1300' },
  { cssName: 'fx-z-modal', tsPath: ['zIndex', 'modal'], shared: '1400' },
  { cssName: 'fx-z-popover', tsPath: ['zIndex', 'popover'], shared: '1500' },
  { cssName: 'fx-z-toast', tsPath: ['zIndex', 'toast'], shared: '1600' },
  { cssName: 'fx-z-tooltip', tsPath: ['zIndex', 'tooltip'], shared: '1700' },
  { cssName: 'fx-z-max', tsPath: ['zIndex', 'max'], shared: '9999' },

  // —— Component tokens ——
  { cssName: 'fx-dialog-width', tsPath: ['component', 'dialogWidth'], shared: '420px' },
  { cssName: 'fx-drawer-width', tsPath: ['component', 'drawerWidth'], shared: '360px' },
  { cssName: 'fx-drawer-height', tsPath: ['component', 'drawerHeight'], shared: '360px' },
]
