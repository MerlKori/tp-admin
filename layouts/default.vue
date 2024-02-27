<script setup lang="ts">
// import { App } from "#components";
</script>

<template>
  <div
    class="app-container"
  >
    <header class="app-header">
      header
    </header>

    <!-- <aside class="app-sidebar"> -->
    <AppSidebar/>
    <!-- </aside> -->

    <main class="app-content">
        <slot />
    </main>
  </div>
</template>

<style>

.app-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  width: 100%;
  height: 100vh;
}

.app-header {
  padding: 16px 40px 16px 40px;
  /* grid-column: 2/3; */
  border-bottom: var(--border-light);
}

.app-sidebar {
  grid-row: 1/3;
}

.app-content {
  padding: 32px 40px 40px 40px;
}
</style>
