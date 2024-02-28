<script setup lang="ts">
import UIInputText from './InputText.vue'
import type { IProps as UIIconProps } from './Icon.vue'

const model = defineModel<string>()
const visible = useVisibleState()
const type = computed(() => visible.active.value ? 'text' : 'password')
// const iconName = computed(() => visible.active.value ? 'eye-hide' : 'eye')

const clearIcon = computed(() => {
  return model.value &&
    {
      name: visible.active.value ? 'eye' : 'eye-hide'
    }
})
</script>

<template>
  <UIInputText
    v-model="model"
    :type="type"
    :icon-right="(clearIcon as UIIconProps)"
    @click-right-icon="visible.togle()"
  />
</template>
