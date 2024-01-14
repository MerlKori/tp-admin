<script setup lang="ts">
interface Props {
  label?: string
  error?: string
  description?: string
  required?: boolean
}

defineProps<Props>()
</script>

<template>
  <div class="ctrl-form-item">
    <div class="ctrl-form-item__label">
      {{ label }}
      <span v-if="required" class="ctrl-form-item__label--required">*</span>
    </div>

    <span v-if="error" class="ctrl-form-item__error">{{ error }}</span>

    <div class="ctrl-form-item__field">
      <slot/>
    </div>
    <p class="ctrl-form-item__desc">{{ description }}</p>
  </div>
</template>

<style>
  .ctrl-form-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 20px max-content max-content;
    grid-gap: 5px;
    margin-bottom: 1rem;
  }

  .ctrl-form-item__field {
    grid-column: 1/3;
    grid-row: 2/3;
  }

  .ctrl-form-item__label--required,
  .ctrl-form-item__error {
    color: red;
  }
</style>