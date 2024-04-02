<template>
  <LayoutContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ $t('common.browse') }}</template>
      <template v-slot:desc>{{ categoryTitle
        ? $t('common.browse-category', { category: categoryTitle })
        : $t('common.browse-online') }}</template>
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
const { category } = useRoute().params
const categoryTitle = computed(() => category ? t('category.' + category) : t('common.browse'))
const openFilterModal = ref(false);

useHead({ title: categoryTitle })

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      openFilterModal.value = false;
    }
  });
});
</script>
