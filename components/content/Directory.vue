<template>
  <ProseA :href="data[id].url" target="_blank">{{ data[id].title }}</ProseA>
</template>

<script setup lang="ts">
type PlatformId = 'ph'

const data: Record<PlatformId, { title: string, url: string }> = {
  ph: { title: 'Product Hunt', url: 'https://www.producthunt.com/' },
}

defineProps<{ id: PlatformId }>()
</script>
