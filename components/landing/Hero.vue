<template>
  <div class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        {{ $t('landing.title') }}
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        {{ $t('landing.description') }}
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <CoreButton href="/browse">
          {{ $t('landing.cta') }}
        </CoreButton>
      </div>
    </div>

    <div class="lg:p-16">
      <img src="~/assets/img/hero.png" alt="Starship starts the engine" loading="eager" format="avif" width="512"
        height="512" />
    </div>
  </div>
</template>
