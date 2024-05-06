<template>
  <div class="flex flex-col justify-between pt-[--navheight]" :style="{ '--navheight': NAV_HEIGHT + 'px' }">
    <LayoutNavbar />
    <slot />
    <LayoutFooter />
  </div>
</template>
