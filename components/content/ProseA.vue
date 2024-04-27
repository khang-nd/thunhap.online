<template>
  <NuxtLink :href="href" :target="target"
    class="rounded-[4px] p-1 -mx-0.5 font-medium text-black dark:text-white transition-colors hover:bg-gray-200 dark:hover:bg-gray-800">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  href?: string,
  target?: '_blank' | '_parent' | '_self' | '_top' | (string & {}) | null | undefined
}>(), {
  href: '',
  target: '_blank'
})
</script>
