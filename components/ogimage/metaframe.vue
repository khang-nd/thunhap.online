<template>
  <div ref="ogImage" class="w-[1200px] h-[630px] relative overflow-hidden" :class="isDark ? 'bg-black' : 'bg-white'">

    <div class="text-center pt-12 pb-10">
      <h1 class="text-5xl font-bold mb-4" :class="isDark ? 'text-white' : 'text-black'">{{ title }}</h1>
      <p class="text-3xl px-24" :class="isDark ? 'text-slate-300' : 'text-slate-600'">{{ description }}</p>
    </div>

    <div class="w-[1000px] h-full mx-auto">
      <img v-if="image" :src="image" :alt="title" class="border-4 object-cover mx-auto"
        :class="isDark ? 'border-gray-500' : 'border-gray-800'" />
      <label v-else class="group relative border-4 border-dashed w-full h-full block transition-colors"
        :class="isDark ? 'border-gray-600 hover:border-gray-400' : 'border-gray-300 hover:border-gray-500'">
        <Icon name="uil:upload" size="96" class="mt-40 mx-auto transition-colors"
          :class="isDark ? 'text-gray-500 group-hover:text-gray-300' : 'text-gray-400 group-hover:text-gray-600'" />
        <input type="file" class="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer" @change="readFile" />
      </label>
    </div>

    <div class="flex items-center justify-center absolute top-0 left-0 p-3 opacity-80"
      :class="isDark ? 'text-white' : ''">
      <Icon name="healthicons:money-bag-outline" size="32" />
      <div class="text-lg">
        <span class="font-bold">Thu Nhập</span>
        <span>.online</span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
const ogImage = ref<HTMLDivElement>()
const emit = defineEmits<{
  (e: 'image:change', arg: string): void
}>()
defineExpose({ image: ogImage })
const props = defineProps<{
  title: string
  image: string
  description: string
  theme?: 'light' | 'dark'
}>()

const isDark = computed(() => props.theme === 'dark')

const readFile = (e: Event) => {
  const target = e.target as HTMLInputElement
  const [file] = target.files || []
  if (!file) return
  const reader = new FileReader()
  reader.onload = () => emit('image:change', reader.result as string)
  reader.readAsDataURL(file)
}
</script>
