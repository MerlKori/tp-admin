<script setup lang="ts">
import DragAndDrop from './DragAndDrop.vue'
import BtnBrowse from './BtnBrowse.vue'

interface IProps {
  accept?: string
  disabled?: boolean
  multiple?: boolean
  height?: string
}
const props = defineProps<IProps>()
</script>

<template>
  <DragAndDrop
    class="ui-file-upload"
    :style="{
      height: `${props.height || 200}px`
    }"
  >
    <div class="ui-file-upload__content">
      <span>{{ $t('ui.file.dragAndDrop') }}</span>
      <BtnBrowse>
        {{ $t('ui.file.browse') }}
      </BtnBrowse>
    </div>
  </DragAndDrop>
</template>

<style>
.ui-file-upload {
  background-color: var(--input-bg);
  border-radius: var(--input-bdrs);
  border: 1px dashed  var(--input-border-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.ui-file-upload__content {
  display: flex;
  align-items: center;
  color: var(--input-label-color)
}
</style>
