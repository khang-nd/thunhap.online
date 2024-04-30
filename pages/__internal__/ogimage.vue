<template>
  <LayoutContainer>
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
        <CoreButton @click="exportImage">Upload</CoreButton>
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

defineI18nRoute(false)

const ogIcon = ref('healthicons:money-bag-outline')
const ogTitle = ref('Thu Nhập.online')
const ogDescription = ref('Discover successful online businesses')
const ogImage = ref<InstanceType<typeof OgimageDefault>>()

const exportImage = async () => {
  if (!ogImage.value || !ogImage.value.image) return;
  const image = await domToBlob(ogImage.value.image)
  const name = ogTitle.value.replace(/ /g, '').toLowerCase()
  const type = image.type;
  const [, ext] = type.split('/');
  const formData = new FormData();
  formData.append('file', new File([image], `${name}.${ext}`, { type }));
  formData.append('folder', 'ogimage')
  const { data, error } = await useFetch('/api/upload', {
    method: 'POST',
    headers: { contentType: 'multipart/form-data' },
    body: formData
  })

  if (!error.value) {
    console.log(data.value)
    alert('File uploaded successfully')
  }
}
</script>
