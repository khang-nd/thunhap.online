<template>
  <ToggleGroupRoot v-bind="$props" @update:model-value="$emit('update:modelValue', $event)" class="flex">
    <ToggleGroupItem v-for="({ label, icon, ...props }) in items" v-bind="props" :aria-label="label"
      class="el-group-item">
      <Icon v-if="icon" :name="icon" size="20" />
      <template v-else>{{ label }}</template>
    </ToggleGroupItem>
  </ToggleGroupRoot>
</template>

<script setup lang="ts">
import {
  ToggleGroupItem,
  ToggleGroupRoot,
  type ToggleGroupItemProps,
  type ToggleGroupRootEmits,
  type ToggleGroupRootProps,
} from 'radix-vue'

const props = defineProps<ToggleGroupRootProps & { items: (ToggleGroupItemProps & { label: string, icon?: string })[] }>()
const emit = defineEmits<ToggleGroupRootEmits>()
const cache = ref(props.modelValue)

watch(() => props.modelValue, (value) => {
  if (!value) emit('update:modelValue', cache.value as string)
  else cache.value = value
}, { immediate: true })
</script>
