<template>
  <header class="w-full">
    <div class="max-w-screen-xl flex flex-col lg:flex-row justify-between items-center p-5 mx-auto">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <NuxtLink href="/" class="flex items-center text-lg" @mouseover="titleMouseOver = true"
          @mouseout="titleMouseOver = false">
          <Icon :name="'healthicons:money-bag' + (titleMouseOver ? '' : '-outline')" size="32" class="mr-1" />
          <span class="font-bold text-slate-800">Thu Nhập</span>
          <span class="text-slate-500">.online</span>
        </NuxtLink>
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
        <ul class="flex flex-col lg:flex-row lg:gap-3 mr-3">
          <li v-for="item of menuitems">
            <NuxtLink :href="'/' + item"
              :class='[($route.path.includes(item) ? "text-black bg-gray-100" : "text-gray-500"), "rounded-md flex p-2 transition-colors hover:text-black lg:px-3"]'>
              {{ $t('common.' + item) }}
            </NuxtLink>
          </li>
        </ul>
        <CoreToggleGroup v-model="currentLocale"
          :items="locales.map((({ code }) => ({ label: code.toUpperCase(), value: code })))" />
        <!-- <div class="lg:hidden flex items-center mt-3 gap-4">
          <LandingLink href="#" styleName="muted" block size="md"
            >Log in</LandingLink
          >
          <LandingLink href="#" size="md" block>Sign up</LandingLink>
        </div> -->
      </nav>
      <!-- <div>
        <div class="hidden lg:flex items-center gap-4">
          <a href="#">Log in</a>
          <LandingLink href="#" size="md">Sign up</LandingLink>
        </div>
      </div> -->
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const openMenu = ref(false);
const titleMouseOver = ref(false);
const currentLocale = ref(locale.value)
const menuitems = ['browse', 'about']

watch(currentLocale, setLocale)
</script>
