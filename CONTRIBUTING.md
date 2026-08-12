# 贡献指南

## 许可证

贡献即同意按 inbound=outbound 以 **AGPL-3.0-or-later** 纳入本项目。提交请附带 DCO `Signed-off-by`：

```text
Signed-off-by: 你的名字 <you@example.com>
```

## 环境准备

- Node.js 24
- `npm install`
- `npm run tokens:generate`

## 检查命令

```bash
npm run fmt:check
npm run lint
npm run typecheck
npm run test
npm run build
```

## 组件完成清单

- Props / Emits / Slots 在 stories 中有说明
- 样式只使用 `--fx-*` token
- 公开导出不泄漏 Reka 类型
- 通用 UI 文案走 locale
- Overlay 组件具备键盘与焦点行为
- 源文件带 SPDX 头
