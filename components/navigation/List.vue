<script setup lang="ts">
import ListItem from './Item.vue'
import ListItemsGroup from './ItemsGroup.vue'

const iitemcomponents = {
  item: ListItem,
  group: ListItemsGroup
}

interface Props {
  items: Array<INavigationItem>
}

defineProps<Props>()
</script>

<template>
  <nav class="navigation">
    <ul class="navigation__items">
      <template v-for="item in items">
        <component
          :is="iitemcomponents[item.type]"
          :item="item"
        />
      </template>
    </ul>
  </nav>
</template>
