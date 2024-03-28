<template>
  <LayoutContainer>
    <LandingSectionhead>
      <template v-slot:title>{{ title }}</template>
      <template v-slot:desc>Trang tổng hợp và chia sẻ các sản phẩm online thành công</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <CoreHeading>
        Mục đích
      </CoreHeading>
      <CoreParagraph>
        Trong thời đại công nghệ đang phát triển như hiện nay, việc tạo ra một sản phẩm online không còn là điều quá khó
        khăn. Tuy nhiên, việc tạo ra một sản phẩm online thành công, đem lại thu nhập ổn định và bền vững lại không hề
        dễ dàng. Đó là lý do <span class="font-bold">Thu Nhập Online</span> ra đời, với mục tiêu tổng hợp và chia sẻ
        các sản phẩm online thành công, tạo nguồn cảm hứng, kinh nghiệm và kiến thức, giúp bạn có thể tìm cho mình cách
        tạo ra một sản phẩm online thành công tương tự.
      </CoreParagraph>

      <CoreHeading>
        Đối tượng
      </CoreHeading>
      <CoreParagraph>
        <span class="font-bold">Thu Nhập Online</span> tổng hợp các sản phẩm online đã và đang thành công, đạt được con
        số ấn tượng về doanh thu, lượng truy cập, người dùng... Đào sâu vào cách thức hoạt động, mô hình phát triển, tạo
        ra giá trị, cũng như cách tiếp cận người dùng để đem lại thành công cho sản phẩm.
      </CoreParagraph>
      <CoreParagraph>
        Đối tượng sản phẩm online được tổng hợp tương đối đa dạng, bao gồm dự án cá nhân, dịch vụ, ứng dụng, website,
        SaaS... được thành lập bởi các cá nhân như indie hacker, bootstrapper, solopreneur...
      </CoreParagraph>

      <CoreHeading>
        Từ chối trách nhiệm
      </CoreHeading>
      <CoreParagraph>
        Các thông tin về doanh thu, lượng truy cập, người dùng, mô hình phát triển, cách tiếp cận người dùng... được
        tổng hợp và chia sẻ trên <span class="font-bold">Thu Nhập Online</span> chỉ mang tính chất tham khảo, không đại
        diện cho bất kỳ cam kết hay bảo đảm nào. Mọi quyết định và hành động dựa trên thông tin mà trang cung cấp hoàn
        toàn là trách nhiệm của bạn.
      </CoreParagraph>

      <CoreHeading>
        Liên hệ
      </CoreHeading>
      <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl">
        <div>
          <CoreParagraph>
            Bạn muốn trao đổi, góp ý, hay đăng sản phẩm? Hãy liên hệ với chúng tôi qua email hoặc gửi thông tin qua mẫu
            sau:
          </CoreParagraph>
          <div class="mt-5">
            <div class="flex items-center mt-2 space-x-2 text-gray-600">
              <Icon class="text-gray-400 w-4 h-4" name="uil:map-marker" />
              <span>Thành phố Hồ Chí Minh, Việt Nam</span>
            </div>
            <div class="flex items-center mt-2 space-x-2 text-gray-600">
              <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /><a
                href="mailto:hello@thunhap.online">hello@thunhap.online</a>
            </div>
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
const title = "Giới thiệu";
useHead({ title })
</script>
