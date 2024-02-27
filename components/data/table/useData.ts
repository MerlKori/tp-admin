// import type { TEntity } from '~/types'

export function useTableData (entityName: string) {
  const { $api } = useNuxtApp()
  const entity = $api[entityName]

  const pagination = reactive({
    page: 1,
    pageCount: 1
    // pageSize: 10,
  })

  const rows = ref([])
  const loading = ref(false)

  async function fetchRows () {
    // const pageIdx = paginationReactive.page - 1
    try {
      loading.value = true
      const result = await entity.select()
      rows.value = result
    } catch (error) {
      
    } finally {
      loading.value = false
    }
  }

  return {
    rows,
    loading,
    fetchRows
  }
}