# @kitsuneflora/ui

Warm-fox Vue 3 UI library extracted from NatureUI for independent AGPL release.

**License: [AGPL-3.0-or-later](./LICENSE)** — this is a strong copyleft library. Consuming it in a network-interactive application generally requires distributing corresponding source under AGPL-compatible terms. Evaluate license compatibility before depending on this package.

## Support matrix (`0.1.x`)

| Area          | Supported                                |
| ------------- | ---------------------------------------- |
| Vue           | `^3.5.0`                                 |
| Node (dev/CI) | 24 LTS                                   |
| Module format | ESM                                      |
| Browsers      | Chromium / Firefox / WebKit latest       |
| SSR           | Import-safe (no `window` on module load) |

Not supported in `0.1.x`: Vue 2, CJS/UMD globals, IE, Nuxt module, React wrappers.

## Install

```bash
npm install @kitsuneflora/ui
```

Peer: `vue@^3.5.0`.

## Quick start

```ts
import { createApp } from 'vue'
import { FxConfigProvider, FxButton, bootstrapFxTheme } from '@kitsuneflora/ui'
import '@kitsuneflora/ui/style.css'
// optional:
// import '@kitsuneflora/ui/reset.css'
// import '@kitsuneflora/ui/preset.css'

bootstrapFxTheme()
createApp({
  components: { FxConfigProvider, FxButton },
  template: `
    <FxConfigProvider locale="en-US">
      <FxButton>Hello</FxButton>
    </FxConfigProvider>
  `,
}).mount('#app')
```

Optional pre-paint snippet (place before CSS):

```html
<script>
  // paste output of getFxThemeBootstrapSnippet()
</script>
```

## Package exports

- `@kitsuneflora/ui`
- `@kitsuneflora/ui/style.css`
- `@kitsuneflora/ui/tokens.css`
- `@kitsuneflora/ui/reset.css`
- `@kitsuneflora/ui/preset.css`
- `@kitsuneflora/ui/theme`
- `@kitsuneflora/ui/tokens`

## Development

```bash
npm install
npm run tokens:generate
npm run typecheck
npm run test
npm run build
npm run storybook
```

## Docs

- [Design principles](./docs/design-principles.md)
- [Theming](./docs/theming.md)
- [Accessibility](./docs/accessibility.md)
- [Icons](./docs/icons.md)
- [Migration from NatureUI](./docs/migration-from-natureui.md)
- [Release](./docs/release.md)
- [Provenance](./docs/provenance.md)

## Links

- Source: https://github.com/KitsuneFlora/foxnature-ui
- Copyright: [COPYRIGHT.md](./COPYRIGHT.md)
- Security: [SECURITY.md](./SECURITY.md)
- Third-party notices: [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md)
