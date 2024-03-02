<script setup lang="ts">
export type TAppIcons = 'app-board' | 'archive' | 'arrow' | 'arrow-up-right' | 'attachment' | 'bank' |'cancel' |'cards' |'change' |'chat' |'check' |'close' |'copy' |'credit-card' |'dashboard' |'dealer' |'delete' |'user-disactivate' |'vehicle-disactivate' |'doblecheck' |'dots' |'download' |'edit' |'feedback' |'file' |'files' |'filter' |'info' |'invite' |'kanban' |'location' |'map' |'monitor' |'notification' |'payments' |'plus' |'progress' |'star' |'eye-hide' |'eye' |'reply' |'reports' |'schedule' |'search' |'send' |'confirm' |'service' |'settings' |'switch' |'trend' |'user' |'users' |'vehicle' | 'success'

export interface IProps {
  name?: TAppIcons
  text?: string
  size?: number
  color?: string
  hovercolor?: string
}

const props = defineProps<IProps>()
// const defaultColor = 'inherit'
const styles = computed(() => {
  const list = {}
  if (props.size) list['--icon-size'] = `${props.size}px`
  if (props.color) list['--icon-color'] = props.color
  if (props.hovercolor) list['--icon-color-hover'] = props.hovercolor || props.color
  return list
})

const emit = defineEmits(['click'])
</script>

<template>
  <div
    class="ui-icon"
    :style="styles"
    @click="emit('click')"
  >
    <nuxt-icon
      v-if="name"
      :name="name"
    />

    <span v-if="text">{{ text }}</span>
  </div>
</template>

<style>
.ui-icon {
  --icon-size: 24px;
  --icon-color: inherit;
  --icon-color-hover: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: var(--icon-color);
  width: var(--icon-size);
  height: var(--icon-size);
}

.nuxt-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  width: 100%;
  height: 100%;
}

.nuxt-icon svg {
  width: 100%;
  height: 100%;
  margin-bottom: 0;
}

.ui-icon path {
  transition: all .25s;
}

.ui-icon:hover {
  color: var(--icon-color-hover);
}

.ui-icon > .nuxt-icon.nuxt-icon--fill,
.ui-icon > .nuxt-icon.nuxt-icon--fill * {
  fill: none !important;
}
</style>
