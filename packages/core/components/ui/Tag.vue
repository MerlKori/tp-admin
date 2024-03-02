<script setup lang="ts">
interface IProps {
  label?: string
  color?: 'green' | 'purple' | 'blue' | 'yellow' | 'red'
}

const props = defineProps<IProps>()
const classList = computed(() => {
  const list = ['ui-tag']
  if (props.color) list.push(`ui-tag--${props.color}`)
  return list
})
</script>

<template>
  <span :class="classList">
    <slot>
      {{ label }}
    </slot>
  </span>
</template>

<style>
.ui-tag {
  --bg: var(--tag-black-bg);
  --color: var(--tag-black-color);
  padding: var(--tag-padding);
  border-radius: var(--tag-bdrs);
  font-size: var(--tag-font-size);
  background-color: var(--bg);
  color: var(--color);
  text-align: center;
}

.ui-tag--green {
  --bg: var(--tag-green-bg);
  --color: var(--tag-green-color);
}

.ui-tag--purple {
  --bg: var(--tag-purple-bg);
  --color: var(--tag-purple-color);
}

.ui-tag--blue {
  --bg: var(--tag-blue-bg);
  --color: var(--tag-blue-color);
}

.ui-tag--yellow {
  --bg: var(--tag-yellow-bg);
  --color: var(--tag-yellow-color);
}

.ui-tag--red {
  --bg: var(--tag-red-bg);
  --color: var(--tag-red-color);
}
</style>
