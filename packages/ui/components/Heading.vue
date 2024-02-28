<script setup lang="ts">
interface IProps {
  type?: 'info' | 'success' | 'danger'
  tag?: 'h1' | 'h2' | 'h3'
  align?: 'left' | 'center' | 'right'
  required?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  type: 'info',
  tag: 'h1',
  align: 'left'
})

const classList = computed(() => {
  return [
    'ui-heading',
    `ui-heading--${props.type}`,
    `ui-heading--${props.align}`
  ]
})
</script>

<template>
  <component
    :is="props.tag"
    :class="classList"
  >
    <slot />
    <span v-if="required" class="ui-heading__required">*</span>
  </component>
</template>

<style>
.ui-heading {
  margin: 0;
  font-family: 'Commissioner';
  font-weight: 700;
  letter-spacing: 0em;
  line-height: 1.5;
}

.ui-heading__required {
  color: var(--text-danger-color);
}

.ui-heading--info {
  color: var(--text-color);
}
.ui-heading--success {
  color: var(--text-success-color);
}
.ui-heading--danger {
  color: var(--text-danger-color);
}

h1.ui-heading {
  font-size: var(--h1);
}

h2.ui-heading {
  font-size: var(--h2);
}

h3.ui-heading {
  font-size: var(--h3);
}

.ui-heading--left {
  text-align: left;
}
.ui-heading--center {
  text-align: center;
}
.ui-heading--right {
  text-align: right;
}
</style>
