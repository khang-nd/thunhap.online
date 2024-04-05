<template>
  <NuxtLinkLocale :href="href" :target="target"
    class="rounded-[4px] p-1 -mx-0.5 font-medium text-black transition-colors hover:bg-gray-200">
    <slot />
  </NuxtLinkLocale>
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
