# 图标

## 规则

1. 从 `@lucide/vue` **具名静态导入** Lucide 图标。
2. **禁止**实现按字符串动态加载全图标表的注册表。
3. 本库 **不** re-export Lucide 全量图标。
4. `FxIcon` 只做尺寸 / 颜色容器：通过 `icon` prop 传入组件，或使用默认 slot。
5. 默认描边宽度为 2；颜色为 `currentColor`。
6. 尺寸绑定 `--fx-size-icon-xs|sm|md|lg|xl`。
7. 品牌标志（`FxFoxMark`）保持自定义，不要用 Lucide 替换。

## 示例

```vue
<script setup lang="ts">
import { Search } from '@lucide/vue'
import { FxIcon, FxButton } from '@kitsuneflora/ui'
</script>

<template>
  <FxButton>
    <template #prefix>
      <FxIcon :icon="Search" />
    </template>
    搜索
  </FxButton>
</template>
```

## 语义映射（起步）

| 操作 | 图标 |
| --- | --- |
| 关闭 | `X` |
| 确认 / 成功 | `Check` / `CircleCheck` |
| 警告 | `TriangleAlert` |
| 危险 / 错误 | `CircleX` |
| 信息 | `Info` |
| 展开 | `ChevronDown` |
| 显示 / 隐藏密码 | `Eye` / `EyeOff` |
