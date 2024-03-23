<template>
  <ProseA :href="data[id].url" target="_blank">{{ data[id].title }}</ProseA>
</template>

<script setup lang="ts">
type PlatformId = 'playstore' | 'lmsqueezy' | 'stripe' | 'paddle' | 'apple'

const data: Record<PlatformId, { title: string, url: string }> = {
  playstore: { title: 'Google Play Billing', url: 'https://developer.android.com/google/play/billing' },
  lmsqueezy: { title: 'Lemon Squeezy', url: 'https://lemonsqueezy.com/' },
  stripe: { title: 'Stripe', url: 'https://stripe.com' },
  paddle: { title: 'Paddle', url: 'https://paddle.com' },
  apple: { title: 'App Store', url: 'https://www.apple.com' }
}

defineProps<{ id: PlatformId }>()
</script>
