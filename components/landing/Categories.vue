<template>
  <h2 class="text-4xl lg:text-5xl text-center font-bold lg:tracking-tight mb-16 dark:text-gray-300">
    {{ $t('landing.hot-categories-title') }}
  </h2>

  <div class="grid grid-cols-2 lg:grid-cols-4 mb-12 gap-6 lg:gap-12">
    <NuxtLinkLocale v-for="key in categoryKeys" :href="'/browse/' + key"
      class="el-link text-center rounded-sm px-4 py-8 transition-colors border hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-400">
      <div class="inline-block p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
        <Icon :name="categories[key]" size="24" />
      </div>
      <h3 class="font-semibold lg:text-lg">{{ $t('category.' + key) }}</h3>
    </NuxtLinkLocale>
  </div>

  <div class="text-center mb-40">
    <CoreButton href="/browse" class="inline-flex items-center">
      <span>{{ $t('landing.view-all') }}</span>
      <Icon name="uil:arrow-right" class="ml-2" size="24" />
    </CoreButton>
  </div>
</template>

<script setup lang="ts">
const { data } = await useProductFieldQuery('categories')
const flatCategories = data.value?.map(({ categories }) => categories).flat() as string[]
const weighedCategories = countElements(flatCategories)
const categoryKeys = Object.keys(weighedCategories).sort((a, b) => weighedCategories[b] - weighedCategories[a]).slice(0, 8) as CategoryType[]
</script>
