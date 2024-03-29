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

<style>
.input {
  @apply w-full p-2 pl-10 border focus:border-transparent rounded-sm outline-none transition ring-offset-2 ring-black focus:ring-1;
}
</style>
