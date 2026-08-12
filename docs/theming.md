# 主题

## 属性

解析后的主题会写入目标元素的 `data-fx-theme="light|dark"`（默认 `document.documentElement`）。可通过 `createFxTheme({ target })` 指定 ShadowRoot 宿主。

偏好可为 `light | dark | auto`。

## Bootstrap

```ts
import { bootstrapFxTheme, getFxThemeBootstrapSnippet } from '@kitsuneflora/ui/theme'

// createApp 之前
bootstrapFxTheme({ storageKey: 'foxnature-ui.theme' })
```

零闪烁内联脚本：

```ts
getFxThemeBootstrapSnippet()
```

## ConfigProvider

```vue
<FxConfigProvider locale="zh-CN" :theme-preference="'auto'">
  <App />
</FxConfigProvider>
```

## 过渡

主题切换时控制器会添加 `fx-theme-transitioning`。当 `prefers-reduced-motion: reduce` 时跳过动画。

## CSS 入口

| 导入 | 用途 |
| --- | --- |
| `@kitsuneflora/ui/tokens.css` | 仅变量 |
| `@kitsuneflora/ui/style.css` | token + 组件样式 |
| `@kitsuneflora/ui/reset.css` | 可选 reset |
| `@kitsuneflora/ui/preset.css` | 可选 body / heading / code 等排版 |
