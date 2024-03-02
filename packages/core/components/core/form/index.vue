<script setup lang="ts">
// import type { ObjectShape } from 'yup'

import { useFormData } from './useFormData'
import { useValidator } from './useValidator'

import type { IEntityAttr } from '~/types/entity'
import type { IObject } from '~/types/base'

interface IProps {
  entity: string
  schema: Array<IEntityAttr>
  validationSchema?: IObject | Function
}
const props = defineProps<IProps>()
const form = useFormData(props.schema)

const validationSchema = props.validationSchema || {}
const validator = useValidator(
  typeof validationSchema === 'function' ? validationSchema(form) : validationSchema,
  props.entity
)

provide('entity', props.entity)
provide('entitySchema', props.schema)
provide('form', form)
provide('validator', validator)

async function validate () {
  return await validator.validate(form.data)
}

export type IForm = typeof form
export type IFormValidator = typeof validator

defineExpose({
  form,
  validator,
  validate
})
</script>

<template>
  <div class="ui-form">
    isDirty {{ form.isDirty }}
    <slot />
  </div>
</template>
