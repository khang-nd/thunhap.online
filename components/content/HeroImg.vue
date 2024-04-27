<template>
  <img :src="src" :alt="alt" class="border border-gray-300 dark:border-gray-700 my-6 md:p-3 rounded-lg" />
</template>

<script setup lang="ts">
defineProps<{
  src: string,
  alt: string,
}>()
</script>
