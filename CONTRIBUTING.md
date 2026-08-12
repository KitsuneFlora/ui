# 贡献指南

## 许可证

向我们提交代码，即表示你同意按 inbound=outbound 以 **AGPL-3.0-or-later** 纳入本项目。请附带 DCO：

```text
Signed-off-by: 你的名字 <you@example.com>
```

## 环境

- Node.js 24

```bash
npm install
npm run tokens:generate
```

## 日常检查

```bash
npm run fmt:check
npm run lint
npm run typecheck
npm run test
npm run build
node scripts/smoke-consumer.mjs
```

## 组件完成清单

在发 PR 前，请确认：

- Props / Emits / Slots 在 Storybook 里有说明
- 样式只使用 `--fx-*`
- 公开导出不泄漏 Reka 类型或内部路径
- 通用 UI 文案走 locale；业务文案由调用方提供
- Overlay 具备键盘与焦点行为
- 源文件带 `SPDX-License-Identifier: AGPL-3.0-or-later`

完整文档：<https://github.com/KitsuneFlora/ui/tree/main/docs>
