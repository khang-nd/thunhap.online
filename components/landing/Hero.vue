<template>
  <div class="flex flex-col lg:flex-row items-center py-16 lg:pt-8 mb-8" @mousemove="handleMousemove">
    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        {{ $t('landing.title') }}
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        {{ $t('landing.description') }}
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <CoreButton href="/browse" class="px-12 py-4 text-xl">
          {{ $t('landing.cta') }}
        </CoreButton>
      </div>
    </div>

    <div class="w-full relative">
      <SvgHeroGraphic class="w-full" />
      <SvgHeroDecor class="w-full absolute top-0 left-0" :mouse-pos="mousePos" />
    </div>
  </div>
</template>

<script setup lang="ts">
const mousePos = ref([0, 0])
const handleMousemove = (e: MouseEvent) => {
  mousePos.value = [e.clientX, e.clientY]
}
</script>
