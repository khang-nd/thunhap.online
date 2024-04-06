<template>
  <span>{{ formatPrice(v, locale) }}</span>
</template>

<script setup lang="ts">
defineProps<{ v: string | number }>()
const { locale } = useI18n()
</script>
