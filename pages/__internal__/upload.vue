<template>
  <LayoutContainer>
    <div class="dark:text-white mb-4">
      <span>Folder: </span>
      <label>
        <input type="radio" name="folder" value="product" v-model="folder" /> product
      </label>
      <label>
        <input type="radio" name="folder" value="ogimage" v-model="folder" /> ogimage
      </label>
    </div>
    <label
      class="relative h-64 flex flex-col items-center justify-center cursor-pointer rounded-md transition-colors bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-600 border hover:border-gray-300">
      <Icon name="uil:upload" size="32" class="mb-2" />
      <span>Click here to browse</span>
      <input type="file" name="image" accept="image/*" class="absolute w-full h-full top-0 left-0"
        @change="handleChange">
    </label>
    <CoreButton @click="uploadFile">Upload</CoreButton>
  </LayoutContainer>
</template>

<script setup lang="ts">
defineI18nRoute(false)

const file = ref<File>();
const folder = ref('product')

const handleChange = (e: Event) => {
  const fileInput = e.target as HTMLInputElement;
  if (!fileInput.files || fileInput.files.length === 0) return;
  file.value = fileInput.files[0];
}

const uploadFile = async () => {
  const formData = new FormData();
  formData.append('file', file.value as File);
  formData.append('folder', folder.value)
  const { data, error } = await useFetch('/api/upload', {
    method: 'POST',
    headers: { contentType: 'multipart/form-data' },
    body: formData
  })

  if (!error.value) {
    console.log(data.value)
    alert('File uploaded successfully')
  }
}
</script>
