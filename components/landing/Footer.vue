<template>
  <footer class="max-w-screen-xl mx-auto px-5 mt-16 mb-8 flex items-center justify-between text-slate-500">
    <p class="text-sm">
      Copyright © thunhap.online {{ new Date().getFullYear() }}
    </p>
    <div>
      <CoreButton href="/changelog" variant="inverted" size="sm">Lịch sử cập nhật</CoreButton>
      <span>-</span>
      <CoreButton href="/sitemap.xml" variant="inverted" size="sm">Sitemap</CoreButton>
    </div>
  </footer>
</template>
