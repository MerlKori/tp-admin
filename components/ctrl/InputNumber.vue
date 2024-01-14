<script setup lang="ts">
import { NInputNumber } from "naive-ui"

interface Props {
  min?: number
  max?: number
}

const props = withDefaults(defineProps<Props>(), {

})
</script>

<template>
  <NInputNumber
    v-bind="props"
  >

  </NInputNumber>
</template>
