<template>
  <NuxtLink :href="href" :target="target" class="rounded-[4px] p-1 -mx-0.5 font-medium text-black transition-colors hover:bg-gray-200">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & {}) | null | undefined>,
    default: undefined,
    required: false
  }
})
</script>
