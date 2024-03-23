<template>
  <span>{{ formatPrice(v) }}</span>
</template>

<script setup lang="ts">
defineProps<{ v: string | number }>()
</script>
