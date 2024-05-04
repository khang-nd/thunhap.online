<template>
  <main class="h-screen flex flex-col items-center justify-center">
    <div class="p-12 border dark:border-neutral-800 dark:bg-[rgba(255,255,255,0.01)]">
      <AuthLogin />
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
  pageTransition: PageTransition.Auth
})
</script>
