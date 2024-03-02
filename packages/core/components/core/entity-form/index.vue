<script setup lang="ts">
import type { Entity } from '~/services/Entity'
import CoreForm from '~core/components/core/form/index.vue'

interface IProps {
  instanceID: number | undefined
  entity: Entity
}

const props = defineProps<IProps>()
const form = ref<InstanceType<typeof CoreForm> | null>(null)
const isDirty = computed(() => form && form.value?.form.isDirty)
</script>

<template>
  <section class="entity-form">
    <div class="entity-form__head">
      <UiBtn>Save</UiBtn>

      {{ isDirty }}
    </div>
    <CoreForm
      ref="form"
      :entity="props.entity.code"
      :schema="props.entity.attrs"
    >
      <slot />
    </CoreForm>
  </section>
</template>
