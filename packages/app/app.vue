<script setup lang="ts">
import AppPreloader from './components/AppPreloader.vue'
</script>

<template>
  <div>
    <AppPreloader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
