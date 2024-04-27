<i18n lang="yaml">
  vi:
    title: Đặt quảng cáo
    description: Quảng bá sản phẩm của bạn trên Thu Nhập Online
  en:
    title: Advertise
    description: Promote your product on Thu Nhap Online
</i18n>

<template>
  <LayoutContainer>
    <LandingSectionhead>
      <template #title>{{ title }}</template>
      <template #desc>{{ t('description') }}</template>
    </LandingSectionhead>
    <AdvertisePricing />
    <AdvertiseExamples />
    <AdvertiseSponsors />
  </LayoutContainer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const title = t('title')
useHead({ title })
</script>
