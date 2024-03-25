<template>
  <BrowseFilterGroup title="Phân loại" class="pt-4 lg:pt-0">
    <ul>
      <li v-for="(text, category) in categories" :key="category">
        <NuxtLink :to="{ path: isActive(category) ? '/browse' : `/browse/${category}`, query: $route.query }"
          :class="['flex items-center py-1 space-x-2 transition-colors hover:text-black', isActive(category) ? 'text-black font-semibold' : 'text-gray-500']">
          <Icon :name="categoryIcon[category]" size="20" />
          <span>{{ text }}</span>
        </NuxtLink>
      </li>
    </ul>
  </BrowseFilterGroup>
  <BrowseFilterGroup title="Doanh thu">
    <CoreDualSlider :values="selected.revenue.value" :format='{ prefix: "$", thousand: "," }' :min="0" :max="100000"
      :step="500" @value-commit="handleSlider" />
  </BrowseFilterGroup>
  <BrowseFilterGroup title="Tình trạng">
    <ul>
      <li v-for="(state, key) in status" :key="key">
        <CoreCheckbox :id="key" :value="key" name="status" :checked="selected.status.value.includes(key)"
          @change="handleCheckbox">{{ state }}</CoreCheckbox>
      </li>
    </ul>
  </BrowseFilterGroup>
  <BrowseFilterGroup title="Mô hình thu nhập">
    <ul>
      <li v-for="(model, key) in revenueModels" :key="key">
        <CoreCheckbox :id="key" :value="key" name="models" :checked="selected.models.value.includes(key)"
          @change="handleCheckbox">{{ model }}</CoreCheckbox>
      </li>
    </ul>
  </BrowseFilterGroup>
  <BrowseFilterGroup title="Được gắn thẻ">
    <CoreToggle v-for="tag in tags" :key="tag" :value="tag" class="mr-1 mb-1"
      :pressed="selected.tags.value.includes(tag)" @change="handleToggle">
      {{ tag }}
    </CoreToggle>
  </BrowseFilterGroup>
  <CoreButton v-if="showReset" href="/browse" style-name="outline" class="block w-full sticky bottom-4">
    Reset
  </CoreButton>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter();
const { data } = await useAsyncData('product', () => queryContent('/').find())
const initial = {
  revenue: () => (route.query.revenue as string)?.split('-').map(Number) || [0, 100000],
  status: () => (route.query.status as string)?.split(',') || [],
  models: () => (route.query.models as string)?.split(',') || [],
  tags: () => (route.query.tags as string)?.split(',') || [],
}
const selected = {
  revenue: ref(initial.revenue()),
  status: ref(initial.status()),
  models: ref(initial.models()),
  tags: ref(initial.tags()),
}
const allTags = data.value?.reduce((acc: string[], product) => [...acc, ...product.hashtags], [])
const tags = Array.from(new Set(allTags))

const isActive = (category: string) => route.params.category === category

const handleSlider = (values: number[]) => {
  router.push({ query: { ...route.query, revenue: values.join('-') } })
}

const handleCheckbox = (e: Event) => {
  const target = e.target as HTMLInputElement
  const field = target.name as 'status' | 'models';
  if (target.checked) {
    selected[field].value = [...selected[field].value, target.value]
  } else {
    selected[field].value = selected[field].value.filter((value) => value !== target.value)
  }
  const result = selected[field].value.join(',')
  router.push({ query: { ...route.query, [target.name]: result || null } })
}

const handleToggle = (e: { value: string, pressed: boolean }) => {
  const { value, pressed } = e
  if (pressed) {
    selected.tags.value = [...selected.tags.value, value]
  } else {
    selected.tags.value = selected.tags.value.filter((tag) => tag !== value)
  }
  const result = selected.tags.value.join(',')
  router.push({ query: { ...route.query, tags: result || null } })
}

const showReset = computed(() => route.path !== '/browse' || Object.keys(route.query).length > 0)

watch(() => route.query, () => {
  Object.keys(selected).forEach((key) => {
    const field = key as keyof typeof selected
    if (!route.query[field]) {
      selected[field].value = initial[field]()
    }
  })
})
</script>
