<template>
  <div class="w-full">
    <ContentList :query="query" path="/product">
      <template v-slot="{ list }">
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          <BrowseProductCard v-for="product in list" :key="product._path" :product="product" />
        </div>
        <CorePagination v-if="total > pageSize" :total="total" :items-per-page="pageSize" :page="page"
          @update:page="handlePaging" />
      </template>
      <template #not-found>
        <CoreParagraph class="text-center italic text-base py-10">
          {{ $t('common.no-result') }}
        </CoreParagraph>
      </template>
    </ContentList>
  </div>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types';

const { locale } = useI18n()
const route = useRoute()
const router = useRouter()
const query = ref<QueryBuilderParams>()
const total = ref(0);
const page = ref(1);
const pageSize = 15

const handlePaging = (page: number) => {
  router.push({ query: { ...route.query, page } })
}

watch([() => route.query, locale], async ([routeQuery, currentLocale]) => {
  const revenueRange = (routeQuery.revenue as string)?.split('-').map(Number)
  const status = (routeQuery.status as string)?.split(',')
  const models = (routeQuery.models as string)?.split(',')
  const tags = (routeQuery.tags as string)?.split(',')

  page.value = Number(routeQuery.page) || 1
  query.value = {
    where: [
      { _locale: currentLocale },
      { categories: { $contains: route.params.category } },
      revenueRange && { revenue: { $gte: revenueRange[0], $lte: revenueRange[1] } },
      status && { status: { $in: status } },
      models && { models: { $in: models } },
      tags && { hashtags: { $in: tags } },
    ].filter(Boolean),
    skip: (page.value - 1) * pageSize,
    limit: pageSize,
    without: ['body', 'hashtags'],
    sort: [{ publishedAt: -1 }]
  }
  total.value = (await useProductCountQuery(query.value)).data.value || 0
}, { immediate: true })
</script>
