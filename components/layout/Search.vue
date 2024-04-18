<template>
  <CoreDialog title="Tìm kiếm" portal="body" v-model:open="openSearch">
    <template #trigger>
      <button class="el-outline flex items-center w-full lg:w-auto mb-2 lg:mb-0 lg:mr-3 px-3 py-2 space-x-1 rounded-md">
        <Icon name="uil:search" class="" />
        <span>{{ $t('common.search') }}</span>
      </button>
    </template>

    <div class="px-4 py-6">
      <label class="block relative mb-6">
        <span class="absolute p-2">
          <Icon name="uil:search" size="24" :class="['transition-opacity', focused ? 'opacity-80' : 'opacity-30']" />
        </span>
        <input type="text" :placeholder="$t('common.search') + '...'" v-model="searchText" @focus="focused = true"
          @blur="focused = false" class="el-input w-full p-2 pl-10" />
      </label>
      <div class="h-80 overflow-auto">
        <ul v-if="results?.value.length > 0">
          <li v-for="item in results.value" :key="item.id">
            <NuxtLinkLocale :href="item.id" class="block p-2 transition-colors hover:bg-gray-200">
              <div class="font-medium mb-1">
                <span v-for="(title, index) in [...item.titles, item.title]">
                  <Icon v-if="index > 0" name="uil:angle-right" class="inline" />
                  <span>{{ title }}</span>
                </span>
              </div>
              <div class="text-sm" v-html="truncateText(item.content, item.terms[0])" />
            </NuxtLinkLocale>
          </li>
        </ul>
        <div v-else class="flex items-center justify-center h-full text-gray-500 italic">
          {{ !searchText ? $t('common.missing-keyword') : $t('common.no-result') }}
        </div>
      </div>
    </div>
  </CoreDialog>
</template>

<script setup lang="ts">
const openSearch = ref(false)
const searchText = ref("")
const results = ref()
const focused = ref(false)

const truncateText = (text: string, key: string) => {
  const index = text.toLowerCase().indexOf(key.toLowerCase())
  const start = Math.max(0, index - 25)
  const end = Math.min(text.length, index + 25)
  return (start > 0 ? '...' : '') + text.slice(start, end).trim() + (end < text.length ? '...' : '')
}

watchDebounced(searchText, async (text) => {
  results.value = await searchContent(text)
}, { debounce: 500 })
</script>
