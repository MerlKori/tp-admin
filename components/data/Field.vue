<script setup lang="ts">
import type { TEntity } from '~/types'
import { UiInputText, UiInputNumber, UiFormItem } from '#components'

interface Props {
  name: string
}

const props = defineProps<Props>()
const entity = inject('entity') as TEntity
const attr = entity.attrs.find(a => a.name === props.name)
const value = ref(null)

const input = computed(() => {
  switch (attr?.dataType) {
    case 'String':
      return {
        cmp: UiInputText
      }
    case 'Number':
      return {
        cmp: UiInputNumber
      }
    // case 'Enum':
    //   return {
    //     cmp: CtrlSelect
    //   }
    // case 'Entity':
    //   return {
    //     cmp: CtrlSelect
    //   }
    // case 'File':
    //   return {
    //     cmp: CtrlFile
    //   }
    default:
      return {
        cmp: 'span'
      }
  }
})
</script>

<template>
  <UiFormItem>
    <component
      :is="input.cmp"
      v-model:value="value"
    />
  </UiFormItem>
</template>
