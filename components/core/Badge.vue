<template>
  <span
    :class="['inline-flex items-center rounded-full px-2 py-1 text-sm font-medium mr-1 mb-1 transition-opacity hover:opacity-80', colors[color]]">
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  color?: StatusType;
}>(), { color: 'unknown' })
</script>
