<script setup lang="ts">
interface IProps {
  title?: string
}
defineProps<IProps>()
</script>

<template>
  <section class="ui-section">
    <slot name="head">
      <header class="ui-section__header">
        <slot name="head-title">
          <h3 class="ui-section__header-title">
            {{ title }}
          </h3>
        </slot>
        <div style="margin-left: auto;">
          <slot name="head-end" />
        </div>
      </header>
    </slot>

    <div class="ui-section__content">
      <slot />
    </div>
  </section>
</template>

<style>
.ui-section {
  border: var(--section-border);
  border-radius: var(--section-border-radius);
  background-color: var(--section-bg);
  overflow: hidden;
}

.ui-section__header {
  display: flex;
  align-items: center;
}

.ui-section__content {
  padding: 0 var(--section-padding) var(--section-padding);
}
</style>
