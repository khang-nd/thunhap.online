<i18n lang="yaml">
  en:
    browse-online: A list of successful online businesses
    browse-category: A list of successful {category} businesses
    browse-status: A list of successful online businesses with {status} status
    browse-model: A list of successful online businesses with {model} revenue model
    browse-tag: A list of successful online businesses for {tag} tag
  vi:
    browse-online: Danh sách các sản phẩm online thành công
    browse-category: Danh sách các sản phẩm {category} thành công
    browse-status: Danh sách các sản phẩm online thành công có trạng thái {status}
    browse-model: Danh sách các sản phẩm online thành công có mô hình doanh thu {model}
    browse-tag: Danh sách các sản phẩm online thành công được gắn thẻ {tag}
</i18n>

<template>
  <LayoutContainer>
    <LandingSectionhead>
      <template #title>{{ $t('common.browse') }}</template>
      <template #desc>{{ description }}</template>
    </LandingSectionhead>
    <div class="mt-10 md:mt-16 lg:flex">
      <aside class="hidden lg:block max-w-64 shrink-0 mr-6">
        <BrowseFilters />
      </aside>
      <CoreDialog :title="$t('common.filters')" v-model:open="openFilterModal">
        <template #trigger>
          <CoreButton class="mb-6 flex items-center space-x-2 lg:hidden" variant="outline">
            <Icon name="uil:sliders-v-alt" />
            <span>{{ $t('common.filters') }}</span>
          </CoreButton>
        </template>
        <template #close>
          <button
            class="text-gray-500 absolute top-3 right-6 p-1 inline-flex appearance-none items-center justify-center rounded-full transition-all hover:bg-gray-100 hover:text-black">
            <Icon name="uil:times" size="24" />
          </button>
        </template>
        <div class="px-6 max-h-[80vh] overflow-auto">
          <BrowseFilters is-mobile />
        </div>
      </CoreDialog>
      <BrowseProducts />
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()
const { category, model, status, tag } = route.params
const categoryTitle = computed(() => category ? t('category.' + category) : null)
const modelTitle = computed(() => model ? t('common.revenue-model-types.' + model) : null)
const statusTitle = computed(() => status ? t('common.status-types.' + status) : null)
const description = computed(() =>
  categoryTitle.value && t('browse-category', { category: categoryTitle.value })
  || modelTitle.value && t('browse-model', { model: modelTitle.value })
  || statusTitle.value && t('browse-status', { status: statusTitle.value })
  || tag && t('browse-tag', { tag })
  || t('browse-online'))
const subtitle = computed(() => categoryTitle.value || modelTitle.value || statusTitle.value || tag as string)
const openFilterModal = ref(false);

useHead({ title: t('common.browse') + (subtitle.value ? ` - ${subtitle.value}` : '') })

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      openFilterModal.value = false;
    }
  });
});
</script>
