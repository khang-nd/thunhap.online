<template>
  <DialogRoot>
    <DialogTrigger as-child>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="bg-black opacity-50 fixed inset-0 z-30" />
      <DialogContent
        class="fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 bg-white px-6 focus:outline-none z-[100] overflow-auto pt-4">
        <DialogClose
          class="text-gray-500 absolute top-4 right-4 inline-flex h-6 w-6 appearance-none items-center justify-center rounded-full transition-all hover:bg-gray-200 hover:text-black"
          aria-label="Close">
          <Icon name="uil:times" size="20" />
        </DialogClose>
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
  DialogTrigger,
  DialogClose,
} from 'radix-vue';
</script>
