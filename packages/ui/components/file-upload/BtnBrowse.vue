<script setup lang="ts">
interface IProps {
  disabled?: boolean
  multiple?: boolean
  accept?: string
}

const props = defineProps<IProps>()
const emit = defineEmits(['change'])

function fileInputChanged (e: Event) {
  if (props.disabled) return
  const target = e.target as HTMLInputElement
  if (target) emit('change', target.files)
}
</script>

<template>
  <label
    class="ui-uload-file"
    :class="{ 'uload-file--disabled': disabled }"
  >
    <slot />

    <input
      type="file"
      :disabled="props.disabled"
      :multiple="props.multiple"
      :accept="props.accept"
      hidden
      @change="fileInputChanged"
    >
  </label>
</template>

<style>
.ui-uload-file {
  background-color: var(--btn-secondary-bg);
  border: 1px solid var(--btn-secondary-border-color);
  border-radius: var(--btn-border-radius);
  padding: var(--btn-s-padding);
  color: var(--btn-secondary-color);
  font-weight: 600;
  line-height: var(--btn-line-height);
  font-family: 'Commissioner';
  margin: 0 1rem;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, color 0.2s;
}

.uload-file--disabled {
  color: var(--btn-secondary-color-disabled);
  background-color: var(--btn-secondary-bg-disabled);
  border-color: var(--btn-secondary-bg-disabled);
}

.ui-uload-file:not(.uload-file--disabled):hover {
  color: var(--btn-secondary-color-hover);
  background-color: var(--btn-secondary-bg-hover);
  border-color: var(--btn-secondary-bg-hover);
}
</style>
