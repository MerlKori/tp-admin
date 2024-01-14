<script setup lang="ts">
// const visble = useVisibleState()
const nav = useNavigation()

// const test = (row) => {
//   console.log(row)
//   debugger
// }
</script>

<template>
  <aside
    id="app-sidebar"
  >
    <NavigationList
      :items="nav.items"
    />

    <div class="app-sidebar__footer">
      <slot name="footer" />
      <!-- <CtrlButton
        circle
        @click="visble.togle()"
      >
        <template #icon>
          <CtrlIcon :name="visble.active.value ? 'arrow-left' : 'arrow-right'" />
        </template>
      </CtrlButton> -->
    </div>
  </aside>
</template>

<style>
#app-sidebar {
  background-color: var(--sidebar-bg-color);
  /* transition: width .25s; */
  overflow: hidden;
}

/* .app-sidebar--full {
  width: 250px;
}

.app-sidebar--hide {
  width: 70px;
} */

/* .app-sidebar__footer {
  margin
} */
</style>