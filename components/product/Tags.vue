<template>
  <ul class="flex items-center space-x-2 py-6 border-t-[1px]">
    <Icon name="uil:tag-alt" />
    <li v-for="tag in tags" :key="tag">
      <NuxtLink :href="`/browse?tags=${tag}`" class="font-medium text-gray-700 bg-gray-200 p-1 rounded-md">
        {{ tag }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
defineProps<{ tags: string[] }>()
</script>
