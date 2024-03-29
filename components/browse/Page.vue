<template>
  <LayoutContainer>
    <LandingSectionhead>
      <template v-slot:title>Khám phá</template>
      <template v-slot:desc>Danh sách các sản phẩm
        <strong v-if="categoryTitle">{{ categoryTitle }}</strong>
        <template v-else>online</template>
        thành công</template>
    </LandingSectionhead>
    <div class="mt-10 md:mt-16 lg:flex">
      <aside class="hidden lg:block max-w-64 shrink-0 mr-6">
        <BrowseFilters />
      </aside>
      <CoreDialog title="Lọc kết quả" v-model:open="openFilterModal">
        <template #trigger>
          <CoreButton class="mb-6 flex items-center space-x-2 lg:hidden" variant="outline">
            <Icon name="uil:sliders-v-alt" />
            <span>Lọc kết quả</span>
          </CoreButton>
        </template>
        <template #close>
          <button
            class="text-gray-500 absolute top-3 right-6 p-1 inline-flex appearance-none items-center justify-center rounded-full transition-all hover:bg-gray-100 hover:text-black">
            <Icon name="uil:times" size="24" />
          </button>
        </template>
        <div class="px-6 max-h-[80vh] overflow-auto">
          <BrowseFilters is-mobile/>
        </div>
      </CoreDialog>
      <BrowseProducts />
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
const { category } = useRoute().params
const categoryTitle = categories[category as CategoryType]?.title
const openFilterModal = ref(false);

useHead({ title: categoryTitle || "Khám phá" })

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      openFilterModal.value = false;
    }
  });
});
</script>
