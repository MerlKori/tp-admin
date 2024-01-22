<script setup lang="ts">
import { PrimeButton } from '#components'

defineProps<{ icons: string }>()
</script>

<template>
  <PrimeButton>
    <slot/>
  </PrimeButton>
</template>
