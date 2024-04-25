<template>
  <Transition :name="name">
    <slot />
  </Transition>
</template>

<script setup lang="ts">
import { Transition } from 'vue'

defineProps<{
  name: 'fade' | 'zoom' | 'fade-down',
  duration?: number
}>()
</script>

<style scoped>
/* Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Zoom */
.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.2s;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: translate(-50%, -50%) scale(0.9);
}
</style>
