<script setup lang="ts">
interface IProps {
  path: string
  size?: 'small' | 'medium' | 'large'
  underline?: boolean
  options?: object | undefined
}

const props = withDefaults(defineProps<IProps>(), {
  size: 'medium',
  options: undefined
})

const classList = computed(() => {
  const list = ['ui-link', `ui-link--${props.size}`]
  if (props.underline) list.push('ui-link--underline')
  return list
})
</script>

<template>
  <span
    :class="classList"
    @click="navigateTo(props.path, options)"
  >
    <slot />
  </span>
</template>

<style>
  .ui-link {
    --color: var(--link-color);
    --hover-color: var(--link-hover-color);
    color: var(--color);
    cursor: pointer;
    transition: color .2s;
  }

  .ui-link:hover {
    color: var(--hover-color);
  }

  .ui-link--small {
    font-size: var(--text-s);
  }

  .ui-link--medium {
    font-size: var(--text-m);
  }

  .ui-link--large {
    font-size: var(--text-l);
  }

  .ui-link--underline {
    text-decoration: underline;
  }
</style>
