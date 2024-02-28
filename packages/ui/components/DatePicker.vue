<script setup lang="ts">
import Calendar from 'primevue/calendar'

interface IProps {
  disabled?: boolean
  darkMode?: boolean
  mode?: 'range' | 'single'
}
const props = defineProps<IProps>()
const states = useFieldState(props)
</script>

<template>
  <Calendar
    icon-display="input"
    show-icon
    :selection-mode="props.mode"
    :disabled="states.disabled"
    :class="{
      'ui-input__invalid': states.error
    }"
    :pt="{
      root: 'ui-dp',
      input: 'ui-input',
      panel: 'ui-dp__panel'
    }"
  />
</template>

<style>
.ui-dp {
  --bg: var(--input-bg);
  --color: var(--select-color);
  --border: var(--select-border);
  width: 100%;
}

.ui-dp .p-inputtext {
  background-color: var(--bg);
  color: var(--color);
}

.p-datepicker-trigger-icon {
  position: absolute;
  right: .5rem;
}

.ui-dp__panel {
  background: var(--dp-panel-bg);
  border-radius: var(--dp-panel-bdrs);
  margin-top: 8px !important;
}

.ui-dp__panel .p-datepicker-header {
  padding: var(--dp-panel-padding);
  border-bottom: 1px solid var(--dp-panel-border-color);
}

.p-datepicker-prev,
.p-datepicker-next {
  color: var(--dp-panel-secondary-color);
}

.p-datepicker-title > * {
  color: var(--dp-panel-main-color);
  font-size: 16px;
  font-weight: 600;
  margin: 0 5px;
  font-family: 'Commissioner';
}

.p-datepicker-title > *:hover {
  color: var(--dp-panel-active-color);
}

.p-datepicker-calendar-container {
  padding: var(--dp-panel-padding);
}

.p-datepicker table {
  border-collapse: separate;
  border-spacing: 8px
}

.p-datepicker table th > span {
  width: var(--dp-panel-cell-size);
  height: calc(var(--dp-panel-cell-size)/2);
  font-size: var(--dp-panel-day-fs);
  font-weight: 500;
  color: var(--dp-panel-secondary-color);
}

.p-datepicker table td > span {
  width: var(--dp-panel-cell-size);
  height: var(--dp-panel-cell-size);
  border: none;
  border-radius: var(--dp-panel-cell-bdrs);
  outline-color: transparent;
  color: var(--dp-panel-main-color);
  font-weight: 500;
  font-size: var(--dp-panel-date-fs);
  transition: background-color 0.2s, color 0.2s;
}

.p-yearpicker-year,
.p-monthpicker-month {
  color: var(--dp-panel-main-color);
  font-weight: 500;
  padding: .25rem 0;
  font-size: var(--dp-panel-date-fs);
  transition: background-color 0.2s, color 0.2s;
}

/* .p-datepicker table td:has(span[aria-selected="true"]) span {
  background-color: blueviolet;
} */

.p-datepicker table  td:has(span[aria-selected="true"]) > span,
.p-yearpicker-year[data-p-highlight="true"],
.p-monthpicker-month[data-p-highlight="true"] {
  background: var(--dp-panel-active-color);
  color: var(--dp-panel-bg);
}

/* .p-datepicker table td:has(span[aria-selected="true"]):not(:first-child):not(:last-child) > span {
  background-color: aqua;
} */

.p-datepicker table td:hover > span:not([aria-selected="true"]),
.p-yearpicker-year:not([data-p-highlight="true"]):hover,
.p-monthpicker-month:not([data-p-highlight="true"]):hover {
  background-color: var(--dp-panel-hover-color);
  color: var(--dp-panel-main-color);
}

.p-datepicker table td.p-datepicker-other-month > span {
  display: none;
}
</style>
