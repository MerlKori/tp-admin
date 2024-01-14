<script setup lang="ts">
import { NInput } from "naive-ui"

interface Props {
  type?: 'text' | 'password' | 'textarea'
}

const props = withDefaults(defineProps<Props>(), {

})
</script>

<template>
  <NInput
    v-bind="props"
  >

  </NInput>
</template>
