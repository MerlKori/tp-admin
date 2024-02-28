<script setup lang="ts">
import Divider from 'primevue/divider'
</script>

<template>
  <Divider
    :pt="{
      root: 'ui-divider',
      content: 'ui-divider-content',
    }"
  >
    <slot />
  </Divider>
</template>

<style>
.ui-divider {
  --divider-color: var(--c-gray-800);
  --divider-stroke-color: var(--c-gray-400);
  --divider-content-bg: var(--c-gray-100);
}

.ui-divider::before {
  border-width: 1px;
  border-color: var(--divider-stroke-color);
}

.ui-divider-content {
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  color: var(--divider-color);
  background-color: var(--divider-content-bg);
  padding: 0 8px;
}
</style>
