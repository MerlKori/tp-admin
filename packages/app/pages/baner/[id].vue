<script setup lang="ts">
const { $api } = useNuxtApp()
const route = useRoute()
const instanceID = route.params.id ? Number(route.params.id) : undefined
</script>

<template>
  <CoreEntityForm
    :entity="$api.baner"
    :instance-id="instanceID"
  >
    <CoreAutoField name="name" />
  </CoreEntityForm>
</template>
