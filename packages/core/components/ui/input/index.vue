<script setup lang="ts">
import InputText from './text.vue'
import InputTextarea from './textarea.vue'

interface IProps {
  type?: 'text' | 'textarea'
}
const props = withDefaults(defineProps<IProps>(), {
  type: 'text'
})

const cmp = computed(() => {
  switch (props.type) {
    case 'text':
      return InputText
    case 'textarea':
      return InputTextarea

    default:
      return 'span'
  }
})

const model = defineModel<string | number>()
</script>

<template>
  <div>
    <component
      :is="cmp"
      v-model="model"
    />
  </div>
</template>
