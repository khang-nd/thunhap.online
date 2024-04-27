<template>
  <div class="flex flex-wrap lg:flex-nowrap bg-white dark:bg-transparent rounded-xl max-w-screen-lg mt-12 mx-auto mb-32 border-2 dark:border-gray-700 p-4">
    <div class="p-6 mb-4 lg:mb-0 mr-4 w-full">
      <h2 class="text-2xl font-bold tracking-tight mb-6 dark:text-white">Promote for a month</h2>
      <p class="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
        Get your product promoted across the site for an entire month
        and reach thousands of potential customers. No complex pricing, no hidden costs.
      </p>
      <div class="mb-6 flex items-center gap-x-4">
        <h3 class="flex-none text-sm font-semibold leading-6 dark:text-gray-200">Included perks</h3>
        <div class="h-px flex-auto bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <ul class="grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 dark:text-gray-400">
        <li v-for="perk in perks" :key="perk" class="flex items-center gap-x-2 text-sm">
          <SvgTick class="w-6 h-6" />
          <span>{{ perk }}</span>
        </li>
      </ul>
    </div>
    <div class="w-full py-10 text-center bg-gray-50 dark:bg-zinc-900 border dark:border-gray-700 rounded-lg flex items-center justify-center">
      <div>
        <div class="text-gray-800 dark:text-gray-400 mb-4">Flat price</div>
        <div class="text-6xl font-bold mb-6 dark:text-white">$</div>
        <CoreButton disabled class="text-lg">
          Order now
        </CoreButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const perks = [
  'Product logo placed on the home page',
  'Product card placed on the front line of the browse page',
  'Product logo placed on each individual product page',
  'Permanent backlink to your product page added below'
]
</script>
