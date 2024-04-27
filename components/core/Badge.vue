<template>
  <component :is="as" :href="href" :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'nofollow noopener noreferrer' : undefined"
    :class="twMerge('inline-flex items-center rounded-full px-2 py-1 text-sm font-medium mr-1 mb-1 transition-opacity hover:opacity-80', colors[color], $attrs.class as string)">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

interface Props {
  color?: StatusType;
  href?: string;
}

const { href } = withDefaults(defineProps<Props>(), { color: 'unknown' })
const colors: Record<StatusType, string> = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-red-100 text-red-700",
  acquired: "bg-purple-100 text-purple-700",
  unknown: "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300",
};
const as = href ? resolveLinkComponent(href) : 'span'
const isExternal = href && isExternalLink(href)
</script>
