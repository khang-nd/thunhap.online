<template>
  <main class="max-w-screen-xl mx-auto pt-16 flex flex-col lg:flex-row">
    <ContentDoc>
      <template #default="{ doc }">
        <ProductContainer as="article" class="order-1">
          <ContentRenderer :value="doc" class="mb-16" />
          <ProductTags :tags="doc.hashtags" />
        </ProductContainer>
        <ProductContainer as="aside" class="order-none lg:order-1 lg:max-w-xs">
          <CoreHeading as="h3" class="mb-4">Tổng quan</CoreHeading>
          <ProductField title="Tình trạng">
            <CoreBadge :color="doc.status">
              <NuxtLink :href="'/browse?status=' + doc.status">{{ status[doc.status as StatusType] }}</NuxtLink>
            </CoreBadge>
          </ProductField>
          <ProductField title="Phân loại">
            <CoreBadge v-for="category in doc.categories" :key="category">
              <NuxtLink :href="'/browse/' + category">
                {{ categories[category as CategoryType] || category }}
              </NuxtLink>
            </CoreBadge>
          </ProductField>
          <ProductField v-if="doc.revenue" title="Doanh thu">
            <span class="font-bold text-xl">{{ formatPrice(doc.revenue) }}/tháng</span>
          </ProductField>
          <ProductField v-if="doc.models" title="Mô hình thu nhập">
            <CoreBadge v-if="typeof doc.models === 'string'">
              <NuxtLink :href="'/browse?models=' + doc.models">
                {{ revenueModels[doc.models as RevenueModelType] }}
              </NuxtLink>
            </CoreBadge>
            <CoreBadge v-else v-for="model in doc.models" :key="model">
              <NuxtLink :href="'/browse?models=' + model">
                {{ revenueModels[model as RevenueModelType] }}
              </NuxtLink>
            </CoreBadge>
          </ProductField>
          <ProductField v-if="doc.year" title="Năm thành lập">
            {{ doc.year }}
          </ProductField>
          <CoreButton v-if="doc.homepage" :href="getFullUrl(doc.homepage)" target="_blank"
            class="flex items-center justify-center space-x-2 w-full">
            <span>{{ getHost(doc.homepage) }}</span>
            <Icon name="uil:external-link-alt" />
          </CoreButton>
        </ProductContainer>
      </template>
      <template #not-found>
        <div class="w-full text-center py-16">
          <h1 class="text-9xl font-bold mb-6">404</h1>
          <CoreParagraph class="mb-6">Oopsie! Trang này không tồn tại.</CoreParagraph>
          <CoreButton href="/">Về trang chủ</CoreButton>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types';

const getFullUrl = (host: string) => /^https?:\/\//.test(host) ? host : `https://${host}`;
const getHost = (url: string) => new URL(getFullUrl(url)).host;
</script>
