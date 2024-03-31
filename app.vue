<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'radix-vue';

useHead({
  titleTemplate: (title) => title ? `${title} - Thu Nhập Online` : "Thu Nhập Online",
  meta: [
    { property: 'og:image', content: 'https://cdn.thunhap.online/og-image.jpg' }
  ]
})

const useIdFunction = () => useId()
</script>

<style>
.input {
  @apply block border focus:border-transparent rounded-sm outline-none transition ring-offset-2 ring-black focus:ring-1;
}

.paging {
  @apply w-9 h-9 flex items-center justify-center disabled:opacity-50 rounded transition text-gray-500 hover:text-black disabled:hover:text-gray-500;
}
</style>
