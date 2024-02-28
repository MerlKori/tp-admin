import { reactive, ref } from 'vue'
import { object, reach } from 'yup'
import type { AnySchema, ObjectShape, Schema } from 'yup'
import type { IObject } from '~/types'

function generateRow (props: string[]): IObject {
  return props.reduce((row: IObject, key: string) => {
    row[key] = false
    return row
  }, {})
}

export const useValidator = (validation: ObjectShape, entity: string) => {
  const props = Object.keys(validation)
  const active = ref(false)
  const errors = reactive(generateRow(props))
  const schema: AnySchema = object().shape(validation)
  const i18n = useI18n()

  function setError (key: string, value: string | false) {
    errors[key] = value
  }

  function setErrors (errors: IObject) {
    for (const key of Object.keys(errors)) setError(key, (errors[key] as string || false))
  }

  function isValid () {
    return props.every(key => !errors[key])
  }

  async function validateProp (key: string, value: unknown) {
    if (!active.value) return
    try {
      await (reach(schema, key) as Schema).validate(value)
      setError(key, false)
    } catch (error: any) {
      const field = i18n.t(`${entity}.${key}`)
      const message = i18n.t(`validation.${error.type}`, { field, ...error.params })
      // console.log(message);
      // debugger
      setError(key, message)
    }
  }

  async function validate (data: IObject): Promise<boolean> {
    active.value = true
    await Promise.allSettled(
      props.map(key => validateProp(key, data[key]))
    )
    return isValid()
  }

  return {
    errors,
    setError,
    setErrors,
    validateProp,
    validate,
    isValid
  }
}
