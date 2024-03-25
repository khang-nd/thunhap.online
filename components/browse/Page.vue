<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ title }}</template>
      <template v-slot:desc>Danh sách các sản phẩm online thành công</template>
    </LandingSectionhead>
    <div class="mt-10 items-start md:mt-16 lg:flex">
      <aside class="hidden lg:block max-w-64 shrink-0 mr-6">
        <BrowseFilters />
      </aside>
      <CoreDialog title="Lọc kết quả" v-model:open="openFilterModal">
        <template #trigger>
          <CoreButton class="mb-6 flex items-center space-x-2 lg:hidden" style-name="outline">
            <Icon name="uil:sliders-v-alt" />
            <span>Lọc kết quả</span>
          </CoreButton>
        </template>
        <template #close>
          <button
            class="text-gray-500 absolute top-4 right-4 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full transition-all hover:bg-gray-200 hover:text-black">
            <Icon name="uil:times" size="20" />
          </button>
        </template>
        <div class="px-6">
          <BrowseFilters />
        </div>
      </CoreDialog>
      <BrowseProducts />
    </div>
  </LandingContainer>
</template>

<script setup lang="ts">
const { category } = useRoute().params
const title = category ? categories[category as CategoryType] : "Khám phá"
const openFilterModal = ref(false);

useHead({ title })

onMounted(() => {
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      openFilterModal.value = false;
    }
  });
});
</script>
