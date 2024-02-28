<script setup lang="ts">
import InputText from './InputText.vue'
import type { IProps as UIIconProps } from './Icon.vue'
interface IProps {
  error?: boolean
  disabled?: boolean
}
const props = defineProps<IProps>()

const model = defineModel<string>()
const clearIcon = computed(() => {
  return model.value &&
    {
      name: 'close',
      color: '#D13513'
    }
})
function resetValue () {
  model.value = undefined
}
</script>

<template>
  <InputText
    v-model="model"
    v-bind="props"
    :icon-left="{
      name: 'search'
    }"
    placeholder="Search"
    :icon-right="(clearIcon as UIIconProps)"
    @click-right-icon="resetValue"
  />
</template>
