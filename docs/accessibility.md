# 无障碍

- 纯图标控件（`FxIconButton`）必须提供 `aria-label`。
- 装饰性图标使用 `aria-hidden="true"`（`FxIcon` 默认如此）。
- Overlay（`FxDialog`、`FxDrawer`、`FxSelect`）依赖 Reka UI 的焦点管理与键盘模式（Escape、方向键、Select 的 typeahead）。
- `FxConfirmDialog` 在 `danger` 模式下不应自动聚焦破坏性操作；取消按钮应作为更安全的首个落点。
- 颜色不能作为唯一状态区分（配合图标与文字）。
- 主题过渡尊重 `prefers-reduced-motion`。
- 通用界面文案来自 locale（`close`、`confirm`、`cancel`、`loading`）。
