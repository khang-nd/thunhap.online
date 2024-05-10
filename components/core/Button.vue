<template>
  <component :is="resolvedAs" :href="href" :rel="rel" :disabled="loading" :class="twMerge(
    'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-black',
    sizes[size],
    styles[$attrs.disabled === '' ? 'disabled' : variant],
    $attrs.class as string,
  )">
    <Icon name="svg-spinners:bars-scale-fade" v-if="loading" class="inline" />
    <slot v-else />
  </component>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

type Size = 'sm' | "md" | "lg";

type Variant = "outline" | "primary" | "inverted" | "disabled" | "custom";

interface Props {
  as?: 'button' | 'a';
  href?: string;
  size?: Size;
  variant?: Variant;
  loading?: boolean;
}

const { as, href } = withDefaults(defineProps<Props>(), {
  size: "lg",
  variant: "primary",
});

const sizes: Record<Size, string> = {
  lg: "px-5 py-2.5",
  md: "px-3 py-2",
  sm: "px-2 py-1",
};

const styles: Record<Variant, string> = {
  outline: "bg-white hover:bg-gray-100 dark:bg-neutral-950 border-2 border-black dark:border-gray-800 dark:hover:border-gray-600 text-black dark:text-white",
  primary: "bg-black hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-white text-white dark:hover:text-black border-2 border-transparent",
  inverted: "el-link border-2 border-transparent",
  disabled: "bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 border-2 border-transparent dark:text-gray-500",
  custom: "",
};

const resolvedAs = as || (href ? resolveLinkComponent(href) : 'button')
const rel = href && isExternalLink(href) ? 'nofollow noopener noreferrer' : undefined
</script>
