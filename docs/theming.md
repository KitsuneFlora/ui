# Theming

## Attribute

Resolved theme is written as `data-fx-theme="light|dark"` on the target element (default `document.documentElement`). ShadowRoot hosts are supported via `createFxTheme({ target })`.

Preference may be `light | dark | auto`.

## Bootstrap

```ts
import { bootstrapFxTheme, getFxThemeBootstrapSnippet } from '@kitsuneflora/ui/theme'

// before createApp
bootstrapFxTheme({ storageKey: 'foxnature-ui.theme' })
```

Inline snippet for zero-flash HTML:

```ts
getFxThemeBootstrapSnippet()
```

## Config provider

```vue
<FxConfigProvider locale="zh-CN" :theme-preference="'auto'">
  <App />
</FxConfigProvider>
```

## Transitions

During theme changes the controller adds `fx-theme-transitioning`. Motion is skipped when `prefers-reduced-motion: reduce`.

## CSS entries

| Import                        | Purpose                         |
| ----------------------------- | ------------------------------- |
| `@kitsuneflora/ui/tokens.css` | Variables only                  |
| `@kitsuneflora/ui/style.css`  | Tokens + component styles       |
| `@kitsuneflora/ui/reset.css`  | Opt-in reset                    |
| `@kitsuneflora/ui/preset.css` | Opt-in body/heading/code styles |
