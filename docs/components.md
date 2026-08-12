# 组件说明

下面这些组件我们都从 `@kitsuneflora/ui` 公开导出。复杂交互底层可能用到 Reka UI，但我们不会把 Reka 的类型或组件名暴露给你。

交互演示请跑我们仓库里的 Storybook：`npm run storybook`。

## Actions

### `FxButton`

我们提供的主按钮。`variant`：`primary` | `secondary` | `ghost` | `danger`；`size`：`xs` | `sm` | `md` | `lg`；另有 `loading` / `disabled` / `block`。

Slots：`prefix`、默认、`suffix`。

### `FxIconButton`

纯图标按钮。请务必给我们（或给浏览器）一个可访问名称，例如 `aria-label`。

## Form

### `FxInput`

受控 `v-model`。我们支持 `invalid`、`disabled`、`readonly`、密码 `revealable`，以及 `prefix` / `suffix`。

### `FxTextarea`

多行输入，语义与输入类组件对齐。

### `FxSelect`

我们基于 Reka Select 做的选择器。传入 `options: { value, label }[]`。键盘：方向键、Home/End、Enter/Space、Escape、typeahead。

### `FxCheckbox` / `FxSwitch`

布尔受控。`FxSwitch` 可以带 `label`。

### `FxFormField`

标签、提示与错误信息的包装。默认 slot 会给你 `controlId`、`describedBy`、`invalid`。

## Feedback

### `FxAlert`

`variant`：`info` | `success` | `warning` | `danger`。可 `closable`；关闭文案走我们的 locale，也可用 props 覆盖。

### `FxSpinner`

加载指示。默认 `label` 来自 locale（加载中）。

### `FxBadge`

轻量状态徽章。

### `FxEmptyState`

空状态：标题、描述、图标 slot、操作区 slot。

## Layout

### `FxCard`

表面容器：`elevation`、`padding`、`bordered`、`sunken`。

### `FxPageHeader` / `FxPanelHeader`

页面级 / 面板级标题，带 actions slot。

## Overlay

### `FxDialog`

受控 `v-model:open`。我们提供 title / description，以及 header / body / footer slots；焦点圈定、Escape、遮罩点击、滚动锁由底层统一处理。

### `FxConfirmDialog`

确认框，是 `FxDialog` 的薄封装。`danger` 时我们不会把初始焦点放到破坏性按钮上。

### `FxDrawer`

抽屉。`placement`：`start` | `end` | `top` | `bottom`。焦点与滚动行为和 Dialog 一致。

## Brand / Legal / Icons

### `FxFoxMark`

我们的品牌狐狸标。请不要用 Lucide 去「替换」它。

### `FxLegalNotice`

源码与许可证入口。你可以配置 `sourceUrl` / `licenseUrl` / `copyright`。

### `FxIcon`

尺寸与颜色容器。把 Lucide 组件传给 `:icon`，或放进默认 slot。

## 配置

### `FxConfigProvider`

我们用它注入 locale、主题偏好、组件默认值、teleport 目标等。详见 [theming.md](./theming.md)。
