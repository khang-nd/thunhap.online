<template>
  <LayoutContainer>
    <div class="mx-auto max-w-screen-lg mt-16 mb-32 dark:text-gray-300">
      <div class="flex items-center justify-center space-x-4 mb-6">
        <input ref="input" type="text" class="el-input p-4" placeholder="Product Page URL" v-model="url"
          @focus="selectAll" />
        <CoreButton variant="outline" @click="summarize('Facebook')" :loading="loading === 'Facebook'" class="min-w-32">
          Facebook
        </CoreButton>
        <CoreButton variant="outline" @click="summarize('Twitter')" :loading="loading === 'Twitter'" class="min-w-32">
          Twitter
        </CoreButton>
      </div>
      <div class="flex justify-center mb-6">
        <Icon name="uil:angle-double-down" size="64" />
      </div>
      <div class="flex justify-center mb-6">
        <textarea class="el-input p-4 h-80 w-full" v-model="result"></textarea>
      </div>
      <div>
        <CoreButton class="block mx-auto" @click="copy">Copy</CoreButton>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
type Platform = 'Facebook' | 'Twitter'

const input = ref<HTMLInputElement>()
const url = ref('')
const result = ref('')
const loading = ref<Platform>()

const summarize = async (platform: Platform) => {
  loading.value = platform
  const { data, error } = await useFetch('/api/__internal__/summary?url=' + url.value + '&platform=' + platform)
  if (error.value) {
    result.value = error.value?.message || 'An error occurred. Please try again later.'
  } else {
    result.value = data.value?.parts[0].text as string
  }
  loading.value = undefined
}

const copy = () => {
  navigator.clipboard.writeText(result.value)
}

const selectAll = () => {
  setTimeout(() => input.value?.select(), 0)
}
</script>
