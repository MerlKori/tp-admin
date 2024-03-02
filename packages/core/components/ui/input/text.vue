<script setup lang="ts">
import UIIcon from '~core/components/ui/Icon.vue'
import { useField } from '~core/composables/useField'

import type { IProps as UIIconProps } from '~core/components/ui/Icon.vue'

interface IProps {
  error?: boolean
  type?: string
  iconRight?: UIIconProps
  iconLeft?: UIIconProps
  disabled?: boolean
  placeholder?: string
}

const props = defineProps<IProps>()

const field = useField(props)
const model = defineModel<string>()
const emit = defineEmits(['clickLeftIcon', 'clickRightIcon'])
</script>

<template>
  <div class="ui-input-text">
    <div
      v-if="iconLeft"
      class="ui-input-text__icon ui-input-text__icon--left"
    >
      <UIIcon
        v-bind="iconLeft"
        @click="emit('clickLeftIcon')"
      />
    </div>

    <input
      v-model.trim="model"
      :type="props.type || 'text'"
      :class="{
        'ui-input__invalid': field.error.value,
        'ui-input__filled': field.hasValue.value
      }"
      :disabled="field.disabled.value"
      :placeholder="props.placeholder"
    >

    <div v-if="iconRight" class="ui-input-text__icon ui-input-text__icon--right">
      <UIIcon
        v-bind="iconRight"
        @click="emit('clickRightIcon')"
      />
    </div>
  </div>
</template>

<style>
.ui-input-text {
  position: relative;
  display: flex;
  width: 100%;
}

.ui-input-text__icon {
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
}

.ui-input-text input {
  width: auto;
  flex-grow: 1;
}

.ui-input-text__icon--left  {
  left: 0.75rem;
}

.ui-input-text:has(.ui-input-text__icon--left) input {
  padding-left: 2.5rem;
}

.ui-input-text__icon--right {
  right: 1rem;
  cursor: pointer;
}

.ui-input-text:has(.ui-input-text__icon--right) input {
  padding-right: 2.5rem;
}
</style>
