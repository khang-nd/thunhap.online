<template>
  <main class="w-full">
    <ContentDoc :path="path" :query="{ where: { _locale: locale } }">
      <template #default="{ doc }">
        <div class="max-w-screen-xl mx-auto pt-8 md:pt-16 flex flex-col lg:flex-row gap-10">
          <ProductContainer as="article">
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-center space-x-4">
                <ProductDatetime :timestamp="doc.publishedAt" />
                <ProductViews />
              </div>
              <div>
                <ProductSocialShare />
              </div>
            </div>
            <ContentRenderer :value="doc" class="mb-16" />
            <ProductTags :tags="doc.hashtags" />
          </ProductContainer>
          <ProductContainer as="aside" class="lg:max-w-sm">
            <div class="mb-16">
              <ProductOverview :product="doc" />
            </div>
            <!-- <div class="mb-16 border border-gray-300 bg-gray-100 p-6 rounded-md">
              <ProductSponsors />
            </div> -->
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
