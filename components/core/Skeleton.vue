<template>
  <span :class="twMerge('animate-pulse bg-gray-300 rounded-md block h-5', $attrs.class as string)" />
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

defineOptions({
  inheritAttrs: false
})
</script>
