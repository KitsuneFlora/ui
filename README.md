# @kitsuneflora/ui

以「暖狐毛、舒适圆润」为视觉语言，做成一套 Vue 3 组件库，并以 **[AGPL-3.0-or-later](https://github.com/KitsuneFlora/ui/blob/main/LICENSE)** 公开发布。

- 源码：<https://github.com/KitsuneFlora/ui>
- npm：<https://www.npmjs.com/package/@kitsuneflora/ui>
- 版本与 dist-tag：见 [npm versions](https://www.npmjs.com/package/@kitsuneflora/ui?activeTab=versions)（预发布请装 `next`）

我们在这里维护设计 token、主题运行时和通用交互组件。你可以用它搭业务界面；路由、鉴权、领域数据请放在你自己的应用里。

> npm 包里不附带 `docs/`。完整说明请看仓库里的 [`docs/`](https://github.com/KitsuneFlora/ui/tree/main/docs)。下面文档链接都指向 GitHub，避免在 npm 页面点相对路径出现 404。

## 安装

```bash
# 当前预发布阶段，我们建议装 next
npm install @kitsuneflora/ui@next

# 或钉死版本
npm install @kitsuneflora/ui@0.1.0-alpha.1
```

你需要自己准备 peer：`vue@^3.5.0`。

## 快速开始

```ts
import { createApp } from 'vue'
import { FxConfigProvider, FxButton, bootstrapFxTheme } from '@kitsuneflora/ui'
import '@kitsuneflora/ui/style.css'
// 这两份做成显式 opt-in，不会被 style.css 隐式引入：
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

若你想压掉首帧主题闪烁，把 `getFxThemeBootstrapSnippet()` 的返回值内联到首屏 CSS 之前（见 [主题文档](https://github.com/KitsuneFlora/ui/blob/main/docs/theming.md)）。

## 我们导出什么

| 导入路径                      | 内容                                                          |
| ----------------------------- | ------------------------------------------------------------- |
| `@kitsuneflora/ui`            | 组件、主题与 token 的 TypeScript / ESM 入口（会带上组件样式） |
| `@kitsuneflora/ui/style.css`  | token + 组件样式                                              |
| `@kitsuneflora/ui/tokens.css` | 只有 CSS 变量                                                 |
| `@kitsuneflora/ui/reset.css`  | 可选现代 reset                                                |
| `@kitsuneflora/ui/preset.css` | 可选基础排版                                                  |
| `@kitsuneflora/ui/theme`      | 主题 API                                                      |
| `@kitsuneflora/ui/tokens`     | TypeScript 里的 `var(--fx-*)` 引用                            |

请只使用我们在 `package.json#exports` 里承诺的路径，不要 deep import 内部文件。

## 组件一览（`0.1.x`）

| 分组          | 组件                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| Actions       | `FxButton`、`FxIconButton`                                                   |
| Form          | `FxInput`、`FxTextarea`、`FxSelect`、`FxCheckbox`、`FxSwitch`、`FxFormField` |
| Feedback      | `FxAlert`、`FxSpinner`、`FxBadge`、`FxEmptyState`                            |
| Layout        | `FxCard`、`FxPageHeader`、`FxPanelHeader`                                    |
| Overlay       | `FxDialog`、`FxConfirmDialog`、`FxDrawer`                                    |
| Brand / Legal | `FxFoxMark`、`FxLegalNotice`                                                 |
| Icons         | `FxIcon`（尺寸容器；图标本体请用具名 Lucide）                                |
| Config        | `FxConfigProvider`                                                           |

## 我们支持什么（`0.1.x`）

| 范围              | 支持                                         |
| ----------------- | -------------------------------------------- |
| Vue               | `^3.5.0`                                     |
| Node（开发 / CI） | 24 LTS                                       |
| 模块              | ESM                                          |
| 浏览器            | Chromium / Firefox / WebKit 最新稳定版       |
| SSR               | 模块 import 时我们不碰 `window` / `document` |

我们暂时不承诺：Vue 2、CJS/UMD 全局构建、IE、Nuxt module、React 封装。

## 文档

- [在应用中接入](https://github.com/KitsuneFlora/ui/blob/main/docs/consuming.md)
- [设计原则](https://github.com/KitsuneFlora/ui/blob/main/docs/design-principles.md)
- [主题与样式入口](https://github.com/KitsuneFlora/ui/blob/main/docs/theming.md)
- [图标（Lucide）](https://github.com/KitsuneFlora/ui/blob/main/docs/icons.md)
- [无障碍](https://github.com/KitsuneFlora/ui/blob/main/docs/accessibility.md)
- [组件说明](https://github.com/KitsuneFlora/ui/blob/main/docs/components.md)
- [发布流程](https://github.com/KitsuneFlora/ui/blob/main/docs/release.md)

## 本地开发

```bash
npm install
npm run tokens:generate
npm run typecheck
npm run test
npm run build
npm run storybook
```

## 许可证

- [LICENSE](https://github.com/KitsuneFlora/ui/blob/main/LICENSE)
- [TRADEMARKS.md](https://github.com/KitsuneFlora/ui/blob/main/TRADEMARKS.md)
- [THIRD_PARTY_NOTICES.md](https://github.com/KitsuneFlora/ui/blob/main/THIRD_PARTY_NOTICES.md)
- [SECURITY.md](https://github.com/KitsuneFlora/ui/blob/main/SECURITY.md)
