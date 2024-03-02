<script setup lang="ts">
const { $api } = useNuxtApp()
</script>

<template>
  <div>
    <CoreEntityTable
      :entity="$api.baner"
    />
  </div>
</template>
