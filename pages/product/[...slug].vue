<template>
  <main class="max-w-screen-xl mx-auto pt-16 flex flex-col lg:flex-row">
    <ContentDoc>
      <template #default="{ doc }">
        <ProductContainer as="article">
          <ProductDatetime :timestamp="doc.publishedAt" class="mb-2" />
          <ContentRenderer :value="doc" class="mb-16" />
          <ProductTags :tags="doc.hashtags" />
        </ProductContainer>
        <ProductContainer as="aside" class="lg:max-w-xs">
          <div class="mb-16">
            <ProductOverview :product="doc" />
          </div>
          <!-- <div>
            <CoreHeading as="h3" class="mb-4">Sản phẩm tương tự</CoreHeading>
          </div> -->
        </ProductContainer>
      </template>
      <template #not-found>
        <div class="w-full text-center py-16">
          <h1 class="text-9xl font-bold mb-6">404</h1>
          <CoreParagraph class="mb-6">Oopsie! Trang này không tồn tại.</CoreParagraph>
          <CoreButton href="/">Về trang chủ</CoreButton>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>

<script setup lang="ts">
</script>
