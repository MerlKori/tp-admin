<script setup lang="ts">
import { useForm } from 'vee-validate'
// import type { FormErrors } from 'vee-validate'
// import { useFormLoading } from './useFormLoading'
// import { buildEntityRow } from './buildRow'
// import { initValidationSchema } from './validator'
// import useApi from '~/composables/useApi'

interface IFormProps {
  entity: string
  instanceID?: string | number | undefined
  validationSchema?: object
}

const props = defineProps<IFormProps>()

const { $api } = useNuxtApp()
const entity = $api[props.entity]
provide('entity', entity)

// const loading = useFormLoading(true)
// // const entitySchema = useEntitiesSchema().get(props.entity)
// const validationSchema = initValidationSchema(entitySchema, props.validationSchema)
// const initialValues = await buildEntityRow(entitySchema, props.instanceID)
// const formInstance = useForm({
//   initialValues,
//   validationSchema
// })
// const formFields = Object.keys(formInstance.values)
// const isNew = computed(() => {
//   return  !formInstance.values.id
// })
// const isDirty = computed(() => {
//   return formFields.some(formInstance.isFieldDirty)
// })

// function isValid () {
//   formInstance.validate()
//   return formFields.some(key => !formInstance.isFieldValid(key))
// }

// function buildExecParams () {
//   const params = { ...formInstance.values }
//   if (isNew.value) {
//     delete params.id
//     delete params.updatedAt
//     delete params.createdAt
//   }
//   return params
// }

// async function save () {
//   const hasError = isValid()
//   if (hasError) return
  
//   try {
//     loading.set(true)
//     const api = useApi()
//     const request = {
//       entity: props.entity,
//       method: isNew.value ? 'insert' : 'update',
//       execParams: buildExecParams()
//     }
//     const response = await api.rpc(request)
//     formInstance.resetForm({ values: response })
//   } catch (error) {
    
//   } finally {
//     loading.set(false)
//   }
// }

// const form = {
//   data: formInstance.values,
//   errors: formInstance.errors,
//   isNew,
//   isDirty,
//   save,
//   isValid,
//   defineField (key: string) {
//     const [value] = formInstance.defineField(key)
//     return value
//   },
// }

// provide('entitySchema', entitySchema)
// export type TEntityForm = typeof form
// provide('form', form)

// loading.set(false)
</script>

<template>
  <div class="form-contaiter">
    <!-- <div class="form-contaiter__toolbar">
      <CtrlButton
        @click="save"
      >Save</CtrlButton>
    </div>
    <div v-if="loading.active.value">Loading</div>

    <form
      v-if="!loading.active.value"
      style="padding: 1rem;"
      @submit.prevent
    >
      <slot />
    </form> -->
  </div>
</template>