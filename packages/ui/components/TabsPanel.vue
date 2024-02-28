<script setup lang="ts">
import { inject, ref, onBeforeMount, watch } from 'vue'

interface IProps {
  title: string
}

const props = defineProps<IProps>()

const addTab = inject<any>('addTab')
const activeTabHash = inject<any>('activeTabHash')

const hash = ref('')
const isActive = ref(false)

onBeforeMount(() => {
  hash.value = `$${props.title.toLowerCase().replace(/ /g, '-')}`

  addTab({
    title: props.title,
    hash: hash.value
  })
})

watch(activeTabHash, () => {
  isActive.value = activeTabHash.value === hash.value
})
</script>

<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>
