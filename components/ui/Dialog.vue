<script setup lang="ts">
import Dialog from 'primevue/dialog'
const visible = ref(false)
const set = (value: boolean) => visible.value = value 
const open = () => set(true)
const close = () => set(false)
defineExpose({
  open,
  close
})
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    header="Edit Profile"
    :style="{ width: '25rem' }"
  >
    <slot />
  </Dialog>
</template>
