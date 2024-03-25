<template>
  <DialogRoot>
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-black opacity-50 fixed inset-0 z-30" />
      <DialogContent :aria-describedby="undefined"
        class="fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 bg-white focus:outline-none z-[100] overflow-auto rounded-md">
        <DialogClose aria-label="Close" as-child>
          <slot name="close" />
        </DialogClose>
        <VisuallyHidden as-child>
          <DialogTitle>{{ title }}</DialogTitle>
        </VisuallyHidden>
        <slot />
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
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
  portal?: string | HTMLElement
}>();
</script>
