<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'radix-vue';

const i18nHeader = useLocaleHead({
  identifierAttribute: 'id',
  addSeoAttributes: true,
})

useHead({
  meta: [
    ...i18nHeader.value.meta.map((meta: any) => (meta)),
    { property: 'og:image', content: 'https://cdn.thunhap.online/og-image.jpg' }
  ]
})

const useIdFunction = () => useId()
</script>

<style>
/* page transition styles */
.auth-enter-active,
.auth-leave-active {
  transition: 0.3s;
}

.auth-enter-from,
.auth-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>