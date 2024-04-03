<i18n lang="yaml">
  vi:
    fullname: Họ tên
    email: Email
    message: Nội dung tin nhắn
    send: Gửi
    sending: Đang gửi...
    required: Vui lòng điền thông tin
    invalid: Email không hợp lệ
  en:
    fullname: Full name
    email: Email
    message: Message content
    send: Send
    sending: Sending...
    required: Please fill in the information
    invalid: Invalid email
</i18n>

<template>
  <form action="https://api.web3forms.com/submit" method="POST" id="form" class="needs-validation" novalidate>
    <input type="hidden" name="access_key" value="886a8f51-1bbe-490f-b4bd-ecf7d21a17e0" />
    <input type="checkbox" class="hidden" style="display: none" name="botcheck" />
    <div class="mb-5">
      <input type="text" :placeholder="t('fullname')" required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"
        name="name" />
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        {{ t('required') }}
      </div>
    </div>
    <div class="mb-5">
      <label for="email_address" class="sr-only">{{ t('email') }}</label>
      <input id="email_address" type="email" :placeholder="t('email')" name="email" required
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100" />
      <div class="empty-feedback text-red-400 text-sm mt-1">
        {{ t('required') }}
      </div>
      <div class="invalid-feedback text-red-400 text-sm mt-1">
        {{ t('invalid') }}
      </div>
    </div>
    <div class="mb-3">
      <textarea name="message" required :placeholder="t('message')"
        class="w-full px-4 py-3 border-2 placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100"></textarea>
      <div class="empty-feedback invalid-feedback text-red-400 text-sm mt-1">
        {{ t('required') }}
      </div>
    </div>
    <CoreButton type="submit" size="lg" class="w-full">{{ t('send') }}</CoreButton>
    <div id="result" class="mt-3 text-center"></div>
  </form>
</template>

<script setup>
const { t } = useI18n();
onMounted(() => {
  const form = document.getElementById("form");
  const result = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.classList.add("was-validated");
    if (!form.checkValidity()) {
      form.querySelectorAll(":invalid")[0].focus();
      return;
    }
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.innerHTML = t('sending');

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.classList.add("text-green-500");
          result.innerHTML = json.message;
        } else {
          console.log(response);
          result.classList.add("text-red-500");
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        form.classList.remove("was-validated");
        setTimeout(() => {
          result.style.display = "none";
        }, 5000);
      });
  });
});
</script>

<style>
.invalid-feedback,
.empty-feedback {
  display: none;
}

.was-validated :placeholder-shown:invalid~.empty-feedback {
  display: block;
}

.was-validated :not(:placeholder-shown):invalid~.invalid-feedback {
  display: block;
}

.is-invalid,
.was-validated :invalid {
  border-color: #dc3545;
}
</style>
