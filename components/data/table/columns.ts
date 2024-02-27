import type { IDataTableColumn } from '~/types'

// function normalizeColData (col: IDataTableColumn) {
//   return {
//     id: col.name
//   }
// }

function mergeColData (col: string | IDataTableColumn, baseAttrs: Array<IDataTableColumn>) {
  const isString = typeof col === 'string'
  const id = isString ? col : col.id
  const baseColData = baseAttrs.find((attr: IDataTableColumn) => attr.id === id)
  return isString
    ? baseColData
    : { ...baseColData, ...col }
}

export default function useColumns (entity: string, columns?: Array<string | IDataTableColumn>): Array<IDataTableColumn> {
  const { $api } = useNuxtApp()
  const baseAttrs = $api[entity].attrs

  return (!columns || !columns.length)
    ? baseAttrs
    : columns.map((col) => mergeColData(col, baseAttrs))
}