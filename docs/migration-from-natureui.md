# Migration from NatureUI

Pre-release: no compatibility shims.

1. Install `@kitsuneflora/ui` and import `@kitsuneflora/ui/style.css`.
2. Optionally add `reset.css` / `preset.css`.
3. Replace CSS variables with `--fx-*` equivalents (`--color-brand` → `--fx-color-brand`).
4. Replace `data-theme` with `data-fx-theme`.
5. Replace `useTheme` with `createFxTheme` / `useFxTheme` / `FxConfigProvider`.
6. Import components from `@kitsuneflora/ui` instead of local `Fx*.vue`.
7. Replace hardcoded Chinese chrome with locale or props (`closeLabel`, etc.).
8. Prefer Lucide + `FxIcon` over inline SVGs for generic glyphs.
9. Swap ad-hoc dialog shells for `FxDialog` / `FxConfirmDialog` / `FxDrawer`.
10. Delete NatureUI local copies after call sites migrate.

See [provenance.md](./provenance.md) for path mapping.
