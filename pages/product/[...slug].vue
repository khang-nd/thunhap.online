<template>
  <main class="w-full">
    <ContentDoc>
      <template #default="{ doc }">
        <div class="max-w-screen-xl mx-auto pt-16 flex flex-col lg:flex-row">
          <ProductContainer class="lg:hidden">
            <ProductOverview :product="doc" />
          </ProductContainer>
          <ProductContainer as="article">
            <ProductDatetime :timestamp="doc.publishedAt" class="mb-2" />
            <ContentRenderer :value="doc" class="mb-16" />
            <ProductTags :tags="doc.hashtags" />
          </ProductContainer>
          <ProductContainer as="aside" class="lg:max-w-xs">
            <div class="hidden lg:block mb-16">
              <ProductOverview :product="doc" />
            </div>
            <div>
              <ProductSimilar :product="doc" />
            </div>
          </ProductContainer>
        </div>
      </template>
      <template #not-found>
        <LayoutError>404</LayoutError>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
</script>
