<template>
  <div
    class="ui-layout app-container"
  >
    <AppHeader />
    <AppSidebar style="grid-row: 1/3;" />

    <main class="app-content">
      <slot />
    </main>
  </div>
</template>

<style>
.app-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 80px 1fr;
  width: 100%;
  height: 100vh;
}

.app-content {
  padding: 32px 40px 40px 40px;
}
</style>
