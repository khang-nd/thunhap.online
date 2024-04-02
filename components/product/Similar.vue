<template>
  <CoreHeading v-if="products.length > 0" as="h3" class="mb-4">{{ $t('common.similar-products') }}</CoreHeading>
  <NuxtLink v-for="similarProduct in products" :href="similarProduct._path"
    class="flex lg:flex-col items-center p-3 mb-3 border rounded-md overflow-hidden transition-colors hover:border-gray-400">
    <div v-if="similarProduct.image" class="w-32 h-24 shrink-0 mr-3 hidden sm:block lg:hidden">
      <img :src="similarProduct.image.src" :alt="similarProduct.image.alt" class="w-full h-full object-cover" />
    </div>
    <div>
      <div class="font-medium mb-1">{{ similarProduct.title }}</div>
      <div class="text-slate-600 mb-2">{{ similarProduct.description }}</div>
      <div>
        <CoreBadge class="text-xs">{{ $t('category.' + toArray(similarProduct.categories)[0]) }}</CoreBadge>
        <CoreBadge class="text-xs">{{ $t('common.revenue-model-types.' + toArray(similarProduct.models)[0]) }}
        </CoreBadge>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { QueryBuilderWhere } from '@nuxt/content/types';

const { product } = defineProps<{
  product: ParsedProduct
}>()
const query: QueryBuilderWhere = {
  $and: [
    { categories: { $in: toArray(product.categories) }, },
    { models: { $in: toArray(product.models) }, },
  ]
}

const { data } = await useContentQuery(
  'similarProducts',
  queryContent('product')
    .where(query)
    .sort({ publishedAt: 1 })
    .limit(4)
    .find()
)
const products = data.value?.filter((p) => p._id !== product._id) as ParsedProduct[]
</script>
