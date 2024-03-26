<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} - Thu Nhập Online` : "Thu Nhập Online",
  meta: [
    { property: 'og:image', content: 'https://cdn.thunhap.online/og-image.jpg' }
  ]
})
</script>
