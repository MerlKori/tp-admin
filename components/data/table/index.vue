<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import type { IDataTableColumn } from '~/types'
import useColumns  from './columns'
import { useTableData }  from './useData'


type Props = {
  entity: string
  columns?: Array<string | IDataTableColumn>
}

const props = defineProps<Props>()
const tableColumns = useColumns(props.entity, props.columns)
const tableData = useTableData(props.entity)
onMounted(async () => {
  await tableData.fetchRows() 
})

const form = ref(null)

function open ({ data }) {
  console.log('open', data);
  form.value.open()
}
</script>

<template>
<div class="data-table">
  <DataTable
    :value="tableData.rows.value"
    :loading="tableData.loading.value"
    selectionMode="multiple"
    dataKey="id"
    tableStyle="min-width: 50rem"
    @row-dblclick="open"
  >
      <Column
        v-for="(col) in tableColumns"
        :field="col.id"
        :header="col.label || col.id"
      >
      </Column>
  </DataTable>

  <UiDialog ref="form">
    <RouterView />
  </UiDialog>
</div>
</template>
