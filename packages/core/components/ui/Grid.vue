<script setup lang="ts">
interface IProps {
  columns?: number
  templateColumns?: string
  templateRows?: string
  columnGap?: string
  rowGap?: string
}

const props = withDefaults(defineProps<IProps>(), {
  columns: 2,
  templateColumns: undefined,
  templateRows: undefined,
  columnGap: '1rem',
  rowGap: '1rem'
})

const gridTemplateColumns = computed(() => {
  return props.templateColumns
    ? props.templateColumns
    : `repeat(${props.columns}, 1fr)`
})
</script>

<template>
  <div
    class="ui-grid"
    :style="{
      'grid-template-columns': gridTemplateColumns,
      'grid-template-rows': templateRows,
      'grid-column-gap': columnGap,
      'grid-row-gap': rowGap
    }"
  >
    <slot />
  </div>
</template>

<style>
  .ui-grid{
    display: grid;
  }

  @media (max-width: 960px) {
    .ui-grid {
      grid-template-columns: 1fr !important;
    }
  }
</style>
