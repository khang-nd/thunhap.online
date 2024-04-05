<template>
  <h2 class="text-4xl lg:text-5xl text-center font-bold lg:tracking-tight mb-16">
    {{ $t('landing.new-products-title') }}
  </h2>

  <LazyContentList path="/product" :query="query" v-slot="{ list }">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <BrowseProductCard v-for="product in list" :key="product._path" :product="product" />
    </div>
  </LazyContentList>

  <div class="text-center mb-40">
    <CoreButton href="/browse" class="inline-flex items-center">
      <span>{{ $t('landing.view-all') }}</span>
      <Icon name="uil:arrow-right" class="ml-2" size="24" />
    </CoreButton>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const query = computed(() => ({
  where: [{ _locale: locale.value }],
  without: ['body', 'hashtags'],
  limit: 4,
  sort: [{ publishedAt: -1 }]
}))
</script>
