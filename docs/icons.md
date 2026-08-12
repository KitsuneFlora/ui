# Icons

## Rules

1. Import Lucide icons with **named static imports** from `@lucide/vue`.
2. Do **not** build a stringly-typed icon registry that bundles every glyph.
3. The library does **not** re-export Lucide’s full set.
4. `FxIcon` is a size/color container: pass a component via `icon` prop or use the default slot.
5. Default stroke width is 2; color is `currentColor`.
6. Sizes map to `--fx-size-icon-xs|sm|md|lg|xl`.
7. Brand marks (`FxFoxMark`) stay custom — do not replace them with Lucide.

## Example

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
    Search
  </FxButton>
</template>
```

## Semantic map (starter)

| Action             | Icon                    |
| ------------------ | ----------------------- |
| Close              | `X`                     |
| Confirm / success  | `Check` / `CircleCheck` |
| Warning            | `TriangleAlert`         |
| Danger / error     | `CircleX`               |
| Info               | `Info`                  |
| Expand             | `ChevronDown`           |
| Password show/hide | `Eye` / `EyeOff`        |
