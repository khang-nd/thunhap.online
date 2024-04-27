<template>
  <div class="border mb-16 px-20 py-16 flex flex-col lg:flex-row items-center gap-12">
    <h3 class="font-semibold text-4xl">Sponsors</h3>
    <ul class="flex flex-wrap lg:flex-nowrap items-center sm:justify-center gap-6 mx-auto">
      <li v-for="sponsor in sponsors" :key="sponsor.title">
        <CoreButton variant="inverted" class="flex items-center space-x-2" :href="sponsor._path">
          <Icon :name="sponsor.icon" size="64" />
          <span class="font-bold text-2xl">{{ sponsor.title }}</span>
        </CoreButton>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>
