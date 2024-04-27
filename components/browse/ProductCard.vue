<template>
  <div @mouseover="isHovered = true" @mouseleave="isHovered = false" class="flex flex-col dark:bg-neutral-900">
    <div class="w-full h-52 overflow-hidden border border-gray-300 dark:border-neutral-700 relative shrink-0">
      <component :is="ResolvedLink" :href="product._path">
        <img v-if="product.image?.src" :src="product.image.src" :alt="product.image.alt"
          class="w-full h-full object-cover" />
        <div
          :class="['absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 opacity-0', { 'opacity-100': isHovered }]">
          <Icon name="uil:external-link-alt" class="text-white text-5xl" />
        </div>
      </component>
      <BrowseProductAdLabel v-if="product._sponsor" />
    </div>
    <component :is="ResolvedLink" :href="product._path" class="h-full p-3 border border-t-0 border-gray-300 dark:border-neutral-700">
      <CoreHeading as="h4">{{ product.title }}</CoreHeading>
      <p class="mb-2 dark:text-gray-400">{{ product.description }}</p>
      <div>
        <CoreTooltip>
          <template #trigger>
            <CoreBadge v-if="product.revenue" class="mb-0 align-top">
              {{ formatPrice(product.revenue, locale) }}/{{ $t('common.month') }}
            </CoreBadge>
          </template>
          {{ $t('common.revenue') }}
        </CoreTooltip>
        <CoreTooltip>
          <template #trigger>
            <CoreBadge v-if="product.affiliate" class="mb-0 align-top">
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
const isHovered = ref(false);
const ResolvedLink = resolveLinkComponent(props.product._path as string);
</script>
