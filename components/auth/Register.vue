<template>
  <CoreHeading class="text-center mb-8" as="h1">Register</CoreHeading>
  <div class="min-w-80 flex flex-col gap-4">
    <input type="email" v-model="email" placeholder="Email" class="el-input p-3" />
    <input type="password" v-model="password" placeholder="Password" class="el-input p-3" />
    <CoreButton class="w-full">Register</CoreButton>
    <div class="flex items-center justify-center space-x-2 dark:text-gray-400">
      <span>Already have an account?</span>
      <CoreButton href="/login" variant="custom" size="sm"
        class="dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-white">
        Login
      </CoreButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const email = ref('')
const password = ref('')
</script>
