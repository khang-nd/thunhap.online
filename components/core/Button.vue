<template>
  <component :is="$attrs.href ? NuxtLink : 'button'" :class="[
    'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200',
    sizes[size],
    styles[$attrs.disabled === '' ? 'disabled' : styleName],
  ]">
    <slot />
  </component>
</template>

<script setup lang="ts">
const NuxtLink = resolveComponent("NuxtLink");

type Size = "md" | "lg";

type StyleName = "outline" | "primary" | "inverted" | "disabled";

interface Props {
  size?: Size;
  styleName?: StyleName;
}

withDefaults(defineProps<Props>(), {
  size: "lg",
  styleName: "primary",
});

const sizes: Record<Size, string> = {
  lg: "px-5 py-2.5",
  md: "px-3 py-2",
};

const styles: Record<StyleName, string> = {
  outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
  primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
  inverted: "bg-white text-black border-2 border-transparent",
  disabled: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent",
};
</script>
