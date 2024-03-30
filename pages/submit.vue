<template>
  <LayoutContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ title }}</template>
      <template v-slot:desc>Chia sẻ sản phẩm và câu chuyện thành công đến cộng đồng</template>
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
                  <span>{{ category.title }}</span>
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

          <div>
            <label class="block mb-4">
              <span class="block mb-2">Tình trạng</span>
            </label>
          </div>
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
      <h2>Overview Section</h2>
      <form action="/submit" method="post" enctype="multipart/form-data">
        <label for="revenue">Revenue ($):</label><br>
        <input type="number" id="revenue" name="revenue"><br><br>

        <h3>Revenue Model:</h3>
        <label><input type="checkbox" name="revenue_model" value="subscription"> Subscription</label><br>
        <label><input type="checkbox" name="revenue_model" value="advertising"> Advertising</label><br>
        <label><input type="checkbox" name="revenue_model" value="transaction"> Transaction</label><br>
        <label><input type="checkbox" name="revenue_model" value="sponsorship"> Sponsorship</label><br>
        <label><input type="checkbox" name="revenue_model" value="affiliate"> Affiliate</label><br><br>

        <label for="founded_year">Founded Year:</label><br>
        <input type="number" id="founded_year" name="founded_year"><br><br>

        <label for="founder_name">Founder Name:</label><br>
        <input type="text" id="founder_name" name="founder_name"><br><br>

        <label for="founder_website">Founder Website:</label><br>
        <input type="text" id="founder_website" name="founder_website"><br><br>

        <label for="homepage">Homepage:</label><br>
        <input type="text" id="homepage" name="homepage"><br><br>

        <h2>Detail Section</h2>

        <label for="intro">Introduction:</label><br>
        <textarea id="intro" name="intro" rows="4" cols="50"></textarea><br><br>

        <label for="revenue_model_detail">Revenue Model:</label><br>
        <textarea id="revenue_model_detail" name="revenue_model_detail" rows="4" cols="50"></textarea><br><br>

        <label for="marketing_strategy">Marketing Strategy:</label><br>
        <textarea id="marketing_strategy" name="marketing_strategy" rows="4" cols="50"></textarea><br><br>

        <label for="other_info">Other Information:</label><br>
        <textarea id="other_info" name="other_info" rows="4" cols="50"></textarea><br><br>

        <input type="submit" value="Submit">
      </form>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
const title = "Đăng sản phẩm"
useHead({ title })
</script>
