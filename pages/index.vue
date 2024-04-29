<i18n lang="yaml">
  vi:
    title: Khám phá các sản phẩm online thành công
  en:
    title: Discover successful online businesses
</i18n>

<template>
  <LayoutContainer>
    <LandingHero />
    <LandingNewProducts />
    <LandingCategories />
    <!-- <LandingSponsors /> -->
  </LayoutContainer>
</template>

<script setup>
const { t } = useI18n()
const title = computed(() => t('title'))
useHead({ title })
</script>
