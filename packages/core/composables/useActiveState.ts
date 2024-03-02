import { ref } from 'vue'

export const useVisibleState = () => {
  const active = ref(false)

  function set (value: boolean) {
    active.value = value
  }

  function togle () {
    set(!active.value)
  }

  return {
    active,
    set,
    togle
  }
}
