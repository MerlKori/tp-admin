<script setup lang="ts">
const route = useRoute()
// const entity = route.params.entity as string
console.log(1);
</script>

<template>
  <div>
    test
    query {{  route.query  }}
  </div>
</template>