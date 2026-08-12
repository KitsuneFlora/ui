# 无障碍

我们希望键盘用得起来、焦点可预期，并且不把颜色当成唯一的状态通道。

## 控件

- 使用我们的 `FxIconButton` 或其它纯图标控件时，请提供可访问名称（`aria-label` 或可视文本）。
- 装饰性图标我们默认加 `aria-hidden="true"`（`FxIcon`）。
- 表单请和 `FxFormField` 一起用：接上它给你的 `controlId` / `describedBy`，标签和错误信息才会对得上。

## Overlay

`FxDialog`、`FxDrawer`、`FxSelect` 我们基于 Reka UI 搭好了：

- 焦点圈定与恢复
- 在允许时用 `Escape` 关闭
- Select 的方向键、Home/End、Enter/Space、typeahead

`FxConfirmDialog` 在 `danger` 模式下，我们不会把初始焦点放到破坏性按钮上；取消会更安全。

## 视觉与动效

- 状态请同时带图标或文案，不要只靠红绿配色。
- 主题切换我们尊重 `prefers-reduced-motion`。
- 焦点环走 token（`--fx-ring-focus`），避免各浏览器默认 outline 不一致。

## 文案

关闭、确认、取消、加载中这类通用文案，我们放在 `FxConfigProvider` 的 locale（`zh-CN` / `en-US`）里，你也可以用组件 props 覆盖。业务说明请你自己传入。
