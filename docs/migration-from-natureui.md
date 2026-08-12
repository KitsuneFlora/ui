# 从 NatureUI 迁移

预发布阶段：不提供兼容垫片。

1. 安装 `@kitsuneflora/ui`，并导入 `@kitsuneflora/ui/style.css`。
2. 按需增加 `reset.css` / `preset.css`。
3. 将 CSS 变量改为 `--fx-*` 等价项（例如 `--color-brand` → `--fx-color-brand`）。
4. 将 `data-theme` 改为 `data-fx-theme`。
5. 将 `useTheme` 替换为 `createFxTheme` / `useFxTheme` / `FxConfigProvider`。
6. 从 `@kitsuneflora/ui` 导入组件，不再使用本地 `Fx*.vue`。
7. 用 locale 或 props（如 `closeLabel`）替换硬编码的通用中文 UI 文案。
8. 通用图标优先使用 Lucide + `FxIcon`，少写内联 SVG。
9. 用 `FxDialog` / `FxConfirmDialog` / `FxDrawer` 替换临时拼装的 dialog shell。
10. 调用方全部迁移后，删除 NatureUI 本地副本。

路径映射见 [provenance.md](./provenance.md)。
