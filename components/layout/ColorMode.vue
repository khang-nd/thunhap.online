<template>
  <CorePopover>
    <template #trigger>
      <CoreButton variant="custom" class="el-link min-w-9 p-2" aria-label="Color mode">
        <ClientOnly>
          <Icon :name="icon" size="20" />
          <template #fallback>
            <Icon name="uil:desktop" size="20" />
          </template>
        </ClientOnly>
      </CoreButton>
    </template>

    <div class="flex gap-2">
      <CoreToggleGroup v-model="colorMode.preference" :items="colorModeOptions" />
    </div>
  </CorePopover>
</template>

<script setup lang="ts">
const { t } = useI18n()
const colorMode = useColorMode()
const colorModeOptions = [
  { value: 'system', label: t('common.system'), icon: 'uil:desktop' },
  { value: 'light', label: t('common.light'), icon: 'mdi:lightbulb-outline' },
  { value: 'dark', label: t('common.dark'), icon: 'mdi:lightbulb-off' },
]
const icon = computed(() => colorModeOptions.find((option) => option.value === colorMode.preference)?.icon as string)
</script>
