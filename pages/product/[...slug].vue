<template>
  <main class="w-full">
    <ContentDoc :path="path" :query="{ where: { _locale: locale } }">
      <template #default="{ doc }">
        <div class="max-w-screen-xl mx-auto pt-16 flex flex-col lg:flex-row">
          <ProductContainer as="article">
            <div class="mb-2 space-x-4">
              <ProductDatetime :timestamp="doc.publishedAt" />
              <ProductViews />
            </div>
            <ContentRenderer :value="doc" class="mb-16" />
            <ProductTags :tags="doc.hashtags" />
          </ProductContainer>
          <ProductContainer as="aside" class="lg:max-w-xs">
            <div class="mb-16">
              <ProductOverview :product="doc" />
            </div>
            <div>
              <ProductSimilar :product="doc" />
            </div>
          </ProductContainer>
        </div>
      </template>
      <template #not-found>
        <LayoutError :error="{ statusCode: 404, statusMessage: 'Page not found' }" />
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()
const path = route.path.replace(`/${locale.value}`, '')
</script>
