<template>
  <SelectRoot v-model="mutableValue" @update:model-value="$emit('update:modelValue', $event)">
    <SelectTrigger
      :class="twMerge('el-outline min-w-44 flex items-center p-2 rounded text-left', $attrs.class as string)">
      <SelectValue class="w-full" />
      <Icon name="uil:angle-down" size="24" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent class="bg-white p-1 rounded border shadow-md data-[state=open]:animate-[popIn_200ms_ease]">
        <SelectViewport>
          <SelectItem v-for="(option, index) in options" :key="index" :value="option"
            class="relative p-1 pl-6 cursor-default transition-colors hover:bg-gray-200 outline-none">
            <SelectItemIndicator class="absolute left-1 top-1/2 -translate-y-1/2">
              <Icon name="uil:check" />
            </SelectItemIndicator>
            <SelectItemText>
              {{ $t('common.' + option) }}
            </SelectItemText>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script setup lang="ts">
import {
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  type SelectRootEmits,
  type SelectRootProps,
} from 'radix-vue';
import { twMerge } from 'tailwind-merge';

defineOptions({
  inheritAttrs: false
})
defineEmits<SelectRootEmits>()
const props = defineProps<SelectRootProps & { options: string[] }>()
const mutableValue = ref<string | undefined>()
watch(() => props.modelValue, (val) => mutableValue.value = val, { immediate: true })
</script>

<style>
@keyframes popIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
