<script setup lang="ts">
const dragging = ref(false)
const emit = defineEmits(['change'])

function drop (e: BlobEvent) {
  const target = e.dataTransfer
  // if (this.disabled) return
  // const files = this.accept ? validator(this.accept, e.dataTransfer.files) : e.dataTransfer.files
  if (target) emit('change', target.files)
  dragging.value = false
}
</script>

<template>
  <div
    class="ui-drag-and-drop"
    @dragleave.prevent.stop="dragging = false"
    @dragend.prevent.stop="dragging = false"
    @dragenter.prevent.stop="dragging = true"
    @dragover.prevent.stop="dragging = true"
    @drop.stop.prevent="drop"
  >
    <div
      :class="{
        'ui-drag-and-drop__overlay': true,
        'ui-drag-and-drop__overlay--active': dragging
      }"
    />
    <slot />
  </div>
</template>

<style>
.ui-drag-and-drop {
  position: relative;
  z-index: 1;
}

.ui-drag-and-drop__overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgba(46,116,185, 0.1);
    opacity: 0;
    z-index: -1;
    transition: opacity .2s;
  }

  .ui-drag-and-drop__overlay--active {
    opacity: 1;
    z-index: 2;
  }
</style>
