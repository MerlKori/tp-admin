<script setup lang="ts">
interface IItem extends INavigationItem {
  route: string
}

interface Props {
  item: IItem
}

const props = defineProps<Props>()
const nav = useNavigation()
</script>

<template>
  <li
    class="navigate__item"
  >
    <NuxtLink :to="{
      path: item.route,
      query: item.query
    }">
      <span>{{ item.name }}</span>
    </NuxtLink>
  </li>
</template>

<style>
  .navigate__item {
    display: flex;
  }

  .navigate__item a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
</style>
