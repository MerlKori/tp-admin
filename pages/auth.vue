<script setup lang="ts">
import { useUser } from '~/stores/useUser'
import { useForm } from 'vee-validate'
import * as yup from 'yup'

definePageMeta({
  layout: 'auth'
})

const form = useForm({
  validationSchema: yup.object({
    name: yup.string().required(),
    pwd: yup.string().required()
  })
})


const [name] = form.defineField('name')
const [pwd] = form.defineField('pwd')

async function login () {
  form.validate()
  if (['name', 'pwd'].some(key => !form.isFieldValid(key))) return
  const user = useUser()

  await user.login(form.values.name, form.values.pwd)
  if (user.authorized) navigateTo('/')
}
</script>

<template>
<div id="auth-page">
  <div id="auth-page__form">
    <CtrlFormItem
      label="Login"
      :error="form.errors.value.name"
      required
    >
      <CtrlInput v-model:value="name" />
    </CtrlFormItem>

    <CtrlFormItem
      label="Password"
      :error="form.errors.value.pwd"
      required
    >
      <CtrlInput v-model:value="pwd" />
    </CtrlFormItem>

    <CtrlButton
      @click="login"
    >Login</CtrlButton>
    

    <!-- {{ form.values }}
    {{ form.errors }} -->
    <!-- auth-page__form -->
  </div>
</div>
</template>

<style>
#auth-page {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#auth-page__form {
  width: 300px;
  border: var(--border);
  padding: 1rem;
}
</style>
