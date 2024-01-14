<script setup lang="ts">

const api = useApi()

 async function onSelect (event: Event) {
  try {
    const [file] = (event.target as HTMLInputElement).files as FileList
    console.log(file)
    const formData = new FormData()
    formData.append('file', file, file.name)
    formData.append('payload', JSON.stringify({
      entity: 'Brand'
    }))
    const response = await api.uploadFile(formData)
    console.log(response);
    /* {
  "id": "9d65a26dc00d4210967c0d57650ed636",
  "ext": "jpg",
  "ct": "image/jpeg"
} */
  } catch (error) {
    console.error(error)
  }
 }
</script>

<template>
  <label class="ctrl-file">
    <input
      type="file"
      hidden
      @change="onSelect"
    >
    Choose file
  </label>
</template>

<style>
.ctrl-file {
  display: block;
  width: 200px;
  height: 70px;
  border: var(--border);
}
</style>
