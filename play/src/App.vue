<script setup lang="ts">
import { NIcon2 } from 'dnhyxc-ui';
import { Earth } from '@vicons/ionicons5';
import '@dnhyxc-ui/theme-chalk/src/index.scss';
</script>

<template>
  <div>
    <h1>test play</h1>
    <n-icon :size="20" color="red">
      <Earth />
    </n-icon>
    <n-icon :size="20" color="skyblue">
      <Earth />
    </n-icon>
    <n-icon2 :size="50" color="pink">
      <Earth />
    </n-icon2>
  </div>
</template>

<style scoped></style>
