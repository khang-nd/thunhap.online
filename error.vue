<template>
  <NuxtLayout>
    <LayoutError as="main">
      {{ error.statusCode }}
    </LayoutError>
  </NuxtLayout>
</template>

<script setup lang="ts">
// https://nuxt.com/docs/guide/directory-structure/error
defineProps<{
  error: {
    statusCode: number
    fatal: boolean
    unhandled: boolean
    statusMessage?: string
    data?: unknown
    cause?: unknown
  }
}>()
</script>
