<template>
  <component :is="as" class="w-full px-5 mb-16">
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  as?: 'div' | 'article' | 'aside'
}>(), { as: 'div' })
</script>
