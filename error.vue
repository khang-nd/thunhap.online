<template>
  <NuxtLayout>
    <LayoutError as="main" :error="error" />
  </NuxtLayout>
</template>

<script setup lang="ts">
// https://nuxt.com/docs/guide/directory-structure/error
defineProps<{ error: AppError }>()
</script>
