<template>
    <Toggle v-model:pressed="isActive" @update:pressed="$emit('change', { value, pressed: isActive })"
        class="bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:data-[state=on]:text-white border border-transparent px-3 py-1 rounded-full transition-all data-[state=on]:bg-gray-300 dark:data-[state=on]:bg-gray-700 data-[state=on]:border-gray-400">
        <slot />
    </Toggle>
</template>

<script setup lang="ts">
import { Toggle } from 'radix-vue'

const props = defineProps<{
    value: string,
    pressed?: boolean
}>()

defineEmits<{
    (event: 'change', e: { value: string, pressed: boolean }): void
}>()

const isActive = ref(props.pressed);

watch(() => props.pressed, (value) => isActive.value = value)
</script>
