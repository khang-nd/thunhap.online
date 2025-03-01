<template>
  <CoreHeading v-if="products.length > 0" as="h3" class="mb-4 font-bold">{{ $t('common.similar-products') }}
  </CoreHeading>
  <NuxtLinkLocale v-for="similarProduct in products" :href="similarProduct._path"
    class="flex lg:flex-col p-3 mb-3 rounded-md overflow-hidden transition-colors border dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-400">
    <div v-if="similarProduct.image" class="w-32 h-24 shrink-0 mr-3 hidden sm:block lg:hidden">
      <img :src="similarProduct.image.src" :alt="similarProduct.image.alt" class="w-full h-full object-cover" />
    </div>
    <div>
      <div class="font-medium mb-1 dark:text-white">{{ similarProduct.title }}</div>
      <div class="text-slate-600 dark:text-gray-400 mb-2">{{ similarProduct.description }}</div>
      <div>
        <CoreBadge class="text-xs">{{ $t('category.' + toArray(similarProduct.categories)[0]) }}</CoreBadge>
        <CoreBadge class="text-xs">{{ $t('common.revenue-model-types.' + toArray(similarProduct.models)[0]) }}
        </CoreBadge>
      </div>
    </div>
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
import type { QueryBuilderWhere } from '@nuxt/content/types';

const { locale } = useI18n()
const { product } = defineProps<{
  product: ParsedProduct
}>()
const query: QueryBuilderWhere = {
  _locale: { $eq: locale.value },
  $and: [
    { categories: { $in: toArray(product.categories) }, },
    { models: { $in: toArray(product.models) }, },
  ]
}

const { data } = await useContentQuery(
  'similarProducts',
  queryContent('product')
    .where(query)
    .without(['body'])
    .sort({ publishedAt: 1 })
    .limit(4)
    .find()
)
const products = data.value?.filter((p) => p._id !== product._id) as ParsedProduct[]
</script>
