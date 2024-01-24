<script setup lang="ts">
const val = ref('') 
</script>

<template>
  <div>
    index page
    <UiInputText v-model="val"/>
    {{ val }}
  </div>
</template>
