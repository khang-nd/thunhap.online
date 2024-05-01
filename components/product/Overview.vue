<template>
  <CoreHeading as="h3" class="mb-4 font-bold">{{ $t('common.overview') }}</CoreHeading>
  <CoreButton v-if="product.homepage" :href="getFullUrl(product.homepage)" target="_blank"
    class="flex items-center justify-center space-x-2 w-full mb-3">
    <span>{{ hostname }}</span>
    <Icon name="uil:external-link-alt" />
  </CoreButton>
  <ProductField :title="$t('common.status')">
    <CoreBadge :color="product.status" :href="'/browse/status/' + product.status">
      {{ $t('common.status-types.' + product.status) }}
    </CoreBadge>
  </ProductField>
  <ProductField :title="$t('common.categories')">
    <CoreBadge v-for="category in product.categories" :key="category" :href="'/browse/' + category">
      {{ $t('category.' + category) }}
    </CoreBadge>
  </ProductField>
  <ProductField v-if="product.revenue" :title="$t('common.revenue')">
    <span class="font-bold text-xl">{{ formatPrice(product.revenue, locale) }}/{{ $t('common.month') }}</span>
  </ProductField>
  <ProductField v-if="product.models" :title="$t('common.revenue-models')">
    <CoreBadge v-if="typeof product.models === 'string'" :href="'/browse/model/' + product.models">
      {{ $t('common.revenue-model-types.' + product.models) }}
    </CoreBadge>
    <CoreBadge v-else v-for="model in product.models" :key="model" :href="'/browse/model/' + model">
      {{ $t('common.revenue-model-types.' + model) }}
    </CoreBadge>
  </ProductField>
  <ProductField v-if="product.year" :title="$t('common.founded-year')">
    {{ product.year }} ({{ getTimeAgo(product.year) }})
  </ProductField>
  <ProductField :title="$t('common.website-intelligence')">
    <div class="w-full flex items-center">
      <CoreButton variant="inverted" size="md" class="w-full space-x-1 flex items-center justify-center"
        :href="'https://similarweb.com/website/' + hostname" target="_blank">
        <span>Similarweb</span>
        <Icon name="uil:external-link-alt" />
      </CoreButton>
      <hr class="h-8 w-[1px] border-0 bg-gray-300 dark:bg-gray-700 flex-shrink-0 mx-1" />
      <CoreButton variant="inverted" size="md" class="w-full space-x-1 flex items-center justify-center"
        :href="'https://builtwith.com/' + hostname" target="_blank">
        <span>BuiltWith</span>
        <Icon name="uil:external-link-alt" />
      </CoreButton>
    </div>
  </ProductField>
  <CoreButton v-if="product.affiliate" variant="custom" :href="product.affiliate" target="_blank"
    class="el-link flex items-center justify-center space-x-2 w-full border border-gray-300 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-900">
    <Icon name="iconoir:coins" size="20" />
    <span>{{ $t('common.affiliate-program') }}</span>
  </CoreButton>
</template>

<script setup lang="ts">
const { product } = defineProps<{
  product: Product
}>()

const { locale } = useI18n();
const getTimeAgo = (year: number) => useTimeAgo(new Date(year, 0, 1)).value;
const getHost = (url: string) => new URL(getFullUrl(url)).host;
const hostname = getHost(product.homepage);
</script>
