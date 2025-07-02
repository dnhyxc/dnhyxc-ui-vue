# Icon 图标

dnhyxc-ui 推荐使用 [xicons](https://www.xicons.org/#/) 作为图标库。

```
$ pnpm install @vicons/ionicons5
```

## 使用图标

全局注册

:::demo

```vue
<script setup lang="ts">
import { Earth } from '@vicons/ionicons5';
</script>

<template>
  <n-icon :size="20" color="red">
    <Earth />
  </n-icon>
  <n-icon :size="20" color="green">
    <Earth />
  </n-icon>
</template>
```

:::

## API

### Icon Props

| 名称  | 类型                 | 默认值 | 说明     | 版本 |
| ----- | -------------------- | ------ | -------- | ---- |
| size  | `number` \| `string` | `16`   | 图标大小 | -    |
| color | `string`             | `#000` | 图标颜色 | -    |
