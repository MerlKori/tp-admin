<script setup lang="ts">
import { h } from 'vue'
import type { DefineComponent } from 'vue'
import UIFormRow from '../ui/FormRow.vue'
import UIInput from '../ui/input/index.vue'
import UICheckbox from '../ui/Checkbox.vue'

import type { IEntityAttr } from '~core/types/entity'
import type { IForm, IFormValidator } from './form/index.vue'

type TComponent = string | DefineComponent<{}, {}, any>

interface IProps {
  name: string,
  label?: string
  disabled?: boolean
  required?: boolean
  forceCmp?: TComponent
  description?: string
}

const props = defineProps<IProps>()
const entitySchema = inject<Array<IEntityAttr>>('entitySchema')
const form = inject<IForm>('form')
const entity = inject<string>('entity')
const validator = inject<IFormValidator>('validator')
const attr = entitySchema?.find(i => i.name === props.name)
const hasValidator = Object.hasOwn((validator?.errors || {}), attr?.name as PropertyKey)

function buildFieldWithWrap (cmp: TComponent) {
  return h(UIFormRow,
    null,
    {
      default: () => h(cmp, {
        modelValue: form?.data[props.name],
        'onUpdate:modelValue': (value: any) => {
          form?.setData({ [props.name]: value })
          if (hasValidator && validator) validator.validateProp(props.name, value)
        }
      })
    }
  )
}

function renderCheckbox (props: IProps) {
  return h(UICheckbox,
    {
      modelValue: form?.data[props.name] as boolean,
      'onUpdate:modelValue': (value: any) => {
        form?.setData({ [props.name]: value })
        if (hasValidator && validator) validator.validateProp(props.name, value)
      }
    }
  )
}

const input = computed(() => {
  if (props.forceCmp) return buildFieldWithWrap(props.forceCmp)

  switch (attr?.dataType) {
    case 'String':
      return buildFieldWithWrap(UIInput)
    // case 'Number':
    //   return {
    //     cmp: CtrlInputNumber
    //   }
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
    case 'Boolean':
      return renderCheckbox(props)
    default:
      return 'span'
  }
})
</script>

<template>
  <component
    :is="input"
    :label="$t(props.label || `${entity}.${attr?.name}`)"
    :error="validator?.errors[attr?.name as string]"
    :required="attr?.reuired || props.required"
    :description="props.description"
    :disabled="props.disabled"
  />
</template>
