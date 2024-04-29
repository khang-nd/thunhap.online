<template>
  <LayoutContainer>
    <template v-if="doc">
      <LandingSectionhead>
        <template #title>{{ title }}</template>
        <template #desc>{{ description }}</template>
      </LandingSectionhead>
      <div class="max-w-4xl mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ListingsProduct v-if="pending" v-for="i in emptyArray(12)" :key="i" />
        <ListingsProduct v-else v-for="item in sitemeta" :key="item.domain" :data="item" />
      </div>
    </template>
    <LayoutError v-else :error="error" />
  </LayoutContainer>
</template>

<script setup lang="ts">
import type { MarkdownParsedContent } from '@nuxt/content/types';

const { t, locale } = useI18n()
const route = useRoute()
const path = route.path.replace(`/${locale.value}`, '')
const { data: doc, error } = await useAsyncData(path, () => queryContent<MarkdownParsedContent>(path).findOne())
const urls = doc.value?.body?.children.map((item) => item.props?.url) as string[]
const { data: sitemeta, pending } = useLazyFetch('/api/sitemeta', { method: 'POST', body: { urls } })
const key = route.params.category as string
const title = computed(() => t(`listing.${key}.title`))
const description = computed(() => t(`listing.${key}.description`))
useHead({
  title: t('common.listing-title', { category: title.value }),
  meta: [
    { property: 'og:image', content: `https://cdn.thunhap.online/ogimage/${key}.png` },
    { name: 'description', content: description.value }
  ]
})
</script>
