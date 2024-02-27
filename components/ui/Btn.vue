<script setup lang="ts">
import PrimeButton from 'primevue/button'

type BtnProps = {
  outlined?: boolean
  disabled?: boolean
  icon?: string
  rounded?: boolean
}

defineProps<BtnProps>()
</script>

<template>
  <PrimeButton
    :outlined="outlined"
    :disabled="disabled"
    :icon="icon"
    :rounded="rounded"
  >
    <slot/>
  </PrimeButton>
</template>

<style>
/* .p-button {
  color: #ffffff;
  background: var(--dark-900);
  border: 1px solid var(--primary-dark);
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 6px;
} */
</style>
