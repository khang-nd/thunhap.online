<template>
  <div class="w-full">
    <div class="flex items-center justify-between mb-4">
      <ClientOnly>
        <div class="hidden sm:block text-gray-500">
          {{ $t('common.showing-results', { range, total }) }}
        </div>
        <template #fallback>
          <div><!-- TODO: skeleton --></div>
        </template>
      </ClientOnly>
      <div class="flex items-stretch">
        <!-- TODO: view mode -->
        <!-- <CoreToggleGroup v-model="viewMode" :items="viewOptions" class="mr-3" /> -->
        <CoreButton variant="custom" class="el-outline border rounded-r-none px-3" @click="toggleSortDir">
          <span class="w-5 h-5 block">
            <Icon :name="sortDir === 'desc' ? 'uil:sort-amount-down' : 'uil:sort-amount-up'" size="20" />
          </span>
        </CoreButton>
        <CoreSelect v-model="sortMode" :options="sortOptions" class="rounded-l-none"
          @update:model-value="handleSortMode" />
      </div>
    </div>
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
import type { QueryBuilderParams, SortOptions } from '@nuxt/content/dist/runtime/types';
import type { Filter } from './Filters.vue';

type SortDir = 'asc' | 'desc'
type SortMode = 'publish-date' | 'revenue' | 'alphabetical'
type ViewMode = 'grid' | 'list'
type Settings = 'page' | 'sortdir' | 'sortmode' | 'viewmode'
type QueryParams = Record<Filter | Settings, any>

const initial = {
  page: 1,
  sortdir: 'desc' as SortDir,
  sortmode: 'publish-date' as SortMode,
  viewmode: 'grid' as ViewMode,
}
const { locale, t } = useI18n()
const route = useRoute()
const query = ref<QueryBuilderParams>()
const total = ref(0);
const page = ref(initial.page);
const sortDir = ref<SortDir>(initial.sortdir)
const sortMode = ref(initial.sortmode)
const viewMode = ref(initial.viewmode)
const pageSize = 15
const sortOptions: SortMode[] = ['publish-date', 'revenue', 'alphabetical']
const viewOptions = [
  { value: 'grid', label: t('common.grid-view'), icon: 'akar-icons:grid' },
  { value: 'list', label: t('common.list-view'), icon: 'akar-icons:text-align-justified' },
]
const range = computed(() => {
  const start = pageSize * (page.value - 1) + 1
  const end = Math.min(pageSize * page.value, total.value)
  return start + '-' + end
})

const handlePaging = (page: number) => pushQuery<Settings>('page', page)

const handleSortMode = (mode: string) => pushQuery<Settings>('sortmode', mode)

const toggleSortDir = () => {
  sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  pushQuery<Settings>('sortdir', sortDir.value)
}

const mapSortMode = (mode: SortMode): SortOptions[] => {
  const direction = sortDir.value === 'asc' ? 1 : -1
  if (mode === 'revenue') return [{ revenue: direction, $numeric: true }]
  if (mode === 'publish-date') return [{ publishedAt: direction }]
  if (mode === 'alphabetical') return [{ title: direction }]
  return []
}

watch([() => route.query as QueryParams, locale], async ([routeQuery, currentLocale]) => {
  const revenueRange = (routeQuery.revenue as string)?.split('-').map(Number)
  const status = (routeQuery.status as string)?.split(',')
  const models = (routeQuery.models as string)?.split(',')
  const tags = (routeQuery.tags as string)?.split(',')

  page.value = Number(routeQuery.page) || initial.page
  sortDir.value = routeQuery.sortdir || initial.sortdir
  sortMode.value = routeQuery.sortmode || initial.sortmode
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
    sort: mapSortMode(sortMode.value),
  }
  total.value = (await useProductCountQuery(query.value)).data.value || 0
}, { immediate: true })
</script>
