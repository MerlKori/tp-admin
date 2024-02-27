<script setup lang="ts">
import SidebarNavigation from './navigation.vue'
</script>

<template>
  <div class="app-sidebar">
    <div>Logo</div>
    <br>
    <SidebarNavigation />
  </div>
</template>

<style>
.app-sidebar {
  background-color: var(--sidebar-bg-color);
  padding: var(--sidebar-gap);
}
.app-sidebar .p-menu {
  background-color: var(--sidebar-bg-color);
  border: none;
}
/* .app-sidebar .p-menuitem-active {
  background-color: var(--sidebar-active-item-bg-color);
} */
</style>
