<template>
  <CoreHeading as="h2" :id="id" class="mt-12">
    <a v-if="id && generate" :href="`#${id}`" class="hover:opacity-70">
      <Icon v-if="icon" :name="icon" class="inline mr-1 relative bottom-[0.1em]" />
      <span>
        <slot />
      </span>
    </a>
    <slot v-else />
  </CoreHeading>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()
const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)
const iconMap: Record<string, string> = {
  "doanh-thu": "healthicons:money-bag-outline",
  "quảng-bá": "healthicons:megaphone-outline",
  "thông-tin": "healthicons:info-outline",
}
const icon = Object.keys(iconMap).reduce((acc, key) => {
  return (props.id?.includes(key)) ? iconMap[key] : acc
}, '')
</script>
