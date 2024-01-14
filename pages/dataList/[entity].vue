<script setup lang="ts">
// definePageMeta({
//   middleware: ['auth']
// })

const route = useRoute()
const entity = route.params.entity as string
</script>

<template>
  <EntityTable
    :entity="entity"
  />
</template>
