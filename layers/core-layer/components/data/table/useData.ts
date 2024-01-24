

export function useTableData (entity: string) {
  const { $api } = useNuxtApp()
  const entity = $api[entity]
}