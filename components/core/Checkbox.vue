<template>
  <div class="inline-flex items-center space-x-2 mb-2">
    <label class="relative flex items-center cursor-pointer" :for="id">
      <input type="checkbox" :id="id" :value="value" :name="name" :checked="checked"
        class="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-400 transition-colors checked:border-gray-900 checked:bg-gray-900"
        @change="$emit('change', $event)" />
      <span
        class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
          stroke="currentColor" stroke-width="1">
          <path fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"></path>
        </svg>
      </span>
    </label>
    <label class="text-gray-600 cursor-pointer select-none" :for="id">
      <slot />
    </label>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  id: string,
  value: string | number,
  name?: string,
  checked?: boolean,
}>()

defineEmits<{
  (e: 'change', arg: Event): void
}>()
</script>
