<template>
  <NuxtLinkLocale :href="category._path" @mouseover="hovered = true" @mouseleave="hovered = false"
    class="flex items-center text-gray-500 border rounded-sm px-4 py-8 transition-colors hover:border-gray-400 hover:text-black">
    <div class="hidden sm:block mr-4 p-2 bg-gray-200 rounded-full">
      <Icon :name="category.icon" size="32" />
    </div>
    <div>
      <h2 class="font-semibold lg:text-lg flex items-center mb-1">
        <Icon :name="category.icon" size="20" class="mr-2 sm:hidden" />
        <span>{{ $t(`listing.${key}.title`) }}</span>
      </h2>
      <p class="max-w-lg mr-2">{{ $t(`listing.${key}.description`) }}</p>
    </div>
    <CoreBadge class="mb-0 ml-auto min-w-8 h-8 justify-center text-base">
      {{ category.body?.children.length || 0 }}
    </CoreBadge>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
const props = defineProps<{ category: ParsedListingCategory }>()
const key = computed(() => props.category.title?.toLowerCase())
const hovered = ref(false)
</script>
