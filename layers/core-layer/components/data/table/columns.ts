import type { TDataTableColumn } from '~ui/types'

// function normalizeColData (col: TDataTableColumn) {
//   return {
//     id: col.name
//   }
// }

function mergeColData (col: string | TDataTableColumn, baseAttrs: Array<TDataTableColumn>) {
  const isString = typeof col === 'string'
  const id = isString ? col : col.id
  const baseColData = baseAttrs.find((attr: TDataTableColumn) => attr.id === id)
  return isString
    ? baseColData
    : { ...baseColData, ...col }
}

export default function useColumns (entity: string, columns?: Array<string | TDataTableColumn>): Array<TDataTableColumn> {
  const { $api } = useNuxtApp()
  const baseAttrs = $api[entity].attrs

  return (!columns || !columns.length)
    ? baseAttrs
    : columns.map((col) => mergeColData(col, baseAttrs))
}