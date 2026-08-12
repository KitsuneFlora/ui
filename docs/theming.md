# 主题与样式入口

## 主题属性

我们把解析后的主题写在目标节点上，例如：

```html
<html data-fx-theme="light"></html>
```

或 `dark`。偏好（preference）可以是：

| 值      | 含义                        |
| ------- | --------------------------- |
| `light` | 强制亮色                    |
| `dark`  | 强制暗色                    |
| `auto`  | 跟随 `prefers-color-scheme` |

默认持久化 key 是 `kitsuneflora-ui.theme`。你可以用 `createFxTheme({ storageKey })` 改掉；传 `null` 我们就不再写 storage。

需要挂到别的节点（含 ShadowRoot）时：

```ts
createFxTheme({ target: shadowRoot.host as HTMLElement })
```

## Bootstrap

请在创建 Vue 应用**之前**调用：

```ts
import { bootstrapFxTheme, getFxThemeBootstrapSnippet } from '@kitsuneflora/ui/theme'

bootstrapFxTheme({
  storageKey: 'kitsuneflora-ui.theme',
  syncThemeColorMeta: false,
})
```

想把闪烁压到最低，把下面函数返回的字符串塞进首屏 CSS 前的 `<script>`：

```ts
getFxThemeBootstrapSnippet({ storageKey: 'kitsuneflora-ui.theme' })
```

我们保证：模块 import 时不访问 `window` / `document`，方便你做 SSR 拆分。

## 在组件树里用

```vue
<script setup lang="ts">
import { FxConfigProvider, useFxTheme } from '@kitsuneflora/ui'

const { preference, resolved, cycle, setTheme } = useFxTheme()
</script>

<template>
  <FxConfigProvider locale="zh-CN" theme-preference="auto">
    <button type="button" @click="cycle()">当前：{{ preference }}（{{ resolved }}）</button>
    <slot />
  </FxConfigProvider>
</template>
```

## 过渡与动效

切换主题时，我们会短暂加上 class `fx-theme-transitioning`。  
若系统开启 `prefers-reduced-motion: reduce`，我们会把动画时长压到接近 0。

## CSS 入口

| 导入                          | 我们提供什么                      | 默认吗         |
| ----------------------------- | --------------------------------- | -------------- |
| `@kitsuneflora/ui/tokens.css` | 只有 `--fx-*`                     | 否             |
| `@kitsuneflora/ui/style.css`  | token + 组件样式                  | 用组件时请引入 |
| `@kitsuneflora/ui`（JS）      | 入口会带上组件样式依赖            | —              |
| `@kitsuneflora/ui/reset.css`  | 现代 reset，没有 `#app` 假设      | 显式 opt-in    |
| `@kitsuneflora/ui/preset.css` | body / heading / code / scrollbar | 显式 opt-in    |

公共变量一律 `--fx-*`，组件 class 一律 `fx-*`。

TypeScript 里可以这样写：

```ts
import { color, space, tokens } from '@kitsuneflora/ui/tokens'

const style = { color: color.brand, padding: space[4] }
// => var(--fx-color-brand) / var(--fx-space-4)
```
