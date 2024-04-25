<template>
  <LayoutContainer>
    <div class="h-screen max-h-[calc(100vh-200px)] relative">
      <iframe :src="'https://app.youform.io/forms/' + formId" width="100%" height="100%" frameborder="0"
        @load="loading = false"></iframe>
      <!-- Skeleton -->
      <div v-if="loading" class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div class="pb-20 flex flex-col items-center">
          <CoreSkeleton class="w-60 h-10 mt-6 mb-8" />
          <CoreSkeleton class="w-screen max-w-lg mb-8" />
          <CoreSkeleton class="w-28 h-11" />
        </div>
      </div>
    </div>
    <!-- <LandingSectionhead>
      <template #title>{{ title }}</template>
<template #desc>Chia sẻ sản phẩm và câu chuyện thành công đến cộng đồng</template>
</LandingSectionhead>
<div class="max-w-4xl mx-auto mt-16">
  <CoreAccordionRoot type="single" default-value="overview">
    <CoreAccordionItem value="overview">
      <template #trigger>
            <button class="w-full">
              <CoreHeading class="flex items-center justify-between">
                <span>Tổng quan</span>
                <Icon name="uil:angle-down" />
              </CoreHeading>
            </button>
          </template>

      <div class="p-6">
        <div class="flex flex-col lg:flex-row">
          <div class="w-full lg:mr-4">
            <SubmitFormField title="Tiêu đề" as="label">
              <input type="text" name="title" maxlength="20" class="input p-2">
            </SubmitFormField>
            <SubmitFormField title="Mô tả ngắn (tối đa 80 ký tự)" as="label">
              <input type="text" name="description" maxlength="80" class="input w-full p-2">
            </SubmitFormField>
          </div>
          <div class="w-full">
            <SubmitFormField title="Hình ảnh" as="label">
              <span
                class="h-64 flex flex-col items-center justify-center cursor-pointer rounded-md transition-colors bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600 border hover:border-gray-300">
                <Icon name="uil:upload" size="32" class="mb-2" />
                <span>Nhấp vào đây để tải lên</span>
                <input type="file" name="image" accept="image/*" hidden>
              </span>
            </SubmitFormField>
          </div>
        </div>
        <div>
          <SubmitFormField title="Phân loại">
            <CoreToggle v-for="(category, key) in categories" :key="key" :value="key"
              class="inline-flex items-center mr-3 mb-3 space-x-2">
              <span>
                <Icon :name="category.icon" />
              </span>
              <span>{{ $t('category.' + key) }}</span>
            </CoreToggle>
          </SubmitFormField>
        </div>
      </div>
    </CoreAccordionItem>
    <CoreAccordionItem value="details">
      <template #trigger>
            <button class="w-full">
              <CoreHeading class="flex items-center justify-between">
                <span>Chi tiết</span>
                <Icon name="uil:angle-down" />
              </CoreHeading>
            </button>
          </template>
      Chi tiết
    </CoreAccordionItem>
    <CoreAccordionItem value="content">
      <template #trigger>
            <button class="w-full">
              <CoreHeading class="flex items-center justify-between">
                <span>Nội dung</span>
                <Icon name="uil:angle-down" />
              </CoreHeading>
            </button>
          </template>
      B
    </CoreAccordionItem>
  </CoreAccordionRoot>
</div> -->
  </LayoutContainer>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const title = "Đăng sản phẩm"
const formId = computed(() => locale.value === "vi" ? "nfqpr6xi" : "nnebnfcq")
const loading = ref(true)
useHead({ title })
</script>
