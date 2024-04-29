<template>
  <LayoutContainer>
    <CoreButton @click="capture">Capture</CoreButton>

    <div v-if="icon && title && description" ref="image"
      class="bg-white border border-black w-[1200px] h-[630px] relative">
      <div class="flex items-center justify-center h-full max-w-[1000px] mx-auto">
        <Icon :name="icon" size="300" class="shrink-0" />
        <div class="ml-6">
          <h1 class="text-8xl font-bold mb-4">{{ title }}</h1>
          <p class="text-5xl leading-[130%] text-slate-600">{{ description }}</p>
        </div>
      </div>

      <Icon name="tdesign:chart-analytics" size="120" class="absolute top-8 left-16 opacity-10" />
      <Icon name="system-uicons:coins" size="130" class="absolute top-8 right-80 opacity-10" />
      <Icon name="system-uicons:coins" size="90" class="absolute bottom-24 left-80 opacity-10" />
      <Icon name="grommet-icons:analytics" size="80" class="absolute bottom-8 left-16 opacity-10" />
      <Icon name="pepicons-pop:internet" size="90" class="absolute top-20 right-20 opacity-10" />
      <Icon name="pepicons-pop:internet" size="80" class="absolute bottom-11 left-1/2 opacity-10" />
      <Icon name="akar-icons:coin" size="80" class="absolute top-44 left-1/3 opacity-10 -rotate-45" />
      <Icon name="akar-icons:coin" size="130" class="absolute bottom-12 right-16 opacity-10 rotate-45" />
      <Icon name="icon-park:chart-line" size="80" class="absolute top-1/2 left-2/3 opacity-10" />
    </div>

    <div v-else class="dark:text-white text-3xl">
      Missing required query params (icon, title, description)
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
import { domToBlob, } from 'modern-screenshot'

interface Props {
  icon: string
  title: string
  description: string
}

const route = useRoute()
const image = ref()
const { icon, title, description } = route.query as Partial<Props>;

const capture = async () => {
  const ogimage = await domToBlob(image.value, { quality: 1 })
  const type = ogimage.type;
  const [, ext] = type.split('/');
  const formData = new FormData();
  formData.append('file', new File([ogimage], `${title?.toLowerCase()}.${ext}`, { type }));
  formData.append('folder', 'ogimage')
  const { data, error } = await useFetch('/api/product/upload', {
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
