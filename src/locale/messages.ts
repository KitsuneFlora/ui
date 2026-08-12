// SPDX-License-Identifier: AGPL-3.0-or-later

export type FxLocale = 'zh-CN' | 'en-US'

export interface FxLocaleMessages {
  close: string
  confirm: string
  cancel: string
  loading: string
  showPassword: string
  hidePassword: string
  selectPlaceholder: string
  empty: string
}

export const fxLocales: Record<FxLocale, FxLocaleMessages> = {
  'zh-CN': {
    close: '关闭',
    confirm: '确认',
    cancel: '取消',
    loading: '加载中',
    showPassword: '显示密码',
    hidePassword: '隐藏密码',
    selectPlaceholder: '请选择',
    empty: '暂无内容',
  },
  'en-US': {
    close: 'Close',
    confirm: 'Confirm',
    cancel: 'Cancel',
    loading: 'Loading',
    showPassword: 'Show password',
    hidePassword: 'Hide password',
    selectPlaceholder: 'Select',
    empty: 'No content',
  },
}
