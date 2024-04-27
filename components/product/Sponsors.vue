<template>
  <CoreHeading as="h3" class="mb-4 font-bold">Our sponsors</CoreHeading>
  <ul class="space-y-3">
    <li v-for="sponsor in sponsors" :key="sponsor.title">
      <CoreButton variant="inverted" class="flex items-center space-x-2" :href="sponsor._path">
        <Icon :name="sponsor.icon" size="32" />
        <span class="font-semibold text-xl">{{ sponsor.title }}</span>
      </CoreButton>
    </li>
  </ul>
</template>

<script setup lang="ts">

</script>
