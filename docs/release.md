# 发布

## 版本通道

- `0.1.0-alpha.N` — 内部 / NatureUI 验证（npm dist-tag `next`）
- `0.1.0-beta.N` — API 冻结试用（`next`）
- `0.1.0` — 第一个可用稳定版（`latest`）

1.0 之前：minor 可含破坏性变更；patch 不得破坏公开 API。

## 检查清单

1. `npm ci`
2. `npm run tokens:check`
3. `npm run fmt:check && npm run lint && npm run typecheck && npm run test`
4. `npm run build && npm run build-storybook`
5. `node scripts/smoke-consumer.mjs`
6. 更新 `CHANGELOG.md`
7. 签名 Git tag：`vX.Y.Z`
8. 在 Trusted Publishing / OIDC 就绪后发布（`npm publish --access public`）

禁止发布仅占位、无法使用的空包。
