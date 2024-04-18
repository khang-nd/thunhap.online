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
  titleTemplate: (title) => title ? `${title} - Thu Nhập Online` : "Thu Nhập Online",
  meta: [
    ...i18nHeader.value.meta.map((meta: any) => (meta)),
    { property: 'og:image', content: 'https://cdn.thunhap.online/og-image.jpg' }
  ]
})

const useIdFunction = () => useId()
</script>

<style>
.el-input {
  @apply block border focus:border-transparent rounded-sm outline-none transition ring-offset-2 ring-black focus:ring-1;
}

.el-paging {
  @apply w-9 h-9 flex items-center justify-center disabled:opacity-50 rounded transition text-gray-500 hover:text-black disabled:hover:text-gray-500;
}

.el-group-item {
  @apply text-gray-500 hover:text-black data-[state=on]:text-black bg-gray-100 data-[state=on]:bg-gray-200 flex items-center justify-center text-base min-w-[40px] p-2 leading-4 first:rounded-l-md last:rounded-r-md transition-colors;
}

.el-outline {
  @apply transition-colors text-gray-500 hover:text-black focus:text-black border hover:border-gray-400 focus:border-gray-400 focus:bg-gray-100 hover:bg-gray-100;
}
</style>
