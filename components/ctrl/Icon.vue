<script setup lang="ts">
type TIcons = 'arrow-down' | 'arrow-up' | 'arrow-left' | 'arrow-right' | 'plus' | 'close'

interface Props {
  name: TIcons
  size?: number
  color?: string
  hovercolor?: string
}

withDefaults(defineProps<Props>(), {
  size: 24,
  color: '#333'
})
</script>

<template>
<nuxt-icon
  class="ui-icon"
  :style="{
    '--icon-size': `${size}px`,
    '--icon-color': color,
    '--icon-color-hover': hovercolor || color
  }"
  :name="name"
/>
</template>

<style>
.ui-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-color);
  width: var(--icon-size);
  height: var(--icon-size);
}

.nuxt-icon svg {
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  /* background-color: red; */
  fill: none;
}

.ui-icon path {
  transition: all .25s;
  /* background-color: blue; */
  /* color: green; */
  fill: none;
}

.ui-icon:hover {
  color: var(--icon-color-hover);
}
</style>

