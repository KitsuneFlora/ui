# Design principles

foxnature-ui follows the “暖狐毛、舒适圆润” (warm fox fur, comfortably rounded) visual language.

1. **Warm surfaces** — creamy papers and soft browns; dark mode keeps amber brand contrast.
2. **Roundness without toys** — consistent radius tokens; avoid sharp dashboard chrome.
3. **Token-first** — no hardcoded palette in components; use `--fx-*` variables.
4. **Namespaced** — public CSS vars `--fx-*`, classes `fx-*`; no `#app` assumptions.
5. **Opt-in globals** — `reset.css` and `preset.css` are never implied by `style.css`.
6. **Accessible by default** — visible focus, keyboard overlays, locale labels for chrome.
7. **Pre-release honesty** — break freely until 1.0; no deprecated aliases or dual tokens.
