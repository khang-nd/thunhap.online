<template>
  <CorePopover>
    <template #trigger>
      <CoreButton variant="inverted" class="flex items-center space-x-2 hover:bg-gray-100 p-2">
        <Icon name="uil:share-alt" />
        <span>{{ $t('common.share') }}</span>
      </CoreButton>
    </template>

    <div class="grid grid-cols-4 gap-2">
      <CoreButton variant="custom" class="el-share-button" @click="copyLink">
        <Icon :name="done ? 'uil:check' : 'uil:link-h'" size="24" />
      </CoreButton>
      <SocialShare network="facebook" class="el-share-button" />
      <SocialShare network="twitter" class="el-share-button" />
      <SocialShare network="reddit" class="el-share-button" />
      <SocialShare network="linkedin" class="el-share-button" />
      <SocialShare network="pinterest" class="el-share-button" />
      <SocialShare network="telegram" class="el-share-button" />
      <SocialShare network="bluesky" class="el-share-button" />
    </div>
  </CorePopover>
</template>

<script setup lang="ts">
const done = ref(false)
const copyLink = () => {
  navigator.clipboard.writeText(window.location.href)
  done.value = true
}
watch(() => done.value, () => {
  if (done.value) setTimeout(() => (done.value = false), 1000)
})
</script>
