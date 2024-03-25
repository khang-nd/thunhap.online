<template>
  <component :is="as" class="w-full px-6 xl:px-0 mb-16">
    <div class="max-w-screen-md h-full mx-auto">
      <slot />
    </div>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  as?: 'div' | 'article' | 'aside'
}>(), { as: 'div' })
</script>
