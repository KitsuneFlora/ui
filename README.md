# @kitsuneflora/ui

从 NatureUI 抽出的「暖狐毛」Vue 3 UI 库，以独立仓库按 AGPL 公开发布。

**许可证：[AGPL-3.0-or-later](./LICENSE)** — 这是强 copyleft 库。在可网络交互的应用中使用时，通常需要按 AGPL 兼容条款提供对应源码。接入前请先完成许可证兼容性评估。

## 支持矩阵（`0.1.x`）

| 范围 | 支持情况 |
| --- | --- |
| Vue | `^3.5.0` |
| Node（开发 / CI） | 24 LTS |
| 模块格式 | ESM |
| 浏览器 | Chromium / Firefox / WebKit 最新稳定版 |
| SSR | 导入安全（模块加载时不访问 `window`） |

`0.1.x` 暂不支持：Vue 2、CJS/UMD 全局变量、IE、Nuxt module、React 封装。

## 安装

```bash
npm install @kitsuneflora/ui
```

Peer 依赖：`vue@^3.5.0`。

## 快速开始

```ts
import { createApp } from 'vue'
import { FxConfigProvider, FxButton, bootstrapFxTheme } from '@kitsuneflora/ui'
import '@kitsuneflora/ui/style.css'
// 可选：
// import '@kitsuneflora/ui/reset.css'
// import '@kitsuneflora/ui/preset.css'

bootstrapFxTheme()
createApp({
  components: { FxConfigProvider, FxButton },
  template: `
    <FxConfigProvider locale="zh-CN">
      <FxButton>你好</FxButton>
    </FxConfigProvider>
  `,
}).mount('#app')
```

可选首屏防闪烁脚本（放在 CSS 之前）：

```html
<script>
  // 粘贴 getFxThemeBootstrapSnippet() 的输出
</script>
```

## 包导出

- `@kitsuneflora/ui`
- `@kitsuneflora/ui/style.css`
- `@kitsuneflora/ui/tokens.css`
- `@kitsuneflora/ui/reset.css`
- `@kitsuneflora/ui/preset.css`
- `@kitsuneflora/ui/theme`
- `@kitsuneflora/ui/tokens`

## 本地开发

```bash
npm install
npm run tokens:generate
npm run typecheck
npm run test
npm run build
npm run storybook
```

## 文档

- [设计原则](./docs/design-principles.md)
- [主题](./docs/theming.md)
- [无障碍](./docs/accessibility.md)
- [图标](./docs/icons.md)
- [从 NatureUI 迁移](./docs/migration-from-natureui.md)
- [发布](./docs/release.md)
- [来源溯源](./docs/provenance.md)

## 链接

- 源码：https://github.com/KitsuneFlora/foxnature-ui
- 版权：[COPYRIGHT.md](./COPYRIGHT.md)
- 安全：[SECURITY.md](./SECURITY.md)
- 第三方声明：[THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)
