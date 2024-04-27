<template>
  <div class="mb-32">
    <h2 class="text-3xl font-bold text-center mb-12 dark:text-white">Placement examples</h2>
    <div class="flex gap-6">
      <NuxtLink v-for="p in adplacements" :href="p.img" target="_blank">
        <div class="text-lg font-semibold text-center mb-4 dark:text-white">{{ p.name }}</div>
        <span class="relative group">
          <img :src="p.img" :alt="p.name" height="600" />
          <span
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-full text-white bg-black bg-opacity-50 transition opacity-0 group-hover:opacity-100 group-hover:scale-125">
            <Icon name="uil:search-alt" size="32" />
          </span>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const adplacements = [
  { name: 'Home page', img: 'https://cdn.thunhap.online/ads/exp-home.png', },
  { name: 'Browse page', img: 'https://cdn.thunhap.online/ads/exp-browse.png', },
  { name: 'Product page', img: 'https://cdn.thunhap.online/ads/exp-product.png' },
]
</script>
