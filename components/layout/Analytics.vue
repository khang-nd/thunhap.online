<template>
  <CoreDialog title="Tìm kiếm" content-class="max-w-[1280px] max-h-[1280px] h-[90vh] p-4 bg-[#F3F4EF]">
    <template #trigger>
      <CoreButton variant="custom" class="flex w-full p-2 text-gray-500 hover:text-black lg:px-3">
        {{ $t('common.analytics') }}
      </CoreButton>
    </template>
    <iframe width="100%" height="100%" frameborder="0" allowfullscreen
      src="https://us.posthog.com/embedded/r5QvvC-e3Ad2e1GooA6Y0CKJmpnCig"></iframe>
  </CoreDialog>
</template>

<script setup lang="ts">
</script>
