<template>
  <CoreDialog title="Tìm kiếm" content-class="max-w-[1280px] max-h-[1280px] h-[90vh] p-4 bg-[#F3F4EF]"
    @update:open="resetLoading">
    <template #trigger>
      <CoreButton variant="custom" :aria-label="$t('common.analytics')"
        class="p-2 text-gray-500 hover:text-black">
        <Icon name="uil:chart-line" size="20" />
      </CoreButton>
    </template>
    <iframe width="100%" height="100%" frameborder="0" allowfullscreen @load="loading = false"
      src="https://us.posthog.com/embedded/r5QvvC-e3Ad2e1GooA6Y0CKJmpnCig"></iframe>

    <div v-if="loading" class="absolute top-4 left-4 bottom-4 right-4">
      <CoreSkeleton class="w-28 h-7 mb-2" />
      <CoreSkeleton class="w-44 mb-4" />
      <div class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mr-2 mb-4">
        <CoreSkeleton class="w-full h-[460px] lg:w-1/4 lg:h-[270px]" />
        <CoreSkeleton class="w-full h-[460px] lg:w-1/4 lg:h-[270px]" />
        <CoreSkeleton class="w-full h-[460px] lg:w-1/4 lg:h-[270px]" />
        <CoreSkeleton class="w-full h-[460px] lg:w-1/4 lg:h-[270px]" />
      </div>
      <div class="flex space-x-4 mr-2">
        <CoreSkeleton class="w-1/2 h-96" />
        <CoreSkeleton class="w-1/2 h-96" />
      </div>
    </div>
  </CoreDialog>
</template>

<script setup lang="ts">
const loading = ref(true)

const resetLoading = (dialogOpen: boolean) => {
  !dialogOpen && (loading.value = true)
}
</script>
