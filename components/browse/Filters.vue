<template>
  <BrowseFilterGroup :title="$t('common.categories')" class="pt-4 lg:pt-0">
    <ul>
      <li v-for="key in sortedCategories" :key="key">
        <NuxtLinkLocale :to="{ path: isActive(key) ? '/browse' : `/browse/${key}`, query: getQuery() }"
          :class="['flex items-center py-1 space-x-2 transition-colors hover:text-black dark:hover:text-white', isActive(key) ? 'text-black dark:text-white font-semibold' : 'text-gray-500 dark:text-gray-400']">
          <Icon :name="categories[key as CategoryType].icon" size="20" />
          <span>{{ $t('category.' + key) }}</span>
        </NuxtLinkLocale>
      </li>
    </ul>
  </BrowseFilterGroup>
  <BrowseFilterGroup :title="$t('common.revenue')">
    <CoreDualSlider :values="selected.revenue.value as number[]" :format='{ prefix: "$", thousand: "," }' :min="0"
      :max="100000" :step="500" @value-commit="handleSlider" />
  </BrowseFilterGroup>
  <BrowseFilterGroup :title="$t('common.status')">
    <ul>
      <li v-for="key in status" :key="key">
        <CoreCheckbox :id="prefix(key)" :value="key" name="status" :checked="selected.status.value.includes(key)"
          @change="handleCheckbox">{{ $t('common.status-types.' + key) }}</CoreCheckbox>
      </li>
    </ul>
  </BrowseFilterGroup>
  <BrowseFilterGroup :title="$t('common.revenue-models')">
    <ul>
      <li v-for="key in revenueModels" :key="key">
        <CoreCheckbox :id="prefix(key)" :value="key" name="models" :checked="selected.models.value.includes(key)"
          @change="handleCheckbox">{{ $t('common.revenue-model-types.' + key) }}</CoreCheckbox>
      </li>
    </ul>
  </BrowseFilterGroup>
  <BrowseFilterGroup :title="$t('common.tags')">
    <CoreToggle v-for="tag in tags" :key="tag" :value="tag" class="mr-1 mb-1"
      :pressed="selected.tags.value.includes(tag)" @change="handleToggle">
      {{ tag }}
    </CoreToggle>
  </BrowseFilterGroup>
  <CoreButton v-if="showReset" href="/browse" variant="outline" class="block w-full sticky bottom-4">
    {{ $t('common.reset') }}
  </CoreButton>
</template>

<script setup lang="ts">
export type Filter = 'revenue' | 'status' | 'models' | 'tags'

const { t } = useI18n()
const { isMobile } = defineProps<{ isMobile?: boolean }>()
const route = useRoute()
const router = useRouter();
const { data } = await useProductFieldQuery('hashtags')
const initial: Record<Filter, () => (string | number)[]> = {
  revenue: () => (route.query.revenue as string)?.split('-').map(Number) || [0, 100000],
  status: () => (route.query.status as string)?.split(',') || [],
  models: () => (route.query.models as string)?.split(',') || [],
  tags: () => (route.query.tags as string)?.split(',') || [],
}
const selected: Record<Filter, Ref<(string | number)[]>> = {
  revenue: ref(initial.revenue()),
  status: ref(initial.status()),
  models: ref(initial.models()),
  tags: ref(initial.tags()),
}
const allTags = data.value?.reduce((acc: string[], product) => [...acc, ...product.hashtags], [])
const tags = Array.from(new Set(allTags))
const sortedCategories = Object.keys(categories).sort((c1, c2) => t(`category.${c1}`).localeCompare(t(`category.${c2}`)))

const prefix = (id: string) => `${isMobile ? 'm' : 'd'}-${id}`

const isActive = (category: string) => route.params.category === category

const getQuery = () => ({ ...route.query, page: undefined })

const handleSlider = (values: number[]) => {
  pushQuery<Filter>('revenue', values.join('-'))
}

const handleCheckbox = (e: Event) => {
  const target = e.target as HTMLInputElement
  const field = target.name as Filter;
  if (target.checked) {
    selected[field].value = [...selected[field].value, target.value]
  } else {
    selected[field].value = selected[field].value.filter((value) => value !== target.value)
  }
  const result = selected[field].value.join(',')
  pushQuery(field, result)
}

const handleToggle = (e: { value: string, pressed: boolean }) => {
  const { value, pressed } = e
  if (pressed) {
    selected.tags.value = [...selected.tags.value, value]
  } else {
    selected.tags.value = selected.tags.value.filter((tag) => tag !== value)
  }
  const result = selected.tags.value.join(',')
  pushQuery<Filter>('tags', result)
}

const showReset = computed(() => !route.path.endsWith('/browse') || Object.keys(route.query).length > 0)

watch(() => route.query, () => {
  Object.keys(selected).forEach((key) => {
    const field = key as keyof typeof selected
    if (!route.query[field]) {
      selected[field].value = initial[field]()
    }
  })
})
</script>
