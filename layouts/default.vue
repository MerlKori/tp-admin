<script setup lang="ts">
// const preloader = usePreloader()
// const entitiesSchema = useEntitiesSchema()
// await entitiesSchema.init()
</script>

<template>
  <div
    id="app-container"
  >
    <NuxtLoadingIndicator />
    <AppHeader />
    <AppSidebar />
    <main>
      <!-- <Suspense> -->
        <slot />
        <!-- <template #fallback>
          Loading...
        </template>
      </Suspense> -->
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
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
