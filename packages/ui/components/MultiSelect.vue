<script setup lang="ts">
import MultiSelect from 'primevue/multiselect'
import UIChip from './Chip.vue'

interface IProps {
  options: any[],
  optionLabel?: string
  optionValue?: string
}

const props = withDefaults(defineProps<IProps>(), {
  optionLabel: 'label',
  optionValue: 'value'
})

const container = ref<MultiSelect | null>(null)
function show () {
  container.value?.show()
}

const model = defineModel<Array<string | number>>()

const emit = defineEmits<{
  filter: [query: string]
}>()
function onFilter (e: Event) {
  const target = e.target as HTMLInputElement
  if (target) emit('filter', target.value as string)
}

function removeItem (value: string | number) {
  model.value = model.value?.filter((i: string | number) => i !== value)
}
</script>

<template>
  <MultiSelect
    ref="container"
    v-model="model"
    v-bind="props"
    class="ui-multi-select ui-input"
    :show-toggle-all="false"
    display="chip"
    :pt="{
      wrapper: 'ui-multi-select__panel'
    }"
  >
    <template #value="{ value, placeholder }">
      <div
        class="ui-multi-select__value"
        @click.stop
      >
        <UIChip
          v-for="item in value"
          :key="item"
          :label="item"
          style="margin-right: 8px;"
          @close="removeItem(item)"
        />

        <input
          type="text"
          :placeholder="placeholder"
          @focus="show"
          @input="onFilter"
        >
      </div>
    </template>
  </MultiSelect>
</template>

<style>
.ui-multi-select {
  padding: 8px 16px;
  background-color: var(--select-bg);
}
.ui-multi-select.p-overlay-open .p-multiselect-trigger {
  transform: rotate(180deg);
}

.ui-multi-select__value {
  display: flex;
  align-items: center;
  background-color: var(--select-bg);
}

.ui-multi-select__value input {
  border: none;
  outline: none !important;
  height: 32px;
  padding: 0 8px;
  border-radius: 0;
  background-color: var(--select-bg);
}

.ui-multi-select__panel {
  --bg: var(--select-bg);
  --bg-hover: var(--select-list-item-bg-hover);
  --color: var(--select-color);
  --color-hover: var(--select-list-item-color-hover);
  --border: var(--select-border);
  background-color: var(--bg);
  border-radius: var(--select-list-bdrs);
  border: var(--border);
}

.ui-multi-select__panel .p-checkbox {
  display: none !important;
}

.p-multiselect-panel {
  margin-top: var(--select-list-mt) !important;
}

.p-multiselect-item {
  padding: var(--select-list-item-padding);
  color: var(--color);
}

.p-multiselect-item:hover,
.p-multiselect-item[aria-selected="true"] {
  color: var(--color-hover);
  background-color: var(--bg-hover);
}

.p-multiselect-item:not(:last-child) {
  border-bottom: var(--border);
}
</style>
