<template>
  <NuxtLink v-if="sponsor" class="flex items-center gap-6 mb-4 border hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-400 transition-colors"
    :href="sponsor._path">
    <img :src="sponsor.image.src" :alt="sponsor.image.alt" class="w-40" />
    <span class="flex flex-col">
      <span class="font-bold text-xl mb-1 dark:text-white">{{ sponsor.title }}</span>
      <span class="dark:text-gray-400">{{ sponsor.description }}</span>
    </span>
  </NuxtLink>
  <NuxtLinkLocale v-else href="/advertise">
    <div class="flex items-center gap-6 mb-4 border dark:border-gray-700">
      <span class="w-40 h-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-300">
        <Icon name="uil:image-v" size="48" />
      </span>
      <span class="flex flex-col">
        <span class="font-bold text-xl mb-1 dark:text-white">Become our first sponsor</span>
      </span>
    </div>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
defineProps<{ sponsor?: SponsorProduct }>()
</script>
