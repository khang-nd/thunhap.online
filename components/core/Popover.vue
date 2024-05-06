<template>
  <PopoverRoot>
    <PopoverTrigger as-child>
      <slot name="trigger" />
    </PopoverTrigger>
    <PopoverPortal>
      <PopoverContent side="bottom" :side-offset="4"
        class="bg-white dark:bg-neutral-950 p-2 rounded border dark:border-gray-600 shadow-md relative data-[state=open]:animate-[popIn_200ms_ease] z-50">
        <slot />
      </PopoverContent>
    </PopoverPortal>
  </PopoverRoot>
</template>

<script setup lang="ts">
import {
  PopoverContent,
  PopoverPortal,
  PopoverRoot,
  PopoverTrigger
} from 'radix-vue'
</script>
