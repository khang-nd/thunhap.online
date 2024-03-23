<template>
  <span :class="['inline-flex items-center rounded-full px-2 py-1 text-sm font-medium mr-1 mb-1 transition-opacity hover:opacity-80', colors[color]]">
    <slot />
  </span>
</template>

<script setup lang="ts">
import type { status } from '#imports';

type Color = keyof typeof status;

const colors: Record<Color, string> = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-red-100 text-red-700",
  acquired: "bg-purple-100 text-purple-700",
  unknown: "bg-gray-200 text-gray-700",
};

withDefaults(defineProps<{
  color?: Color;
}>(), { color: 'unknown' })
</script>
