<script setup lang="ts">
import EntityForm from '~/components/entity-form/index.vue'
const route = useRoute()
const instanceID = route.params.id ? Number(route.params.id) : undefined
</script>

<template>
  <EntityForm
    entity="Brand"
    :instanceID="instanceID"
  >
    <AutoField name="name" />
    <AutoField name="code" />
    <AutoField name="photo" />
  </EntityForm>
</template>
