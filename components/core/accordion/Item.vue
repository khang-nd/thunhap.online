<template>
  <AccordionItem :value="value">
    <AccordionHeader as-child>
      <AccordionTrigger as-child>
        <slot name="trigger" />
      </AccordionTrigger>
    </AccordionHeader>
    <AccordionContent>
      <slot />
    </AccordionContent>
  </AccordionItem>
</template>

<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger
} from 'radix-vue'

defineProps<{
  value: string
}>()
</script>
