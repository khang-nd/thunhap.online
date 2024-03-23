<template>
  <NuxtLink :href="product._path" :key="product._path" @mouseover="isHovered = true" @mouseleave="isHovered = false">
    <div class="w-full h-52 overflow-hidden border border-gray-300 relative">
      <img v-if="product.image?.src" :src="product.image.src" :alt="product.image.alt"
        class="w-full h-full object-cover" />
      <div
        :class="['absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 opacity-0', { 'opacity-100': isHovered }]">
        <Icon name="uil:external-link-alt" class="text-white text-5xl" />
      </div>
    </div>
    <div class="p-3 border border-t-0 border-gray-300">
      <CoreHeading as="h4">
        {{ product.title }}
        <CoreBadge class="mb-0 text-xs align-top">{{ formatPrice(product.revenue) }}/tháng</CoreBadge>
      </CoreHeading>
      <p>{{ product.description }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

defineProps<{
  product: ParsedContent
}>()
const isHovered = ref(false);
</script>
