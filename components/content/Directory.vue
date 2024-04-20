<template>
  <ProseA :href="data[id].url" target="_blank">{{ data[id].title }}</ProseA>
</template>

<script setup lang="ts">
type PlatformId = 'ph' | 'gplay' | 'appstore' | 'chrome' | 'etsy' | 'setapp'

const data: Record<PlatformId, { title: string, url: string }> = {
  ph: { title: 'Product Hunt', url: 'https://www.producthunt.com/' },
  gplay: { title: 'Google Play', url: 'https://play.google.com/store' },
  appstore: { title: 'App Store', url: 'https://www.apple.com/app-store/' },
  chrome: { title: 'Chrome Web Store', url: 'https://chromewebstore.google.com' },
  etsy: { title: 'Etsy', url: 'https://www.etsy.com/' },
  setapp: { title: 'Setapp', url: 'https://setapp.com/' },
}

defineProps<{ id: PlatformId }>()
</script>
