<script setup lang="ts">
import { NButton } from "naive-ui"

interface Props {
  disabled?: boolean
  type?: 'default' | 'tertiary' | 'primary' | 'success' | 'info' | 'warning' | 'error',
  circle?: boolean

}

const props = withDefaults(defineProps<Props>(), {

})
</script>

<template>
  <NButton v-bind="props">
    <template #icon>
      <slot name="icon" />
    </template>
    <slot />
  </NButton>
</template>
