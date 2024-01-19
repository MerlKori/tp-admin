<script setup lang="ts">
// const preloader = usePreloader()
// const entitiesSchema = useEntitiesSchema()
// await entitiesSchema.init()
</script>

<template>
  <div
    id="app-container"
  >
    <header id="app-header">
      header
    </header>

    <aside id="app-sidebar">
      sidebar
    </aside>

    <main>
        <slot />
    </main>
  </div>
</template>

<style>
#app-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr;
  width: 100%;
  height: 100vh;
}

#app-container  #app-header {
  grid-column: 1/3;
}
</style>