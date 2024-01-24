<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import type { TDataTableColumn } from '~ui/types'
import useColumns  from './columns'


type Props = {
  entity: string
  columns?: Array<string | TDataTableColumn>
}

const props = defineProps<Props>()
const tableColumns = useColumns(props.entity, props.columns)
// debugger
const items = []
</script>

<template>
<DataTable
  :value="items"
  selectionMode="multiple"
  dataKey="id"
  tableStyle="min-width: 50rem"
>
    <Column
      v-for="(col) in tableColumns"
      :field="col.id"
      :header="col.label || col.id"
    >
    </Column>
</DataTable>
</template>
