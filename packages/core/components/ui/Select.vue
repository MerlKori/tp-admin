<script setup lang="ts">
import Dropdown from 'primevue/dropdown'

interface IProps {
  options: any[],
  optionLabel?: string
  optionValue?: string
  darkMode?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  optionLabel: 'label',
  optionValue: 'value'
})

const container = ref<Dropdown | null>(null)
function show () {
  container.value?.show()
}

const emit = defineEmits<{
  filter: [query: string]
}>()

function onFilter (e: Event) {
  const target = e.target as HTMLInputElement
  if (target) emit('filter', target.value as string)
}
</script>

<template>
  <Dropdown
    ref="container"
    :options="props.options"
    :option-value="props.optionValue"
    :option-label="props.optionLabel"
    :class="{
      'ui-select': true,
      'ui-select--dark': props.darkMode,
      'ui-input': true
    }"
    invalid
    :pt="{
      wrapper: props.darkMode ? 'ui-select__panel--dark ui-select__panel' : 'ui-select__panel'
    }"
    show-clear
  >
    <template #value="{ value, placeholder }">
      <div class="ui-select__value">
        <input
          :value="value"
          type="text"
          :placeholder="placeholder"
          @focus="show"
          @input="onFilter"
        >
      </div>
    </template>
  </Dropdown>
</template>

<style>
.ui-select {
  --bg: var(--select-bg);
  --color: var(--select-color);
  --border: var(--select-border);
  padding: 0;
  background-color: var(--bg);
  overflow: hidden;
}

.ui-select--dark {
  --bg: var(--select-dark-bg);
  --color: var(--select-dark-color);
  --border: var(--select-dark-border);
}

.ui-select .p-dropdown-label {
  background-color: var(--bg);
  border: 0 none;
  padding-right: 1.75rem;
}

.ui-select__value input {
  background-color: var(--bg);
  border-radius: var(--bdrs);
  color: var(--color);
  border: none;
  outline: none !important;
  height: 100%;
}

.ui-select .p-dropdown-trigger {
  background: transparent;
  color: #a1a1aa;
  width: 2.5rem;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}

.ui-select .p-dropdown-clear-icon {
  color: #D13513;
  right: 2.5rem;
}

.ui-select__panel {
  --bg: var(--select-bg);
  --bg-hover: var(--select-list-item-bg-hover);
  --color: var(--select-color);
  --color-hover: var(--select-list-item-color-hover);
  --border: var(--select-border);
  background-color: var(--bg);
  border-radius: var(--select-list-bdrs);
  border: var(--border);
}

.ui-select__panel--dark {
  --bg: var(--select-dark-list-bg);
  --bg-hover: var(--select-dark-list-item-bg-hover);
  --color: var(--select-dark-color);
  --color-hover: var(--select-dark-list-item-color-hover);
  --border: var(--select-dark-border);
}

.p-dropdown-panel {
  margin-top: var(--select-list-mt) !important;
}

.p-dropdown-item {
  padding: var(--select-list-item-padding);
  color: var(--color);
}

.p-dropdown-item:hover,
.p-dropdown-item[aria-selected="true"] {
  color: var(--color-hover);
  background-color: var(--bg-hover);
}

.p-dropdown-item:not(:last-child) {
  border-bottom: var(--border);
}
</style>
