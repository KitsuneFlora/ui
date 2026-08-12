# 图标（Lucide）

我们选用官方 Vue 包 [`@lucide/vue`](https://lucide.dev/guide/vue/getting-started)。请用**具名静态导入**，这样打包才能 tree-shake。

## 我们定的规则

1. 只允许 `import { Search } from '@lucide/vue'` 这种写法。
2. 我们**不会**提供、也不接受 `FxIcon name="search"` 这种按字符串动态拉全量表的 API。
3. 我们**不** re-export Lucide 全量图标；你可以直接依赖 `@lucide/vue`。
4. `FxIcon` 只做尺寸和颜色容器：传 `:icon="Search"`，或用默认 slot。
5. 默认描边宽度 2，颜色 `currentColor`。
6. 尺寸对应 `--fx-size-icon-xs|sm|md|lg|xl`。
7. 装饰性图标我们默认加 `aria-hidden="true"`；纯图标按钮请你补可访问名称。
8. 请不要用 Lucide 替换我们的 `FxFoxMark`、产品 Logo、图表 glyph 或品牌插画。

## 示例

```vue
<script setup lang="ts">
import { Search, Trash2 } from '@lucide/vue'
import { FxButton, FxIcon, FxIconButton } from '@kitsuneflora/ui'
</script>

<template>
  <FxButton>
    <template #prefix>
      <FxIcon :icon="Search" size="sm" />
    </template>
    搜索
  </FxButton>

  <FxIconButton aria-label="删除">
    <FxIcon :icon="Trash2" />
  </FxIconButton>
</template>
```

## 语义映射

我们希望同一操作在应用里用同一 glyph，避免「这页 Trash、那页 X」：

| 操作                 | 图标                                     |
| -------------------- | ---------------------------------------- |
| 关闭                 | `X`                                      |
| 确认 / 成功          | `Check` / `CircleCheck`                  |
| 警告                 | `TriangleAlert`                          |
| 危险 / 错误          | `CircleX`                                |
| 信息                 | `Info`                                   |
| 展开                 | `ChevronDown`                            |
| 显示 / 隐藏密码      | `Eye` / `EyeOff`                         |
| 搜索                 | `Search`                                 |
| 刷新                 | `RefreshCw`                              |
| 删除                 | `Trash2`                                 |
| 新增                 | `Plus`                                   |
| 设置                 | `Settings`                               |
| 主题：亮 / 暗 / 自动 | `Sun` / `Moon` / `Monitor` 或 `Contrast` |
