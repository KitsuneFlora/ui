# Contributing

## License

By contributing you agree inbound=outbound under **AGPL-3.0-or-later**. Use DCO Signed-off-by on commits:

```text
Signed-off-by: Your Name <you@example.com>
```

## Setup

- Node.js 24
- `npm install`
- `npm run tokens:generate`

## Checks

```bash
npm run fmt:check
npm run lint
npm run typecheck
npm run test
npm run build
```

## Component checklist

- Props/Emits/Slots documented in stories
- `--fx-*` tokens only
- No Reka types in public exports
- Locale for generic chrome strings
- Keyboard + focus behavior for overlays
- SPDX header on source files
