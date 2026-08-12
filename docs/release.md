# 发布流程

## 版本通道

| 版本            | dist-tag | 我们用来做什么   |
| --------------- | -------- | ---------------- |
| `0.1.0-alpha.N` | `next`   | 预发布验证       |
| `0.1.0-beta.N`  | `next`   | API 冻结试用     |
| `0.1.0`         | `latest` | 第一个可用稳定版 |

`0.x` 里，minor 我们可能直接做破坏性变更；patch 我们不会破坏公开 API。

包地址：<https://www.npmjs.com/package/@kitsuneflora/ui>

## 发布前我们跑这些

```bash
npm ci
npm run tokens:check
npm run fmt:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run build-storybook
node scripts/smoke-consumer.mjs
```

并更新 [`CHANGELOG.md`](../CHANGELOG.md)。

## 本机发布

登录和发布必须指向 `https://registry.npmjs.org`（不要对 npmmirror 做 login/publish）：

```bash
npm whoami --registry=https://registry.npmjs.org
npm publish --registry=https://registry.npmjs.org --access public --tag next --otp=<2FA>
```

正式版我们不再加 `--tag next`（或显式 `--tag latest`）。

## GitHub Actions

推送 tag `v*.*.*` 会走 [`.github/workflows/release.yml`](../.github/workflows/release.yml)。我们依赖：

1. GitHub Environment：`npm`
2. npm Trusted Publisher：
   - Repository：`KitsuneFlora/ui`
   - Workflow：`release.yml`
   - Environment：`npm`
3. 版本名含 `alpha` / `beta` / `rc` 时自动打 `next`，否则 `latest`
4. OIDC + `--provenance`，我们不存长期 npm write token

```bash
git tag -s v0.1.0-alpha.1 -m "v0.1.0-alpha.1"
git push origin v0.1.0-alpha.1
```

## 发布后核对

```bash
npm view @kitsuneflora/ui --registry=https://registry.npmjs.org
npm view @kitsuneflora/ui dist-tags --registry=https://registry.npmjs.org
```

若预发布阶段 `latest` 误指到 alpha，我们可以：

```bash
npm dist-tag rm @kitsuneflora/ui latest --registry=https://registry.npmjs.org --otp=<2FA>
```

我们不会发布装不了、没有 `dist` 的空占位包。
