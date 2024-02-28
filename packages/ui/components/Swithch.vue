<script setup lang="ts">
import InputSwitch from 'primevue/inputswitch'

interface IProps {
  disabled?: boolean
}

const props = defineProps<IProps>()
const model = defineModel<boolean>()
</script>

<template>
  <InputSwitch
    v-model="model"
    :disabled="props.disabled"
    class="ui-switch"
  />
</template>
<style>
  .ui-switch {
    --switch-size: 24px;
    --switch-active-color: var(--c-gray-900);
    --switch-color: var(--c-gray-400);
    --switch-indicator-color: var(--c-gray-100);

    width: calc(var(--switch-size) * 2);
    height: var(--switch-size);
  }

  .ui-switch .p-inputswitch-input {
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border-radius: 30px;
  }

  .ui-switch .p-inputswitch-slider {
    background: var(--switch-color);
    transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s, outline-color 0.2s;
    border-radius: 80px;
    outline-color: transparent;
  }

  .ui-switch .p-inputswitch-slider:before {
    background: var(--switch-indicator-color);
    width: calc(100%/2 - 4px);
    height: calc(100% - 4px);
    left: 2px;
    top: 2px;
    /* margin-top: -0.5rem; */
    border-radius: 50%;
    transition-duration: 0.2s;
  }

  .ui-switch.p-highlight .p-inputswitch-slider {
    background: var(--switch-active-color);
  }

  .ui-switch.p-highlight .p-inputswitch-slider:before {
    transform: translateX(var(--switch-size));
  }
</style>
