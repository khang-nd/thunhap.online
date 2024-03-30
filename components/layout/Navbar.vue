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
      <nav class="w-full items-center lg:w-auto mt-2 lg:flex lg:mt-0" :class="{ block: openMenu, hidden: !openMenu }">
        <LayoutSearch />
        <ul class="flex flex-col lg:flex-row lg:gap-3 mb-2 lg:mb-0 lg:mr-3">
          <li v-for="item of menuitems ">
            <NuxtLink :href="item.path"
              :class='[($route.path.includes(item.path) ? "text-black bg-gray-100" : "text-gray-500"), "rounded-md flex p-2 transition-colors hover:text-black lg:px-3"]'>
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
        <CoreButton href="/submit" variant="primary" size="md" class="inline-block">Đăng sản phẩm</CoreButton>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuitems = [
  {
    title: "Khám phá",
    path: "/browse",
  },
  {
    title: "Giới thiệu",
    path: "/about",
  },
];

const openMenu = ref(false);
const titleMouseOver = ref(false);
</script>
