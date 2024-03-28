<template>
  <CoreHeading as="h3" class="mb-4">Tổng quan</CoreHeading>
  <ProductField title="Tình trạng">
    <CoreBadge :color="product.status">
      <NuxtLink :href="'/browse?status=' + product.status">{{ status[product.status as StatusType] }}</NuxtLink>
    </CoreBadge>
  </ProductField>
  <ProductField title="Phân loại">
    <CoreBadge v-for="category in product.categories" :key="category">
      <NuxtLink :href="'/browse/' + category">
        {{ categories[category as CategoryType]?.title || category }}
      </NuxtLink>
    </CoreBadge>
  </ProductField>
  <ProductField v-if="product.revenue" title="Doanh thu">
    <span class="font-bold text-xl">{{ formatPrice(product.revenue) }}/tháng</span>
  </ProductField>
  <ProductField v-if="product.models" title="Mô hình thu nhập">
    <CoreBadge v-if="typeof product.models === 'string'">
      <NuxtLink :href="'/browse?models=' + product.models">
        {{ revenueModels[product.models as RevenueModelType] }}
      </NuxtLink>
    </CoreBadge>
    <CoreBadge v-else v-for="model in product.models" :key="model">
      <NuxtLink :href="'/browse?models=' + model">
        {{ revenueModels[model as RevenueModelType] }}
      </NuxtLink>
    </CoreBadge>
  </ProductField>
  <ProductField v-if="product.year" title="Năm thành lập">
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
