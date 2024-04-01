<template>
  <ToggleGroupRoot v-bind="$props" @update:model-value="$emit('update:modelValue', $event)" class="flex">
    <ToggleGroupItem v-for="({ label, ...props }) in items" v-bind="props" class="toggle-group-item">
      {{ label }}
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

defineProps<ToggleGroupRootProps & { items: (ToggleGroupItemProps & { label: string })[] }>()
defineEmits<ToggleGroupRootEmits>()
</script>
