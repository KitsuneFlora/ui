# Release

## Version channels

- `0.1.0-alpha.N` — internal / NatureUI validation (`next` dist-tag)
- `0.1.0-beta.N` — API freeze trial (`next`)
- `0.1.0` — first usable stable (`latest`)

Pre-1.0: minor versions may break. Patches must not break public API.

## Checklist

1. `npm ci`
2. `npm run tokens:check`
3. `npm run fmt:check && npm run lint && npm run typecheck && npm run test`
4. `npm run build && npm run build-storybook`
5. `node scripts/smoke-consumer.mjs`
6. Update `CHANGELOG.md`
7. Signed git tag `vX.Y.Z`
8. Publish with Trusted Publishing / OIDC when configured (`npm publish --access public`)

Do not publish empty placeholder packages.
