<i18n lang="yaml">
  en:
    title: OG Image Generator
    description: Generate Open Graph images for your website effortlessly
    knowledge-sharing: Knowledge Sharing
    q1: What is an OG image?
    a1: An OG image is an image that represents a webpage when shared on social media platforms like Facebook, Twitter, LinkedIn, etc.
    q2: Why do I need an OG image?
    a2: An OG image helps to increase the click-through rate when your webpage is shared on social media platforms. It also helps to make your webpage look more professional.
    q3: What is the recommended size for an OG image?
    a3: The recommended size for an OG image is 1200x630 pixels. This size ensures that the image looks good on all social media platforms.
    q4: How do I add an OG image to my webpage?
    a4: 'You can add an OG image to your webpage by adding the following meta tag to the head section of your webpage: &lt;meta property="og:image" content="URL of the image"&gt;'
    q5: Can you support more options in the OG Image Generator?
    a5: Yes, we can support more if there are demands. Please contact us via email or reach out to us on X.
  vi:
    title: OG Image Generator
    description: Tạo ảnh Open Graph cho trang web của bạn một cách dễ dàng
    knowledge-sharing: Chia sẻ kiến thức
    q1: Ảnh OG là gì?
    a1: Ảnh OG là ảnh đại diện cho một trang web khi chia sẻ trên các nền tảng mạng xã hội như Facebook, Twitter, LinkedIn, v.v.
    q2: Tại sao tôi cần ảnh OG?
    a2: Ảnh OG giúp tăng tỷ lệ truy cập khi trang web của bạn được chia sẻ trên các nền tảng mạng xã hội. Nó cũng giúp trang web của bạn trở nên chuyên nghiệp hơn.
    q3: Kích thước tiêu chuẩn cho ảnh OG là bao nhiêu?
    a3: Kích thước tiêu chuẩn cho ảnh OG là 1200x630 pixel. Kích thước này đảm bảo rằng ảnh sẽ hiển thị tốt trên tất cả các nền tảng mạng xã hội.
    q4: Làm thế nào để thêm ảnh OG vào trang web của tôi?
    a4: 'Bạn có thể thêm ảnh OG vào trang web của mình bằng cách thêm thẻ meta sau vào phần head của trang web của bạn: &lt;meta property="og:image" content="URL của ảnh"&gt;'
    q5: Bạn có thể hỗ trợ thêm các tùy chọn khác cho OG Image Generator không?
    a5: Có, chúng tôi có thể hỗ trợ thêm nếu có nhu cầu. Vui lòng liên hệ với chúng tôi qua email hoặc thông qua X (Twitter).
</i18n>

<template>
  <LayoutContainer>
    <LandingSectionhead>
      <template #title>{{ title }}</template>
      <template #desc>{{ description }}</template>
    </LandingSectionhead>

    <div class="flex flex-col lg:flex-row gap-6 mx-auto max-w-screen-lg mt-16 mb-32">
      <div class="flex flex-col gap-4 dark:text-white">
        <div>
          <span class="block mb-2 font-semibold">Preset</span>
          <div class="space-x-3">
            <CoreButton :variant="preset === 'default' ? 'primary' : 'outline'" size="md" @click="preset = 'default'">
              Default
            </CoreButton>
            <CoreButton :variant="preset === 'metaframe' ? 'primary' : 'outline'" size="md"
              @click="preset = 'metaframe'">
              MetaFrame
            </CoreButton>
          </div>
        </div>
        <label>
          <span class="block mb-2 font-semibold">Title</span>
          <input class="el-input px-1 py-2 w-full min-w-60" v-model="ogTitle" />
        </label>
        <label>
          <span class="block mb-2 font-semibold">Description</span>
          <input class="el-input px-1 py-2 w-full min-w-60" v-model="ogDescription" />
        </label>
        <label v-if="preset === 'default'">
          <span class="flex items-center mb-2 space-x-1">
            <span class="font-semibold">Icon</span>
            <NuxtLink target="_blank" href="https://icones.js.org/collection/all">
              <Icon name="uil:question-circle" size="24" />
            </NuxtLink>
          </span>
          <input class="el-input px-1 py-2 w-full min-w-60" v-model="ogIcon" />
        </label>
        <label v-if="preset !== 'default'">
          <span class="block mb-2 font-semibold">Theme</span>
          <CoreToggleGroup v-model="ogTheme" :items="themes" />
        </label>
        <CoreButton @click="exportImage">Export</CoreButton>
      </div>
      <div class="w-full overflow-auto">
        <div class="mb-2 dark:text-white font-semibold">Preview</div>
        <div class="overflow-auto border border-black">
          <OgimageDefault v-if="preset === 'default'" ref="ogImage" :icon="ogIcon" :title="ogTitle"
            :description="ogDescription" />
          <OgimageMetaframe v-else-if="preset === 'metaframe'" ref="ogImage" :title="ogTitle"
            :description="ogDescription" :image="ogScreenshot" :theme="ogTheme" @image:change="handleImageChange" />
        </div>
      </div>
    </div>

    <div class="max-w-screen-md mx-auto">
      <CoreHeading class="text-center lg:text-4xl mb-8">{{ t('knowledge-sharing') }}</CoreHeading>
      <ul class="space-y-4">
        <li v-for="item in knowledgeSharing" :key="item.q"
          class="text-gray-800 dark:text-gray-300 p-6 border dark:border-gray-800">
          <div class="font-bold text-2xl text-black dark:text-white mb-2">{{ item.q }}</div>
          <div v-html="item.a" />
        </li>
      </ul>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
import type { OgimageDefault } from '#build/components';
import { domToBlob } from 'modern-screenshot';

type Preset = 'default' | 'metaframe';

const { t } = useI18n()
const title = t('title')
const description = t('description')
const preset = ref<Preset>('default')
const ogIcon = ref('healthicons:money-bag-outline')
const ogTitle = ref('Thu Nhập.online')
const ogDescription = ref('Discover successful online businesses')
const ogScreenshot = ref('')
const ogTheme = ref<'light' | 'dark'>('light')
const ogImage = ref<InstanceType<typeof OgimageDefault>>()
const themes = [
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' },
]
const knowledgeSharing = emptyArray(5).map((_, i) => ({
  q: t(`q${i + 1}`),
  a: t(`a${i + 1}`)
}))
useHead({
  title,
  meta: [
    { property: 'og:image', content: `https://cdn.thunhap.online/ogimage/ogimagegen.png` },
  ]
})

const handleImageChange = (image: string) => {
  ogScreenshot.value = image
}

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
