<script setup lang="ts">
type TSize = 'small' | 'large'

interface IProps {
  size?: TSize
  type?: 'primary' | 'secondary' | 'negative' | 'info'
  label?: string | undefined
  disabled?: boolean
  icon?: string
}

const props = withDefaults(defineProps<IProps>(), {
  size: 'large',
  type: 'primary',
  disabled: false,
  icon: undefined,
  label: undefined
})

const classList = computed(() => {
  const list = ['ui-btn', `ui-btn--${props.size}`, `ui-btn--${props.type}`]
  if (props.icon && !props.label) list.push('ui-btn--only-icon')
  return list
})
</script>

<template>
  <button
    :class="classList"
    :disabled="props.disabled"
  >
    <UiIcon
      v-if="props.icon"
      :name="props.icon"
      style="margin-right: 10px;"
    />
    <slot>
      {{ props.label }}
    </slot>
  </button>
</template>

<style>
.ui-btn {
  display: inline-flex;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: var(--btn-border-radius);
  outline-width: var(--btn-outline-width);
  outline-style: solid;
  outline-color: transparent;
  font-size: var(--btn-font-size);
  font-weight: 600;
  line-height: var(--btn-line-height);
  font-family: 'Commissioner';
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
}

.ui-btn--small {
  font-size: var(--btn-font-size);
  padding: var(--btn-s-padding);
  max-height: 40px;
}
.ui-btn--small .ui-icon {
  --icon-size: 19px;
}

.ui-btn--large {
  font-size: var(--btn-font-size);
  padding: var(--btn-l-padding);
  max-height: 48px;
  overflow: hidden;
}
.ui-btn--large .ui-icon {
  --icon-size: 22px;
}

.ui-btn--small.ui-btn--only-icon,
.ui-btn--large.ui-btn--only-icon {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ui-btn--small.ui-btn--only-icon .ui-icon,
.ui-btn--large.ui-btn--only-icon .ui-icon {
  margin: 0 !important;
}

.ui-btn--small.ui-btn--only-icon {
  width: 40px;
  height: 40px;
}

.ui-btn--large.ui-btn--only-icon {
  width: 48px;
  height: 48px;
}

.ui-btn--primary {
  color: var(--btn-primary-color);
  background: var(--btn-primary-bg);
  border-color: var(--btn-primary-bg);
}

.ui-btn--primary:disabled {
  color: var(--btn-primary-color-disabled);
  background: var(--btn-primary-bg-disabled);
  border-color: var(--btn-primary-bg-disabled);
}

.ui-btn--primary:not(:disabled):hover {
  background: var(--btn-primary-bg-hover);
  border-color: var(--btn-primary-bg-hover);
}

.ui-btn--primary:not(:disabled):active {
  background: var(--btn-primary-bg);
  border-color: var(--btn-primary-bg);
}

.ui-btn--primary:not(:disabled):focus {
  outline-color: var(--btn-primary-outline-color-focus);
}

.ui-btn--secondary {
  color: var(--btn-secondary-color);
  background: var(--btn-secondary-bg);
  border: 1px solid var(--btn-secondary-border-color);
}

.ui-btn--secondary:disabled {
  color: var(--btn-secondary-color-disabled);
  background: var(--btn-secondary-bg-disabled);
  border-color: var(--btn-secondary-bg-disabled);
}

.ui-btn--secondary:not(:disabled):hover {
  color: var(--btn-secondary-color-hover);
  background: var(--btn-secondary-bg-hover);
  border-color: var(--btn-secondary-bg-hover);
}

.ui-btn--secondary:not(:disabled):active {
  color: var(--btn-secondary-color);
  background: var(--btn-secondary-bg);
  border-color: var(--btn-secondary-border-color);
}

.ui-btn--secondary:not(:disabled):focus {
  outline-color: var(--btn-secondary-outline-color-focus);
}

.ui-btn--negative {
  color: var(--btn-negative-color);
  background: var(--btn-negative-bg);
  border: 1px solid var(--btn-negative-bg);
}

.ui-btn--negative:disabled {
  color: var(--btn-negative-color-disabled);
  background: var(--btn-negative-bg-disabled);
  border-color: var(--btn-negative-bg-disabled);
}

.ui-btn--negative:not(:disabled):hover {
  background: var(--btn-negative-bg-hover);
  border-color: var(--btn-negative-bg-hover);
}

.ui-btn--negative:not(:disabled):active {
  background: var(--btn-negative-bg);
  border-color: var(--btn-negative-bg);
}

.ui-btn--negative:not(:disabled):focus {
  outline-color: var(--btn-negative-outline-color-focus);
}

.ui-btn--info {
  color: var(--btn-info-color);
  background: var(--btn-info-bg);
  border: 1px solid var(--btn-info-border-color);
}

.ui-btn--info:disabled {
  color: var(--btn-info-color-disabled);
  background: var(--btn-info-bg-disabled);
  border-color: var(--btn-info-bg-disabled);
}

.ui-btn--info:not(:disabled):hover {
  color: var(--btn-info-color-hover);
  background: var(--btn-info-bg-hover);
  border-color: var(--btn-info-bg-hover);
}

.ui-btn--info:not(:disabled):active {
  color: var(--btn-info-color);
  background: var(--btn-info-bg);
  border-color: var(--btn-info-border-color);
}

.ui-btn--info:not(:disabled):focus {
  outline-color: var(--btn-primary-outline-color-focus);
}
</style>
