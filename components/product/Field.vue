<template>
  <div
    class="flex lg:flex-col items-center lg:items-start justify-between mb-3 lg:space-y-2 border border-gray-300 rounded-md px-3 py-2">
    <span class="font-medium">{{ title }}</span>
    <span class="text-right">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
