// SPDX-License-Identifier: AGPL-3.0-or-later

import './styles/style.css'

export { default as FxButton } from './components/action/FxButton.vue'
export { default as FxIconButton } from './components/action/FxIconButton.vue'

export { default as FxInput } from './components/form/FxInput.vue'
export { default as FxTextarea } from './components/form/FxTextarea.vue'
export { default as FxSelect } from './components/form/FxSelect.vue'
export type { FxSelectOption } from './components/form/select-types'
export { default as FxCheckbox } from './components/form/FxCheckbox.vue'
export { default as FxSwitch } from './components/form/FxSwitch.vue'
export { default as FxFormField } from './components/form/FxFormField.vue'

export { default as FxAlert } from './components/feedback/FxAlert.vue'
export { default as FxSpinner } from './components/feedback/FxSpinner.vue'
export { default as FxBadge } from './components/feedback/FxBadge.vue'
export { default as FxEmptyState } from './components/feedback/FxEmptyState.vue'

export { default as FxCard } from './components/layout/FxCard.vue'
export { default as FxPageHeader } from './components/layout/FxPageHeader.vue'
export { default as FxPanelHeader } from './components/layout/FxPanelHeader.vue'

export { default as FxDialog } from './components/overlay/FxDialog.vue'
export { default as FxConfirmDialog } from './components/overlay/FxConfirmDialog.vue'
export { default as FxDrawer } from './components/overlay/FxDrawer.vue'
export type { FxDrawerPlacement } from './components/overlay/drawer-types'

export { default as FxFoxMark } from './components/brand/FxFoxMark.vue'
export { default as FxLegalNotice } from './components/legal/FxLegalNotice.vue'
export { default as FxIcon } from './components/icons/FxIcon.vue'

export { default as FxConfigProvider } from './config/FxConfigProvider.vue'
export { useFxConfig, useFxLocaleMessages } from './config/useFxConfig'
export type { FxComponentDefaults, FxConfigContext } from './config/context'
export { fxLocales, type FxLocale, type FxLocaleMessages } from './locale/messages'

export {
  bootstrapFxTheme,
  createFxTheme,
  getFxThemeBootstrapSnippet,
  useFxTheme,
  type CreateFxThemeOptions,
  type FxThemeController,
  type FxThemeStorage,
  type ResolvedTheme,
  type ThemePreference,
} from './theme'

export {
  color,
  space,
  size,
  font,
  text,
  radius,
  shadow,
  motion,
  zIndex,
  component,
  tokens,
  type ColorToken,
  type SpaceToken,
  type RadiusToken,
  type ShadowToken,
} from './tokens'
