import { computed, inject } from 'vue'

interface IUseFieldStateOptions {
  value?: {
    error?: string
    disabled?: boolean
  }
  modelValue?: unknown
  error?: boolean
  disabled?: boolean
}

export const useField = (props: IUseFieldStateOptions) => {
  const nestedData = inject<IUseFieldStateOptions>('field')
  const hasValue = computed(() => Boolean(props.modelValue))
  const error = computed(() => props.error || (nestedData?.value || {}).error)
  const disabled = computed(() => props.disabled || (nestedData?.value || {}).disabled)

  return {
    hasValue,
    error,
    disabled
  }
}
