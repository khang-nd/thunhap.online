<template>
  <LayoutContainer>
    <LandingSectionhead>
      <template #title>{{ title }}</template>
      <template #desc>{{ description }}</template>
    </LandingSectionhead>

    <div class="flex flex-col lg:flex-row gap-6 mx-auto max-w-screen-lg mt-16 mb-32">
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

    <div class="max-w-screen-md mx-auto">
      <CoreHeading class="text-center lg:text-4xl mb-8">Knowledge sharing</CoreHeading>
      <ul class="space-y-4">
        <li v-for="item in knowledgeSharing" :key="item.q"
          class="text-gray-800 dark:text-gray-300 p-6 border dark:border-gray-800">
          <div class="font-bold text-2xl text-black dark:text-white mb-2">{{ item.q }}</div>
          <div>{{ item.a }}</div>
        </li>
      </ul>
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
const knowledgeSharing = [
  {
    q: 'What is an OG image?',
    a: 'An OG image is an image that represents a webpage when shared on social media platforms like Facebook, Twitter, LinkedIn, etc.'
  },
  {
    q: 'Why do I need an OG image?',
    a: 'An OG image helps to increase the click-through rate when your webpage is shared on social media platforms. It also helps to make your webpage look more professional.'
  },
  {
    q: 'What is the recommended size for an OG image?',
    a: 'The recommended size for an OG image is 1200x630 pixels. This size ensures that the image looks good on all social media platforms.'
  },
  {
    q: 'How do I add an OG image to my webpage?',
    a: 'You can add an OG image to your webpage by adding the following meta tag to the head section of your webpage: <meta property="og:image" content="URL of the image">'
  },
  {
    q: 'Can you support more options in the OG Image Generator?',
    a: 'Yes, we can support more if there are more demands. Please contact us via email or reach out to us on X.'
  },
]
useHead({
  title,
  meta: [
    { property: 'og:image', content: `https://cdn.thunhap.online/ogimage/ogimagegen.png` },
  ]
})

const exportImage = async () => {
  if (!ogImage.value || !ogImage.value.image) return;
  const image = await domToBlob(ogImage.value.image)
  const name = ogTitle.value.replace(/ /g, '').toLowerCase()
  const [, ext] = image.type.split('/');
  const a = document.createElement('a')
  a.href = URL.createObjectURL(image)
  a.download = `${name}.${ext}`
  a.click()
}
</script>
