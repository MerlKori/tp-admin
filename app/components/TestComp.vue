<script setup lang="ts">
interface IProps {
  id: number
}
defineProps<IProps>()
</script>

<template>
  <div>test component {{ id }}</div>
</template>
