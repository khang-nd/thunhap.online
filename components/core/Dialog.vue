<template>
  <DialogRoot @update:open="$emit('update:open', $event)">
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <Transition name="fade">
        <DialogOverlay class="bg-black bg-opacity-70 fixed inset-0 z-30 backdrop-blur-sm" />
      </Transition>
      <Transition name="zoom">
        <DialogContent :aria-describedby="undefined"
          :class="twMerge('fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 bg-white focus:outline-none z-[100] rounded-md overflow-hidden', contentClass)">
          <DialogClose aria-label="Close" as-child>
            <slot name="close" />
          </DialogClose>
          <VisuallyHidden as-child>
            <DialogTitle>{{ title }}</DialogTitle>
          </VisuallyHidden>
          <slot />
        </DialogContent>
      </Transition>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
import {
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  VisuallyHidden,
} from 'radix-vue';

defineProps<{
  title: string,
  portal?: string | HTMLElement,
  contentClass?: string,
}>();

defineEmits<{
  (e: 'update:open', arg: boolean): void
}>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform 0.2s;
}

.zoom-enter-from,
.zoom-leave-to {
  transform: translate(-50%, -50%) scale(0.9);
}
</style>
