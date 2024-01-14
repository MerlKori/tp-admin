<script setup lang="ts">
import CtrlInput from './ctrl/Input.vue'
import CtrlInputNumber from './ctrl/InputNumber.vue'
import CtrlSelect from './ctrl/Select.vue'
import CtrlFile from './ctrl/File.vue'
import type { TEntityForm } from './entity-form/index.vue';

interface Props {
  name: string
}

const props = defineProps<Props>()

const form = inject('form') as TEntityForm
const entitySchema = inject('entitySchema') as IEntitySchema

const attrData = entitySchema.attributes.find(a => a.name === props.name)
const attrValue = form.defineField(props.name)
const input = computed(() => {
  const attr = attrData
  switch (attr?.dataType) {
    case 'String':
      return {
        cmp: CtrlInput
      }
    case 'Number':
      return {
        cmp: CtrlInputNumber
      }
    case 'Enum':
      return {
        cmp: CtrlSelect
      }
    case 'Entity':
      return {
        cmp: CtrlSelect
      }
    case 'File':
      return {
        cmp: CtrlFile
      }
    default:
      return {
        cmp: 'span'
      }
  }
})
</script>

<template>
<CtrlFormItem :label="attrData?.name">
  <component
    :is="input.cmp"
    v-model:value="attrValue"
  />
</CtrlFormItem>
</template>
