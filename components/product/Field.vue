<template>
  <div
    class="flex flex-col items-start justify-between mb-3 space-y-2 border border-gray-300 rounded-md px-3 py-2">
    <span class="font-medium">{{ title }}</span>
    <div class="w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
