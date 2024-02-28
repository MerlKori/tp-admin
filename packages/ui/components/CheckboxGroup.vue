<script setup lang="ts">
interface IProps {
  error?: boolean | string
  disabled?: boolean
  required?: boolean
  label?: string
  items: Array<{ label: string, value: unknown, disabled?: boolean }>
}

const props = defineProps<IProps>()
// const model = defineModel<boolean>()
</script>

<template>
  <div class="ui-cbx-group">
    <UiHeading tag="h3">
      {{ props.label }}
      <span v-if="required" style="color: red;">*</span>
    </UiHeading>

    <UiGrid :columns="3" style="margin-top: 24px;">
      <UiCheckbox
        v-for="(item, idx) in props.items"
        :key="idx"
        :label="item.label"
        :disabled="item.disabled || props.disabled"
      />
    </UiGrid>
  </div>
</template>
