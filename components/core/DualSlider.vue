<template>
  <SliderRoot v-model="innerValues" :step="500" :min-steps-between-thumbs="1"
    class="relative flex items-center select-none touch-none my-8">
    <SliderTrack class="bg-gray-200 relative grow rounded-full h-1.5 cursor-pointer">
      <SliderRange class="absolute bg-black rounded-full h-full transition" />
    </SliderTrack>
    <SliderThumb
      class="relative block w-4 h-4 bg-white rounded-full shadow-[0_0_3px_0] cursor-grab transition-shadow focus:outline-none focus:shadow-[0_0_1px_2px]">
      <span
        class="bg-black p-1 rounded-md text-white text-xs absolute left-1/2 bottom-[calc(100%+4px)] -translate-x-1/2">
        {{ formatValue(0) }}
      </span>
    </SliderThumb>
    <SliderThumb
      class="relative block w-4 h-4 bg-white rounded-full shadow-[0_0_3px_0] cursor-grab transition-shadow focus:outline-none focus:shadow-[0_0_1px_2px]">
      <span
        class="bg-black p-1 rounded-md text-white text-xs absolute left-1/2 bottom-[calc(100%+4px)] -translate-x-1/2">
        {{ formatValue(1) }}
      </span>
    </SliderThumb>
  </SliderRoot>
</template>

<script setup lang="ts">
import { SliderRange, SliderRoot, SliderThumb, SliderTrack } from 'radix-vue'

const props = defineProps<{
  values: number[]
  format: {
    prefix: string
    thousand: string
  }
}>()

const innerValues = ref(props.values)

const formatValue = (index: number) => formatPrice(innerValues.value[index], 'en', props.format)

watch(() => props.values, (values) => innerValues.value = values)
</script>
