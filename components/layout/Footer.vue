<template>
  <footer class="w-full mt-16">
    <div class="max-w-screen-xl border-t border-gray-200 dark:border-gray-800 mx-auto">
      <div class="px-2 py-8 grid grid-cols-1 md:grid-cols-2 gap-y-6 xl:flex justify-between">
        <div class="flex flex-col justify-end">
          <CoreButton v-for="p in pages" :href="p.href" :as="p.title === 'sitemap' ? 'a' : undefined" variant="inverted"
            size="md" class="text-left text-lg">
            {{ $t(`common.${p.title}`) }}
          </CoreButton>
        </div>
        <div>
          <div class="text-gray-700 dark:text-gray-300 font-bold p-2.5">{{ $t('common.categories') }}</div>
          <div class="grid grid-cols-2 gap-x-4">
            <CoreButton v-for="(_, key) in categories" :href="`/browse/${key}`" variant="inverted" size="sm"
              class="text-left">
              {{ $t(`category.${key}`) }}
            </CoreButton>
          </div>
        </div>
        <div>
          <div class="text-gray-700 dark:text-gray-300 font-bold p-2.5">{{ $t('common.listings') }}</div>
          <div class="grid grid-cols-1">
            <ContentList path="/listings" :query="{ only: ['_path', 'title'] }" v-slot="{ list }">
              <CoreButton v-for="l in list" :href="l._path" variant="inverted" size="sm" class="text-left">
                {{ $t(`listing.${l.title?.toLowerCase()}.title`) }}
              </CoreButton>
            </ContentList>
          </div>
        </div>
        <div>
          <div class="text-gray-700 dark:text-gray-300 font-bold p-2.5">{{ $t('common.tools') }}</div>
          <div class="grid grid-cols-1">
            <CoreButton v-for="t in tools" :href="t.href" variant="inverted" size="sm" class="text-left">
              {{ t.title }}
            </CoreButton>
          </div>
        </div>
      </div>
      <div
        class="px-4 py-8 flex flex-col lg:flex-row items-center justify-between text-gray-500 dark:text-gray-400 text-sm">
        <p class="mb-1 lg:mb-0">
          Copyright © thunhap.online {{ new Date().getFullYear() }}
        </p>
        <div class="flex items-center">
          <CoreButton :href="contactLinks.twitter.url" title="Twitter" variant="inverted" size="md" target="_blank">
            <Icon name="uil:twitter" size="24" />
          </CoreButton>
          <CoreButton :href="contactLinks.email.url" title="Email" variant="inverted" size="md">
            <Icon name="uil:envelope-alt" size="24" />
          </CoreButton>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const pages = [
  { title: 'home', href: '/' },
  { title: 'about', href: '/about' },
  { title: 'browse', href: '/browse' },
  { title: 'listings', href: '/listings' },
  { title: 'changelog', href: '/changelog' },
  { title: 'sitemap', href: '/sitemap_index.xml' },
]
const tools = [
  { title: 'OG Image Generator', href: '/ogimage' }
]
</script>
