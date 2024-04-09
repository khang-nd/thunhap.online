<template>
  <component :is="as" :href="href" :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'nofollow noopener noreferrer' : undefined"
    :class="['inline-flex items-center rounded-full px-2 py-1 text-sm font-medium mr-1 mb-1 transition-opacity hover:opacity-80', colors[color]]">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  color?: StatusType;
  href?: string;
}

const { href } = withDefaults(defineProps<Props>(), { color: 'unknown' })
const colors: Record<StatusType, string> = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-red-100 text-red-700",
  acquired: "bg-purple-100 text-purple-700",
  unknown: "bg-gray-200 text-gray-700",
};
const as = href ? resolveLinkComponent(href) : 'span'
const isExternal = href && isExternalLink(href)
</script>
