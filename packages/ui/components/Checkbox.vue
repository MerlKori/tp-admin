<script setup lang="ts">
import Checkbox from 'primevue/checkbox'

interface IProps {
  error?: boolean | string
  disabled?: boolean
  label?: string
}

const props = defineProps<IProps>()
const model = defineModel<boolean>()
</script>

<template>
  <label
    class="ui-checkbox"
    :class="{ 'ui-checkbox__invalid': !!props.error }"
  >
    <Checkbox
      v-model="model"
      binary
      :disabled="props.disabled"
    />
    <span class="ui-checkbox__label">
      <slot>
        {{ props.label }}
      </slot>
    </span>
  </label>
</template>

<style>
.ui-checkbox {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

.ui-checkbox__invalid .p-checkbox-box {
  border-color:  var(--input-invalid-border-color) !important;
}

.ui-checkbox__label {
  margin-left: 8px;
  font-size: 14px;
}

.ui-checkbox  .p-checkbox-input {
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  z-index: 1;
  outline: 0 none;
  border: var(--cbx-border);
  border-radius: var(--cbx-bdr);
}

.ui-checkbox .p-checkbox-box {
  border: var(--cbx-border);
  background: transparent;
  width: var(--cbx-size);
  height: var(--cbx-size);
  border-radius: var(--cbx-bdr);
  outline-color: transparent;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
}

.p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
  width: 0.875rem;
  height: 0.875rem;
}
.p-checkbox.p-highlight .p-checkbox-box {
  border-color: var(--cbx-active-color);
  background: var(--cbx-active-color);
}

.p-checkbox.p-disabled {
  cursor: not-allowed;
}

.p-checkbox.p-disabled .p-checkbox-box  {
  background-color: #E7E7E7;
  cursor: not-allowed;
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
  border-color: #52525b;
}
.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
  border-color: var(--cbx-active-color);
  background: var(--cbx-active-color);
  color: #020617;
}
.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
  outline: 1px solid var(--p-focus-ring-color);
  outline-offset: -1px;
  box-shadow: none;
  border-color: #52525b;
}
.p-checkbox.p-invalid > .p-checkbox-box {
  border-color: #FCA5A5;
}

.p-input-filled .p-checkbox .p-checkbox-box {
  background-color: #27272a;
}
.p-input-filled .p-checkbox.p-highlight .p-checkbox-box {
  background: #34d399;
}
.p-input-filled .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
  background-color: #27272a;
}
.p-input-filled .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover).p-highlight .p-checkbox-box {
  background: #6ee7b7;
}
</style>
