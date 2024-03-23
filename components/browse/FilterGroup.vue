<template>
  <div class="mb-6">
    <CoreHeading as="h4" class="mb-2">{{ title }}</CoreHeading>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
