<template>
  <footer class="w-full">
    <div
      class="max-w-screen-xl px-5 mx-auto mt-16 mb-8 flex flex-col lg:flex-row items-center justify-between text-slate-500 text-sm">
      <p class="mb-1 lg:mb-0">
        Copyright © thunhap.online {{ new Date().getFullYear() }}
      </p>
      <div>
        <CoreButton href="/changelog" variant="inverted" size="sm">Lịch sử cập nhật</CoreButton>
        <span>-</span>
        <CoreButton href="/sitemap.xml" variant="inverted" size="sm" as="a">Sitemap</CoreButton>
      </div>
    </div>
  </footer>
</template>
