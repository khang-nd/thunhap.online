<template>
  <component :is="as"
    :class="twMerge('text-gray-800 dark:text-gray-300 mb-3', sizes[as], as === 'h2' ? 'font-semibold' : 'font-medium', $attrs.class as string)">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

interface Props {
  as?: string;
}

const sizes: Record<string, string> = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
};

defineOptions({
  inheritAttrs: false,
})

withDefaults(defineProps<Props>(), {
  as: "h2",
});
</script>
