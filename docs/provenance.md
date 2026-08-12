# Provenance

First extraction from NatureUI into foxnature-ui.

## Source commit

- Repository: `D:\FoxNature\NatureUI`
- Commit: `9343fb1b1397cf7e8ae3612f1cbe996c7735f3f2`

## Path mapping

| NatureUI path                              | foxnature-ui path                                                                      |
| ------------------------------------------ | -------------------------------------------------------------------------------------- |
| `src/styles/tokens/color.css` (+ siblings) | `src/tokens/source.mjs` → generated `src/styles/tokens.css`, `src/tokens/generated.ts` |
| `src/theme/tokens.ts`                      | `src/tokens/generated.ts` (generated; `--fx-*` names)                                  |
| `src/composables/useTheme.ts`              | `src/theme/createFxTheme.ts`, `src/theme/useFxTheme.ts`                                |
| `src/styles/reset.css`                     | `src/styles/reset.css` (no `#app`; `data-fx-theme` / `fx-theme-transitioning`)         |
| `src/styles/global.css`                    | `src/styles/preset.css` (no `#app`)                                                    |
| `src/components/FxButton.vue`              | `src/components/action/FxButton.vue`                                                   |
| `src/components/FxInput.vue`               | `src/components/form/FxInput.vue`                                                      |
| `src/components/FxSelect.vue`              | `src/components/form/FxSelect.vue` (Reka Select rewrite)                               |
| `src/components/FxSwitch.vue`              | `src/components/form/FxSwitch.vue`                                                     |
| `src/components/FxFormField.vue`           | `src/components/form/FxFormField.vue`                                                  |
| `src/components/FxAlert.vue`               | `src/components/feedback/FxAlert.vue`                                                  |
| `src/components/FxSpinner.vue`             | `src/components/feedback/FxSpinner.vue`                                                |
| `src/components/FxCard.vue`                | `src/components/layout/FxCard.vue`                                                     |
| `src/components/FxConfirmDialog.vue`       | `src/components/overlay/FxConfirmDialog.vue` (wrapper over FxDialog)                   |
| `src/components/FxFoxMark.vue`             | `src/components/brand/FxFoxMark.vue`                                                   |

## New in foxnature-ui (not direct copies)

- `FxIconButton`, `FxTextarea`, `FxCheckbox`, `FxBadge`, `FxEmptyState`
- `FxPageHeader`, `FxPanelHeader`
- `FxDialog`, `FxDrawer` (Reka Dialog primitives)
- `FxLegalNotice`, `FxIcon`, `FxConfigProvider`
- Token generator / check scripts
- Storybook, playground, CI, governance docs

## Breaking renames vs NatureUI

- CSS vars: `--color-*` → `--fx-color-*`, `--space-*` → `--fx-space-*`, etc.
- Theme attribute: `data-theme` → `data-fx-theme`
- Transition class: `theme-transitioning` → `fx-theme-transitioning`
- Storage key default: `foxnature.theme` → `foxnature-ui.theme`
- Added semantic borders including `--fx-color-warning-border`
