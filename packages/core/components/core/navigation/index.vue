<script setup lang="ts">
import UIIcon from '../../ui/Icon.vue'

interface IProps {
  shortView?: boolean
}

const props = defineProps<IProps>()
const nav = useNavigation()
const route = useRoute()
</script>

<template>
  <nav class="app-nav">
    <ul class="app-nav__list">
      <li
        v-for="navItem in nav.items"
        :key="navItem.code"
        class="app-nav__list-item"
        :class="{
          'app-nav__list-item--active': navItem.code === route.name,
          'app-nav__list-item--short-view': props.shortView
        }"
        @click="navigateTo(navItem.route)"
      >
        <UIIcon
          v-if="navItem.icon"
          :name="navItem.icon"
          :size="18"
        />
        <span
          class="app-nav__list-item-label"
          :hidden="props.shortView"
        >{{ $t(`page.${navItem.code}`) }}</span>
      </li>
    </ul>
  </nav>
</template>

<style>
.app-nav {
  --nav-gap: 16px;
  --nav-bg: var(--c-gray-900);
  --nav-color: var(--c-gray-500);
  --nav-bg-active: var(--c-gray-800);
  --nav-color-active: var(--c-gray-100);
  --nav-item-bdrs: 12px;
  --nav-item-paddings: 8px;

  background-color: var(--nav-bg);
  margin: var(--nav-gap) 0;
}

.app-nav__list-item {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: transparent;
  color: var(--nav-color);
  padding: var(--nav-item-paddings);
  border-radius: var(--nav-item-bdrs);
  cursor: pointer;
  transition: background-color .2s, color .2s;
}

.app-nav__list-item:not(:last-child) {
  margin-bottom: var(--nav-gap);
}

.app-nav__list-item:hover,
.app-nav__list-item--active {
  background-color: var(--nav-bg-active);
  color: var(--nav-color-active);
}

.app-nav__list-item--short-view {
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-nav__list-item-label {
  margin-left: 8px;
}
</style>
