<template>
  <hr class="w-1/2 mx-auto border-gray-200 dark:border-gray-800" />
  <ul class="flex items-center space-x-2 py-6 dark:text-gray-300">
    <Icon name="uil:tag-alt" />
    <li v-for="tag in tags" :key="tag">
      <NuxtLinkLocale :href="`/browse/tag/${tag}`" class="font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 p-1 rounded-md">
        {{ tag }}
      </NuxtLinkLocale>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{ tags: string[] }>()
</script>
