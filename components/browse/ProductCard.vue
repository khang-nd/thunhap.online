<template>
  <div class="flex flex-col group border border-gray-300 dark:border-neutral-700">
    <div class="w-full h-52 overflow-hidden relative shrink-0">
      <component :is="ResolvedLink" :href="product._path">
        <img v-if="product.image?.src" :src="product.image.src" :alt="product.image.alt"
          class="w-full h-full object-cover" />
      </component>
      <div
        class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 pointer-events-none opacity-0 group-hover:opacity-100">
        <Icon name="uil:external-link-alt" class="text-white text-5xl" />
      </div>
      <BrowseProductAdLabel v-if="product._sponsor" />
    </div>
    <component :is="ResolvedLink" :href="product._path"
      class="h-full flex flex-col justify-between p-3 border-t border-gray-300 dark:border-neutral-700">
      <div class="mb-2">
        <CoreHeading as="h4">{{ product.title }}</CoreHeading>
        <p class="dark:text-gray-400">{{ product.description }}</p>
      </div>
      <div>
        <CoreTooltip v-if="product.revenue">
          <template #trigger>
            <CoreBadge class="mb-0 align-top">
              {{ formatPrice(product.revenue, locale) }}/{{ $t('common.month') }}
            </CoreBadge>
          </template>
          {{ $t('common.revenue') }}
        </CoreTooltip>
        <CoreTooltip v-if="product.affiliate">
          <template #trigger>
            <CoreBadge class="mb-0 align-top">
              <Icon name="iconoir:coins" size="20" />
            </CoreBadge>
          </template>
          {{ $t('common.affiliate-program') }}
        </CoreTooltip>
      </div>
    </component>
  </div>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types';

const props = defineProps<{
  product: ParsedContent | ParsedProduct | SponsorProduct
}>()
const { locale } = useI18n();
const ResolvedLink = resolveLinkComponent(props.product._path as string);
</script>
