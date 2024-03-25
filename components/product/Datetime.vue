<template>
  <div class="flex items-center space-x-2 text-sm text-gray-500">
    <Icon name="uil:clock" size="20" />
    <span>{{ refined.date }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  timestamp: number
}>()

const refined = computed(() => {
  const date = new Date(props.timestamp)
  return {
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString()
  }
})
</script>
