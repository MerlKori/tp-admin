import { reactive, computed } from 'vue'

import type { IEntityAttr } from '~/types/entity'
import type { IObject } from '~/types/base'

function generateDefaultRow (fields: IEntityAttr[]) {
  return fields.reduce((row: IObject, r) => {
    row[r.name] = r.defaultValue || null
    return row
  }, {})
}

function normalizeValue (value: unknown) {
  if (typeof value === 'string' && value === '') return null
  return value
}

export const useFormData = (fields: Array<IEntityAttr>) => {
  const row = generateDefaultRow(fields)
  const data = reactive({ ...row })
  const originData = reactive<IObject>({})

  function removeFromOriginData (key: string) {
    delete originData[key]
  }

  function resetOriginData () {
    for (const key of Object.keys(originData)) removeFromOriginData(key)
  }

  function setOriginData (key: string, value: unknown, prevValue: unknown) {
    const propertyAlreadyAdded = Object.hasOwn(originData, key)
    if (!propertyAlreadyAdded) originData[key] = prevValue
    else if (propertyAlreadyAdded && originData[key] === value) removeFromOriginData(key)
  }

  function setDataValue (key: string, value: unknown) {
    if (!Object.hasOwn(row, key)) throw new Error(`form data error: unknown prop ${key}`)
    data[key] = value
  }

  function setData (entryData: IObject) {
    for (const key of Object.keys(entryData)) {
      const prevValue = data[key]
      const value = normalizeValue(entryData[key])
      setDataValue(key, value)
      setOriginData(key, value, prevValue)
    }
  }

  function loadData (entryData: IObject) {
    for (const key of Object.keys(entryData)) setDataValue(key, entryData[key])
    resetOriginData()
  }

  const isDirty = computed<boolean>(() => {
    return !!Object.keys(originData).length
  })

  return {
    data,
    isDirty,
    loadData,
    setData
  }
}
