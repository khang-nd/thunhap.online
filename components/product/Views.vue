<template>
  <CoreTooltip>
    <template #trigger>
      <span class="inline-flex items-center space-x-2 text-sm text-gray-500 cursor-default">
        <template v-if="pending">
          <CoreSkeleton class="w-5 rounded-full" />
          <CoreSkeleton class="w-12" />
        </template>
        <template v-else>
          <Icon name="uil:eye" size="20" />
          <span>{{ viewCount?.result }}</span>
        </template>
      </span>
    </template>
    {{ $t('common.views') }}
  </CoreTooltip>
</template>

<script setup lang="ts">
const { path } = useRoute()
const { data: viewCount, pending } = await computed(() => useLazyFetch(`/api/analytics/pageviews?page=${path}`)).value
</script>
