<script setup lang="ts">
interface IProps {
  label: string
  required?: boolean
  disabled?: boolean
  error?: string | false
  description?: string
}

defineOptions({
  inheritAttrs: false
})

const props = defineProps<IProps>()
const field = computed(() => {
  return {
    disabled: props.disabled,
    error: !!props.error
  }
})

provide('field', field)
</script>

<template>
  <div
    :class="{
      'ui-form-row': true,
      'ui-form-row--invalid': props.error,
      'ui-form-row--disabled': props.disabled
    }"
  >
    <div class="ui-form-row__top">
      <label class="ui-form-row__label">
        {{ label }}
        <span v-if="required">*</span>
      </label>

      <div class="ui-form-row__error">
        <span
          v-show="props.error"
          class="ui-form-row__error-text"
        >{{ props.error }}</span>
      </div>
    </div>

    <slot />
    <p
      v-if="description"
      class="ui-form-row__desc"
    >
      {{ $t(description) }}
    </p>
  </div>
</template>

<style>
.ui-form-row {
  margin: 0 0 1rem;
}

.ui-form-row__top {
  display: flex;
  align-items: center;
  position: relative;
  height: 24px;
}

.ui-form-row__label {
  /* position: absolute; */
  pointer-events: none;
  /* top: 36px; */
  /* left: 16px; */
  /* transition-property: all; */
  /* transition-timing-function: ease; */
  /* line-height: 1; */
  /* z-index: 1; */
  font-size: 16px;
  font-weight: 500;
  /* transition: left .2s, top .2s; */
}

.ui-form-row--invalid .ui-form-row__label {
  color: var(--input-invalid-color);
}

.ui-form-row__label > span {
  color: var(--input-invalid-color);
}

/* .ui-form-row:has(.p-filled) .ui-form-row__label,
.ui-form-row:has(.ui-input__filled) .ui-form-row__label,
.ui-form-row:has(.p-inputwrapper-filled) .ui-form-row__label,
.ui-form-row:focus-within .ui-form-row__label {
  position: relative;
  top: 0;
  left: 0;
  font-size: 12px;
} */

.ui-form-row__error {
  margin-left: auto;
}

.ui-form-row__error-text {
  font-size: 12px;
  line-height: 1.5;
  color: var(--input-invalid-color);
}
</style>
