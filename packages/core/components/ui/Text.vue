<script setup lang="ts">
interface IProps {
  type?: 'info' | 'success' | 'danger'
  size?: 'small' | 'medium' | 'large'
  align?: 'left' | 'center' | 'right'
}
const props = withDefaults(defineProps<IProps>(), {
  type: 'info',
  size: 'medium',
  align: 'left'
})

const classList = computed(() => {
  return [
    'ui-text',
    `ui-text--${props.type}`,
    `ui-text--${props.size}`,
    `ui-text--${props.align}`
  ]
})
</script>

<template>
  <p :class="classList">
    <slot />
  </p>
</template>

<style>
.ui-text {
  font-weight: 500;
  line-height: 1.5;
}

.ui-text--info {
  color: var(--text-info-color);
}
.ui-text--success {
  color: var(--text-success-color);
}
.ui-text--danger {
  color: var(--text-danger-color);
}

.ui-text--small {
  font-size: var(--text-s);
}
.ui-text--medium {
  font-size: var(--text-m);
}
.ui-text--large {
  font-size: var(--text-l);
}

.ui-text--left {
  text-align: left;
}
.ui-text--center {
  text-align: center;
}
.ui-text--right {
  text-align: right;
}
</style>
