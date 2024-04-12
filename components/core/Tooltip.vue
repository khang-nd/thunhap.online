<template>
  <TooltipProvider :delay-duration="200">
    <TooltipRoot>
      <TooltipTrigger as-child>
        <slot name="trigger" />
      </TooltipTrigger>
      <TooltipPortal>
        <TooltipContent :side-offset="4"
          class="bg-black text-white px-2 py-1 rounded-md shadow-md data-[state=delayed-open]:animate-[zoomUp_100ms_ease-in]">
          <slot />
        </TooltipContent>
      </TooltipPortal>
    </TooltipRoot>
  </TooltipProvider>
</template>

<script setup lang="ts">
import {
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "radix-vue";
</script>

<style>
@keyframes zoomUp {
  from {
    transform: scale(0.9) translateY(8px);
    opacity: 0;
  }

  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}
</style>
