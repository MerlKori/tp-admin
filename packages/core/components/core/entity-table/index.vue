<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import useColumns from './useColumns'
import type { ITableEntity } from './types'
// import type { IEntity } from '~/global'

// interface IRepository {
//   attrs (data: Array<string>): IRepository
//   select (): Promise<unknown>
// }

// interface ITableEntity extends IEntity {
//   repository (): IRepository
// }

interface IProps {
  entity: ITableEntity
}

const props = defineProps<IProps>()
const coluns = useColumns(props)

// async function fetchData () {
//   // console.log(coluns.list);
//   // const response = await props.entity.repository()
//   //   .attrs(['id'])
//   //   .select()
//   // console.log(response)
// }

function openForm (row: { [prop: string]: unknown }) {
  navigateTo({
    path: `/${props.entity.code}/${row.id}`
  })
}

function addNew () {
  openForm({ })
}

</script>

<template>
  <div class="entity-table">
    <div class="entity-table__toolbar">
      <UiBtn @click="addNew">
        add new
      </UiBtn>
    </div>

    <DataTable>
      <Column
        v-for="attr in coluns.list.value"
        :key="attr"
        :field="attr"
        :header="attr"
      />
    </DataTable>
  </div>
</template>
