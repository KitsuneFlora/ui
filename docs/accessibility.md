# Accessibility

- Icon-only controls (`FxIconButton`) require `aria-label`.
- Decorative icons use `aria-hidden="true"` (`FxIcon` default).
- Overlays (`FxDialog`, `FxDrawer`, `FxSelect`) rely on Reka UI focus management and keyboard patterns (Escape, arrows, typeahead for Select).
- `FxConfirmDialog` with `danger` should not auto-focus the destructive action; cancel remains the safer first stop.
- Color is never the only status signal (icons + text).
- Theme transitions respect `prefers-reduced-motion`.
- Generic chrome strings come from locale messages (`close`, `confirm`, `cancel`, `loading`).
