<script setup lang="ts">
interface Props {
  item: INavigationItem
}
defineProps<Props>()

const show = ref(false)
</script>

<template>
  <li
    class="navigate__items-group"
  >
    <div
      @click="show = !show"
    >{{ item.name }}</div>

    <TransitionCollapse :show="show">
        <ul class="navigate__items-group-submenu">
          <NavigationItem
            v-for="subitem in item.submenu"
            :item="subitem" />
        </ul> 
    </TransitionCollapse>
  </li>
</template>