<template>
  <div class="flex items-center space-x-2 text-sm text-gray-500 cursor-default">
    <Icon name="uil:clock" size="20" />
    <CoreTooltip>
      <template #trigger>
        <span>{{ refined.date }}</span>
      </template>
      {{ $t('common.publish-date') }}
    </CoreTooltip>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const props = defineProps<{
  timestamp: number
}>()

const refined = computed(() => {
  const date = new Date(props.timestamp)
  return {
    date: date.toLocaleDateString(locale.value),
    time: date.toLocaleTimeString(locale.value)
  }
})
</script>
