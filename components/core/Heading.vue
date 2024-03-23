<template>
    <component :is="as" :class="['text-gray-800 mb-3', sizes[as], as === 'h2' ? 'font-semibold' : 'font-medium']">
        <slot />
    </component>
</template>

<script setup lang="ts">
interface Props {
    as?: string;
}

const sizes: Record<string, string> = {
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
};

withDefaults(defineProps<Props>(), {
    as: "h2",
});
</script>
