<template>
  <CoreHeading as="h3" class="mb-4">{{ $t('common.overview') }}</CoreHeading>
  <ProductField :title="$t('common.status')">
    <CoreBadge :color="product.status">
      <NuxtLinkLocale :href="'/browse?status=' + product.status">
        {{ $t('common.status-types.' + product.status) }}
      </NuxtLinkLocale>
    </CoreBadge>
  </ProductField>
  <ProductField :title="$t('common.categories')">
    <CoreBadge v-for="category in product.categories" :key="category">
      <NuxtLinkLocale :href="'/browse/' + category">{{ $t('category.' + category) }}</NuxtLinkLocale>
    </CoreBadge>
  </ProductField>
  <ProductField v-if="product.revenue" :title="$t('common.revenue')">
    <span class="font-bold text-xl">{{ formatPrice(product.revenue) }}/{{ $t('common.month') }}</span>
  </ProductField>
  <ProductField v-if="product.models" :title="$t('common.revenue-models')">
    <CoreBadge v-if="typeof product.models === 'string'">
      <NuxtLinkLocale :href="'/browse?models=' + product.models">
        {{ $t('common.revenue-model-types.' + product.models) }}
      </NuxtLinkLocale>
    </CoreBadge>
    <CoreBadge v-else v-for="model in product.models" :key="model">
      <NuxtLinkLocale :href="'/browse?models=' + model">
        {{ $t('common.revenue-model-types.' + model) }}
      </NuxtLinkLocale>
    </CoreBadge>
  </ProductField>
  <ProductField v-if="product.year" :title="$t('common.founded-year')">
    {{ product.year }} ({{ getTimeAgo(product.year) }})
  </ProductField>
  <CoreButton v-if="product.homepage" :href="getFullUrl(product.homepage)" target="_blank"
    class="flex items-center justify-center space-x-2 w-full">
    <span>{{ getHost(product.homepage) }}</span>
    <Icon name="uil:external-link-alt" />
  </CoreButton>
</template>

<script setup lang="ts">
defineProps<{
  product: Product
}>()

const getTimeAgo = (year: number) => useTimeAgo(new Date(year, 0, 1)).value;
const getFullUrl = (host: string) => /^https?:\/\//.test(host) ? host : `https://${host}`;
const getHost = (url: string) => new URL(getFullUrl(url)).host;
</script>
