
<script setup lang="ts">
import { NCollapseTransition } from "naive-ui"

interface Props {
  show: boolean
}

const props = defineProps<Props>()
</script>

<template>
<NCollapseTransition :show="show">
  <slot />
</NCollapseTransition>
</template>
