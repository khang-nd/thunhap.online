<template>
  <CoreButton variant="inverted" href="https://twitter.com/_khangnd" target="_blank"
    class="fixed bottom-0 right-0 flex items-center space-x-2 group overflow-hidden">
    <span>@_khangnd</span>
    <Icon name="mdi:hand-wave-outline" size="20" class="group-hover:animate-[wave_0.8s_infinite]" />
  </CoreButton>
</template>

<style>
@keyframes wave {
  0% {
    transform: rotate(0deg) translateX(0) translateY(0);
  }

  50% {
    transform: rotate(15deg) translateX(4px) translateY(2px);
  }
}
</style>
