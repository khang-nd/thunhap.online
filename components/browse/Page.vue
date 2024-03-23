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
      <CoreDialog>
        <template #trigger>
          <CoreButton class="mb-6 flex items-center space-x-2 lg:hidden" style-name="outline">
            <Icon name="uil:sliders-v-alt" />
            <span>Lọc kết quả</span>
          </CoreButton>
        </template>
        <BrowseFilters />
      </CoreDialog>
      <BrowseProducts />
    </div>
  </LandingContainer>
</template>

<script setup lang="ts">
const title = "Khám phá";
useHead({ title })
</script>
