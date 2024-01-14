import { ref } from 'vue'

export function useFormLoading  (defValue: boolean) {
  const active = ref(defValue)
  const set = (state: boolean) => active.value = state
  return {
    active,
    set
  }
}