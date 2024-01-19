<script setup lang="ts">
interface IProps {
  icon: string
}
defineProps<IProps>()
</script>

<template>
  <PrimeButton>
    <slot /> {{ icon }}
  </PrimeButton>
</template>
