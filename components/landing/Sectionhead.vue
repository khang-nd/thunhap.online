<script setup>
defineProps({
  align: {
    default: "center",
  },
});
</script>

<template>
  <div :class="['pt-16', align === 'center' && 'text-center']">
    <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight dark:text-white">
      <slot name="title">Title</slot>
    </h1>
    <p class="text-lg mt-4 text-slate-600 dark:text-slate-400">
      <slot name="desc">Some description goes here</slot>
    </p>
  </div>
</template>
