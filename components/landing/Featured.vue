<template>
  <div class="mb-40 flex items-center justify-center space-x-10">
    <ClientOnly>
      <NuxtLink href="https://peerlist.io/khangnd/project/thu-nhap-online" target="_blank"
        class="transition-transform hover:scale-105">
        <img :src="`https://peerlist.io/images/Launch_Badge_${isDark ? 'Dark' : 'Light'}.svg`" alt="Peerlist"
          width="230" height="69" />
      </NuxtLink>
      <NuxtLink
        href="https://www.producthunt.com/posts/thunhap-online?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-thunhap&#0045;online"
        target="_blank" class="transition-transform hover:scale-105">
        <img
          :src="`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=449551&theme=${isDark ? 'dark' : 'neutral'}`"
          alt="Product Hunt" width="250" height="54" />
      </NuxtLink>

      <template #fallback>
        <CoreSkeleton class="w-[230px] h-[69px]" />
        <CoreSkeleton class="w-[250px] h-[54px]" />
      </template>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>
