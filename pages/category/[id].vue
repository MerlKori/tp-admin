<script setup lang="ts">
import useEntityForm from '~/composables/useEntityForm'
import * as yup from 'yup'

const form = useEntityForm({
  entity: 'Category',
  schema: {
    name: yup.string().required(),
    age: yup.number()
  },
  initialValues: {
    age: 34
  }
})

// form.values
const [age, ageAttrs] = form.defineField('age')
const [name, nameAttrs] = form.defineField('name')

const isDirty = computed(() => {
  return ['name', 'age'].some(key => form.isFieldDirty(key))
})

const onSubmit = () => {
  form.validate()
  console.log(form.values); // send data to API
  // reset the form and the field values to their initial values
  // resetForm();
};
</script>

<template>
  <form @submit.prevent>
<div>category {{form.values}}</div>
<br>
<div>errors {{form.errors}}</div>
<br>
isFieldDirty {{ isDirty }}
<br>
<!-- isFieldValid {{ form.isFieldValid }} -->

<label >
  <input
    type="number"
    v-model="age"
  >
  attrs{{ ageAttrs }}
</label>
<label >
  <input
    v-model="name"
  >
  attrs{{ nameAttrs }}
</label>



<button @click="onSubmit">save</button>
<!-- {{ value }}
{{ attrs }} -->
</form>
</template>
