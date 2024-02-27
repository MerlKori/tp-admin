<script setup lang="ts">
const nav = useNavigation()
</script>

<template>
  <PrimeMenu :model="nav.items" />
</template>
