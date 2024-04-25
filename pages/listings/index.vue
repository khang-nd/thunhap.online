<i18n lang="yaml">
  vi:
    description: Các công cụ và tài liệu để bắt đầu xây dựng sản phẩm online
  en:
    description: Tools and resources to start your online business
</i18n>

<template>
  <LayoutContainer>
    <LandingSectionhead>
      <template #title>{{ title }}</template>
      <template #desc>{{ t('description') }}</template>
    </LandingSectionhead>

    <div class="max-w-4xl mx-auto mt-12 space-y-4">
      <ContentList path="/listings" :query="query">
        <template #default="{ list }">
          <ListingsCategory v-for="c in list" :key="c._path" :category="c" />
        </template>
        <template #not-found>
          <CoreParagraph class="text-center italic text-base py-10">
            {{ $t('common.no-result') }}
          </CoreParagraph>
        </template>
      </ContentList>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/types';

const { t } = useI18n();
const query: QueryBuilderParams = {};
const title = computed(() => t('common.listings'))
useHead({ title, meta: [{ name: 'description', content: t('description') }] })
</script>
