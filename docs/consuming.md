# 在应用中接入

我们希望你把 `@kitsuneflora/ui` 当成应用的 UI 基础层来用。预发布阶段我们**不会**提供旧 API、旧 CSS 变量或旧主题属性的兼容垫片。

## 1. 安装

```bash
npm install @kitsuneflora/ui@next vue@^3.5.0
```

也可以钉版本：

```bash
npm install @kitsuneflora/ui@0.1.0-alpha.1
```

包地址：<https://www.npmjs.com/package/@kitsuneflora/ui>

## 2. 引入样式

最少引入组件样式：

```ts
import '@kitsuneflora/ui/style.css'
```

这两份我们做成显式开关，**不会**被 `style.css` 自动带上：

```ts
import '@kitsuneflora/ui/reset.css'
import '@kitsuneflora/ui/preset.css'
```

如果你只想拿变量、样式完全自己写：

```ts
import '@kitsuneflora/ui/tokens.css'
```

## 3. 启动主题

请在 `createApp` 之前调用我们提供的 bootstrap，减少首帧闪色：

```ts
import { bootstrapFxTheme } from '@kitsuneflora/ui'

bootstrapFxTheme({
  storageKey: 'kitsuneflora-ui.theme', // 你也可以改；传 null 表示不落盘
  syncThemeColorMeta: true,
})
```

更多选项、SSR、ShadowRoot，见 [theming.md](./theming.md)。

## 4. 包一层 Provider

```vue
<script setup lang="ts">
import { FxConfigProvider } from '@kitsuneflora/ui'
</script>

<template>
  <FxConfigProvider locale="zh-CN" theme-preference="auto">
    <RouterView />
  </FxConfigProvider>
</template>
```

我们内置 `zh-CN` / `en-US`，覆盖关闭、确认、取消、加载中这类通用文案。业务文案请你自己传。

## 5. 使用组件

```vue
<script setup lang="ts">
import { Search } from '@lucide/vue'
import { FxButton, FxIcon, FxInput } from '@kitsuneflora/ui'
</script>

<template>
  <FxInput v-model="q" placeholder="搜索">
    <template #prefix>
      <FxIcon :icon="Search" />
    </template>
  </FxInput>
  <FxButton variant="primary">提交</FxButton>
</template>
```

我们约定：

- 只从 `@kitsuneflora/ui` 公开入口导入，不要 alias 到我们的 `src/`。
- 通用图标用 `@lucide/vue` **具名静态导入** + `FxIcon`；我们不提供字符串动态全量表。
- 弹层用 `FxDialog` / `FxConfirmDialog` / `FxDrawer`；选择器用 `FxSelect`。
- 样式变量用 `--fx-*`，主题属性用 `data-fx-theme`。

## 6. TypeScript

我们随包发布 `.d.ts`。常见 Vite + Vue SFC 工程直接这样用即可：

```ts
import type { FxSelectOption, ThemePreference } from '@kitsuneflora/ui'
```

## 7. AGPL 入口

如果你做的是可网络交互的应用，我们建议你在关于页、设置或页脚放上源码与许可证链接。可以直接用我们提供的组件：

```vue
<FxLegalNotice
  source-url="https://github.com/your-org/your-app"
  license-url="https://www.gnu.org/licenses/agpl-3.0.html"
  copyright="Copyright © Your Team"
/>
```

需要指向本库时，用：<https://github.com/KitsuneFlora/ui>

## 接着读

- [组件说明](./components.md)
- [主题](./theming.md)
- [图标](./icons.md)
- [无障碍](./accessibility.md)
