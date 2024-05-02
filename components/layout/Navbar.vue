<template>
  <header class="w-full">
    <div class="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center p-5 mx-auto">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <NuxtLinkLocale href="/" class="flex items-center text-lg text-slate-800 dark:text-slate-200"
          @mouseover="titleMouseOver = true" @mouseout="titleMouseOver = false">
          <Icon :name="'healthicons:money-bag' + (titleMouseOver ? '' : '-outline')" size="32" class="mr-1" />
          <span class="font-bold">Thu Nhập</span>
          <span class="text-slate-500 dark:text-slate-400">.online</span>
        </NuxtLinkLocale>
        <button @click="openMenu = !openMenu"
          class="block p-1 lg:hidden text-gray-500 rounded-full transition-colors hover:text-black hover:bg-gray-100">
          <svg fill="currentColor" class="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path v-show="openMenu" fill-rule="evenodd" clip-rule="evenodd"
              d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z">
            </path>
            <path v-show="!openMenu" fill-rule="evenodd"
              d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z">
            </path>
          </svg>
        </button>
      </div>
      <nav class="w-full lg:w-auto mt-2 lg:flex lg:mt-0" :class="{ block: openMenu, hidden: !openMenu }">
        <LayoutSearch />
        <ul class="flex flex-col lg:flex-row lg:items-center lg:mr-3 mb-2 lg:mb-0">
          <li v-for="(item) of menuitems">
            <CoreButton :href="`/${item}`" variant="custom"
              :class='[($route.path.includes(item) ? "text-black bg-gray-100 dark:text-white dark:bg-gray-900" : "text-gray-500 dark:text-gray-400"), "flex p-2 hover:text-black dark:hover:text-white lg:px-3"]'>
              {{ $t('common.' + item) }}
            </CoreButton>
          </li>
          <li>
            <CoreButton href="/submit" variant="primary" size="md" class="inline-block lg:ml-2">
              {{ $t('common.submit') }}
            </CoreButton>
          </li>
        </ul>
        <div class="flex items-center border border-gray-400 dark:border-gray-600 rounded-md p-1">
          <CoreToggleGroup v-model="currentLocale" class="mr-2"
            :items="locales.map((({ code }) => ({ label: code.toUpperCase(), value: code })))" />
          <LayoutAnalytics />
          <LayoutColorMode />
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const openMenu = ref(false);
const titleMouseOver = ref(false);
const currentLocale = ref(locale.value)
const menuitems = ['browse', 'listings', 'about']

watch(currentLocale, setLocale)
</script>
