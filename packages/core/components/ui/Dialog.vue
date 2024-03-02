<script setup lang="ts">
import Dialog from 'primevue/dialog'

interface IProps {
  title?: string
  width?: string
}
const props = withDefaults(defineProps<IProps>(), {
  width: '500px',
  title: 'Dialog'
})

const visible = ref(false)
function set (value: boolean) {
  visible.value = value
}

const open = () => set(true)
const close = () => set(false)
defineExpose({
  open,
  close
})
</script>

<template>
  <Dialog
    v-model:visible="visible"
    modal
    :header="props.title"
    :style="{ width: props.width }"
    :pt="{
      root: 'ui-dlg',
      mask: {
        style: 'backdrop-filter: blur(2px)'
      }
    }"
  >
    <slot />

    <template #footer>
      <footer class="ui-dlg__footer">
        <slot name="footer" />
      </footer>
    </template>
  </Dialog>
</template>

<style>
.p-component-overlay {
  background-color: rgba(0, 0, 0, .2);
  transition-duration: 0.2s;
}

.ui-dlg {
  background-color: var(--dlg-bg);
  border-radius: var(--dlg-bdrs);
  border: 1px solid var(--dlg-border-color);
  overflow: hidden;
}

.ui-dlg .p-dialog-header {
  padding: var(--dlg-padding) var(--dlg-padding) calc(var(--dlg-padding)/2);
}

.ui-dlg .p-dialog-title {
  color: var(--dlg-header-title-color);
  font-size: var(--dlg-header-title-fs);
  font-weight: var(--dlg-header-title-fw);
  font-family: var(--dlg-header-title-ff);
}

.ui-dlg .p-dialog-header-icons,
.ui-dlg .p-dialog-header-close {
  width: var(--dlg-header-title-fs);
  height: var(--dlg-header-title-fs);
}

.ui-dlg .p-dialog-content {
  padding: calc(var(--dlg-padding)/2) var(--dlg-padding);
  border-bottom: 1px solid var(--dlg-border-color);
}

.ui-dlg__footer {
  display: flex;
  align-items: center;
  padding: var(--dlg-padding);
}
</style>
