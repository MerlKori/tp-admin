<script setup lang="ts">
import { NSelect } from "naive-ui"

interface ISelectOtion {
  label: string
  value: number | string
  disabled?: boolean
}

interface Props {
  options?: Array<ISelectOtion>
}

const props = defineProps<Props>()

</script>

<template>
  <NSelect v-bind="props" />
</template>
