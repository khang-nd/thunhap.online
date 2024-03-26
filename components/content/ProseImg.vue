<template>
  <NuxtLink :href="refinedSrc" target="_blank" class="relative [&_span]:hover:opacity-100">
    <img :src="refinedSrc" :alt="alt" :width="width" :height="height" class="py-4 md:px-6">
    <span class="absolute top-6 right-2 md:right-8 p-3 opacity-0 transition-opacity rounded-full text-white bg-black bg-opacity-40">
      <Icon name="uil:search-alt" size="24" />
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import { useRuntimeConfig, computed } from '#imports'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  }
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
</script>