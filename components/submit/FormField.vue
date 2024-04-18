<template>
  <component :is="as" class="block mb-6">
    <span class="block mb-3 font-medium text-lg">{{ title }}</span>
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  as?: 'label' | 'div'
}>(), {
  as: 'div'
})
</script>
