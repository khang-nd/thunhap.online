<template>
  <NuxtLink v-if="data" :href="getFullUrl(data.domain)" target="_blank" rel="nofollow noopener noreferrer"
    @mouseover="hovered = true" @mouseleave="hovered = false"
    class="flex items-center text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white rounded-sm px-4 py-6 transition-colors border dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-400">
    <div class="w-12 h-12 mr-4 p-2 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-md relative">
      <CoreTransition name="fade">
        <Icon v-if="hovered" name="uil:external-link-alt" size="20" class="absolute" />
        <Icon v-else-if="!data.icon" name="uil:image-times" size="20" class="absolute" />
        <img v-else :src="data.icon" :alt="data.name || data.domain" class="w-full" />
      </CoreTransition>
    </div>
    <h2 class="font-semibold lg:text-lg">{{ data.name || data.domain }}</h2>
  </NuxtLink>
  <div v-else class="flex items-center border dark:border-gray-700 rounded-sm px-4 py-6">
    <CoreSkeleton class="w-12 h-12 mr-4 rounded-md" />
    <CoreSkeleton class="w-1/2 h-7" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ data?: Sitemeta['Insert'] }>()
const hovered = ref(false)
</script>
