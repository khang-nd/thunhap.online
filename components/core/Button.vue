<template>
  <component :is="resolvedAs" :href="href" :class="[
    'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-black',
    sizes[size],
    styles[$attrs.disabled === '' ? 'disabled' : variant],
  ]">
    <slot />
  </component>
</template>

<script setup lang="ts">
type Size = 'sm' | "md" | "lg";

type Variant = "outline" | "primary" | "inverted" | "disabled";

interface Props {
  as?: 'button' | 'a';
  href?: string;
  size?: Size;
  variant?: Variant;
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
  outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
  primary: "bg-black text-white hover:bg-gray-800 border-2 border-transparent",
  inverted: "bg-white text-gray-500 border-2 border-transparent hover:text-black",
  disabled: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent",
};

const resolvedAs = as || (href ? resolveLinkComponent(href) : 'button')
</script>
