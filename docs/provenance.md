# 来源溯源

首次从 NatureUI 抽取到 foxnature-ui 的记录。

## 源提交

- 仓库：`D:\FoxNature\NatureUI`
- Commit：`9343fb1b1397cf7e8ae3612f1cbe996c7735f3f2`

## 路径映射

| NatureUI 路径 | foxnature-ui 路径 |
| --- | --- |
| `src/styles/tokens/color.css`（及同级文件） | `src/tokens/source.mjs` → 生成 `src/styles/tokens.css`、`src/tokens/generated.ts` |
| `src/theme/tokens.ts` | `src/tokens/generated.ts`（生成；`--fx-*` 命名） |
| `src/composables/useTheme.ts` | `src/theme/createFxTheme.ts`、`src/theme/useFxTheme.ts` |
| `src/styles/reset.css` | `src/styles/reset.css`（无 `#app`；`data-fx-theme` / `fx-theme-transitioning`） |
| `src/styles/global.css` | `src/styles/preset.css`（无 `#app`） |
| `src/components/FxButton.vue` | `src/components/action/FxButton.vue` |
| `src/components/FxInput.vue` | `src/components/form/FxInput.vue` |
| `src/components/FxSelect.vue` | `src/components/form/FxSelect.vue`（基于 Reka Select 重写） |
| `src/components/FxSwitch.vue` | `src/components/form/FxSwitch.vue` |
| `src/components/FxFormField.vue` | `src/components/form/FxFormField.vue` |
| `src/components/FxAlert.vue` | `src/components/feedback/FxAlert.vue` |
| `src/components/FxSpinner.vue` | `src/components/feedback/FxSpinner.vue` |
| `src/components/FxCard.vue` | `src/components/layout/FxCard.vue` |
| `src/components/FxConfirmDialog.vue` | `src/components/overlay/FxConfirmDialog.vue`（`FxDialog` 薄封装） |
| `src/components/FxFoxMark.vue` | `src/components/brand/FxFoxMark.vue` |

## foxnature-ui 新增（非直接拷贝）

- `FxIconButton`、`FxTextarea`、`FxCheckbox`、`FxBadge`、`FxEmptyState`
- `FxPageHeader`、`FxPanelHeader`
- `FxDialog`、`FxDrawer`（Reka Dialog primitive）
- `FxLegalNotice`、`FxIcon`、`FxConfigProvider`
- Token 生成 / 校验脚本
- Storybook、playground、CI、治理文档

## 相对 NatureUI 的破坏性重命名

- CSS 变量：`--color-*` → `--fx-color-*`，`--space-*` → `--fx-space-*` 等
- 主题属性：`data-theme` → `data-fx-theme`
- 过渡 class：`theme-transitioning` → `fx-theme-transitioning`
- 默认 storageKey：`foxnature.theme` → `foxnature-ui.theme`
- 补充语义边框，包括 `--fx-color-warning-border`
