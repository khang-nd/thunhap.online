<template>
  <LayoutContainer>
    <LandingSectionhead>
      <template #title>{{ title }}</template>
      <template #desc>{{ description }}</template>
    </LandingSectionhead>

    <div class="flex flex-col lg:flex-row gap-3 mx-auto max-w-screen-lg mt-16">
      <div class="flex flex-col gap-4 dark:text-white">
        <label>
          <span class="block mb-2">Title</span>
          <input class="el-input px-1 py-2 w-full min-w-60" v-model="ogTitle" />
        </label>
        <label>
          <span class="block mb-2">Description</span>
          <input class="el-input px-1 py-2 w-full min-w-60" v-model="ogDescription" />
        </label>
        <label>
          <span class="flex items-center mb-2 space-x-1">
            <span>Icon</span>
            <NuxtLink target="_blank" href="https://icones.js.org/collection/all">
              <Icon name="uil:question-circle" size="24" />
            </NuxtLink>
          </span>
          <input class="el-input px-1 py-2 w-full min-w-60" v-model="ogIcon" />
        </label>
        <CoreButton @click="exportImage">Export</CoreButton>
      </div>
      <div class="w-full overflow-auto">
        <div class="mb-2 dark:text-white">Preview</div>
        <div class="overflow-auto border border-black">
          <OgimageDefault ref="ogImage" :icon="ogIcon" :title="ogTitle" :description="ogDescription" />
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
import type { OgimageDefault } from '#build/components';
import { domToBlob } from 'modern-screenshot';

const title = 'OG Image Generator'
const description = 'Generate Open Graph images for your website effortlessly'
const ogIcon = ref('healthicons:money-bag-outline')
const ogTitle = ref('Thu Nhập.online')
const ogDescription = ref('Discover successful online businesses')
const ogImage = ref<InstanceType<typeof OgimageDefault>>()
useHead({
  title,
})

const exportImage = async () => {
  if (!ogImage.value || !ogImage.value.image) return;
  const image = await domToBlob(ogImage.value.image)
  const a = document.createElement('a')
  a.href = URL.createObjectURL(image)
  a.download = 'ogimage.png'
  a.click()
}
</script>
