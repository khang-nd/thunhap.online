<template>
  <main class="w-full">
    <ContentList :query="query" path="/product">
      <template v-slot="{ list }">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <BrowseProductCard v-for="product in list" :key="product._path" :product="product" />
        </div>
      </template>
      <template #not-found>
        <CoreParagraph class="w-full text-center italic text-base py-10">
          Không tìm thấy sản phẩm nào
        </CoreParagraph>
      </template>
    </ContentList>
  </main>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const route = useRoute()
const query = ref<QueryBuilderParams>()

watch(() => route.query, () => {
  const revenueRange = (route.query.revenue as string)?.split('-').map(Number)
  const status = (route.query.status as string)?.split(',')
  const models = (route.query.models as string)?.split(',')
  const tags = (route.query.tags as string)?.split(',')
  query.value = {
    where: [
      { categories: { $contains: route.params.category } },
      revenueRange && { revenue: { $gte: revenueRange[0], $lte: revenueRange[1] } },
      status && { status: { $in: status } },
      models && { models: { $in: models } },
      tags && { hashtags: { $in: tags } },
    ].filter(Boolean),
    limit: 18,
    sort: [{}]
  }
}, { immediate: true })
</script>
