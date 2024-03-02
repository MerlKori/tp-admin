<script setup lang="ts">
import type { ChipProps } from 'primevue/chip'
import Chip from 'primevue/chip'
import UIIcon from './Icon.vue'
const props = defineProps<ChipProps>()
const emit = defineEmits(['close'])
</script>

<template>
  <Chip
    v-bind="props"
    class="ui-chip"
    removable
  >
    <template #removeicon>
      <UIIcon
        name="close"
        :size="18"
        color="var(--chip-close-color)"
        @click="emit('close')"
      />
    </template>
  </Chip>
</template>

<style>
.ui-chip  {
  background-color: var(--chip-bg);
  color: var(--chip-color);
  border-radius:  var(--chip-border-radius);
  padding: var(--chip-padding);
  border: var(--chip-border);
  height: var(--chip-height);
}

.ui-chip .p-chip-text {
  line-height: 1.5;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
</style>
