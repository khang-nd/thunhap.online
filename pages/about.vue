<i18n lang="yaml">
  vi:
    title: Giới thiệu
    description: Trang tổng hợp và chia sẻ các sản phẩm online thành công
    purpose: Mục đích
    purpose-content:
      Trong thời đại công nghệ đang phát triển như hiện nay, việc tạo ra một sản phẩm online không còn là điều quá khó
      khăn. Tuy nhiên, việc tạo ra một sản phẩm online thành công, đem lại thu nhập ổn định và bền vững lại không hề dễ dàng.
      Đó là lý do {0} ra đời, với mục tiêu tổng hợp và chia sẻ các sản phẩm online thành công, tạo nguồn cảm hứng, kinh nghiệm
      và kiến thức, giúp bạn có thể tìm cho mình cách tạo ra một sản phẩm online thành công tương tự.
    target: Đối tượng
    target-content:
      "{0} tổng hợp các sản phẩm online đã và đang thành công, đạt được con số ấn tượng về doanh thu, lượng truy cập, người dùng...
      Đào sâu vào cách thức hoạt động, mô hình phát triển, tạo ra giá trị, cũng như cách tiếp cận người dùng để đem lại thành công cho sản phẩm."
    target-content-2:
      Đối tượng sản phẩm online được tổng hợp tương đối đa dạng, bao gồm dự án cá nhân, dịch vụ, ứng dụng, website,
      SaaS... được thành lập bởi các cá nhân như indie maker, bootstrapper, solopreneur...
    disclaimer: Từ chối trách nhiệm
    disclaimer-content:
      Các thông tin về doanh thu, lượng truy cập, người dùng, mô hình phát triển, cách tiếp cận người dùng... được
      tổng hợp và chia sẻ trên {0} mang tính chất tham khảo, không đại diện cho bất kỳ cam kết hay bảo đảm nào.
      Mọi quyết định và hành động dựa trên thông tin mà trang cung cấp hoàn toàn là trách nhiệm của bạn.
    contact: Liên hệ
    contact-content: "Bạn muốn trao đổi, góp ý, hay đăng sản phẩm? Hãy liên hệ với chúng tôi qua email hoặc gửi thông tin qua mẫu sau:"
    address: Thành phố Hồ Chí Minh, Việt Nam
  en:
    title: About
    description: Discover successful online businesses, learn and get inspired
    purpose: Purpose
    purpose-content:
      In the current technology era, creating an online product is no longer a difficult task. However, creating a successful
      online product that brings stable and sustainable income is not easy. That's why {0} was born, with the goal of curating
      and sharing successful online products, creating inspiration, experience and knowledge, helping you find a way to achieve a similar success.
    target: Target
    target-content:
      "{0} curates successful online products that have achieved impressive figures in revenue, traffic, users...
      Delve into how they operate, develop models, create value, and approach users to bring success to the product."
    target-content-2:
      The target of online products is relatively diverse, including personal projects, services, applications, websites,
      SaaS... established by individuals such as indie makers, bootstrappers, solopreneurs...
    disclaimer: Disclaimer
    disclaimer-content:
      Information about revenue, traffic, users, development model, user approach... curated and shared on {0}
      is for reference only, not representing any commitment or warranty. All decisions and actions based on the information
      that the site provides are entirely your responsibility.
    contact: Contact
    contact-content: "Do you want to exchange, give feedback, or submit a product? Contact us via email or send information through the form below:"
    address: Ho Chi Minh City, Vietnam
</i18n>

<template>
  <LayoutContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ title }}</template>
      <template v-slot:desc>{{ t('description') }}</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <CoreHeading>
        {{ t('purpose') }}
      </CoreHeading>
      <CoreParagraph>
        <i18n-t keypath="purpose-content">
          <span class="font-bold">{{ $t('common.sitename') }}</span>
        </i18n-t>
      </CoreParagraph>

      <CoreHeading>
        {{ t('target') }}
      </CoreHeading>
      <CoreParagraph>
        <i18n-t keypath="target-content">
          <span class="font-bold">{{ $t('common.sitename') }}</span>
        </i18n-t>
      </CoreParagraph>
      <CoreParagraph>
        {{ t('target-content-2') }}
      </CoreParagraph>

      <CoreHeading>
        {{ t('disclaimer') }}
      </CoreHeading>
      <CoreParagraph>
        <i18n-t keypath="disclaimer-content">
          <span class="font-bold">{{ $t('common.sitename') }}</span>
        </i18n-t>
      </CoreParagraph>

      <CoreHeading>
        {{ t('contact') }}
      </CoreHeading>
      <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl">
        <div>
          <CoreParagraph>
            {{ t('contact-content') }}
          </CoreParagraph>
          <div class="mt-5">
            <div class="flex items-center mb-3 space-x-2 text-gray-500">
              <Icon size="20" name="uil:map-marker" />
              <span>{{ t('address') }}</span>
            </div>
            <a :href="contactLinks.email.url"
              class="flex items-center mb-3 space-x-2 text-gray-500 hover:text-black transition-colors">
              <Icon size="20" name="uil:envelope" />
              <span>{{ contactLinks.email.text }}</span>
            </a>
            <a :href="contactLinks.twitter.url" target="_blank"
              class="flex items-center space-x-2 text-gray-500 hover:text-black transition-colors">
              <Icon size="20" name="uil:twitter" />
              <span>{{ contactLinks.twitter.text }}</span>
            </a>
          </div>
        </div>
        <div>
          <LandingContactform />
        </div>
      </div>
    </div>
  </LayoutContainer>
</template>

<script setup>
const { t } = useI18n();
const title = computed(() => t('title'))
useHead({ title })
</script>
