<template>
  <component :is="as" class="text-center">
    <h1 class="text-9xl font-bold mb-6">
      <slot />
    </h1>
    <CoreParagraph class="mb-6">Oopsie! Trang này không tồn tại.</CoreParagraph>
    <CoreButton href="/">Về trang chủ</CoreButton>
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  as: 'div' | 'main'
}>(), {
  as: 'div'
})
</script>
