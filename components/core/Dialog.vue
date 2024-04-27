<template>
  <DialogRoot @update:open="$emit('update:open', $event)">
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <CoreTransition name="fade">
        <DialogOverlay class="bg-black bg-opacity-70 fixed inset-0 z-30 backdrop-blur-sm" />
      </CoreTransition>
      <CoreTransition name="zoom">
        <DialogContent :aria-describedby="undefined"
          :class="twMerge('fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-neutral-950 focus:outline-none z-[100] rounded-md overflow-hidden', contentClass)">
          <DialogClose aria-label="Close" as-child>
            <slot name="close" />
          </DialogClose>
          <VisuallyHidden as-child>
            <DialogTitle>{{ title }}</DialogTitle>
          </VisuallyHidden>
          <slot />
        </DialogContent>
      </CoreTransition>
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
