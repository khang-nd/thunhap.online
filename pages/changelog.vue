<template>
  <main class="max-w-4xl mx-auto pt-16 px-5">
    <ContentDoc :query="{ where: [{ _locale: locale }] }" path="/changelog" />
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>
