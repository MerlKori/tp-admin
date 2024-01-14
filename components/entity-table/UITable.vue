<script setup lang="ts">
export interface IRow {
  [key: string]: unknown
}

interface IColumn {
  id: string
  label?: string
}

interface Props {
  rows: Array<IRow>
  rowID?: string
  columns: Array<IColumn>
}
withDefaults(defineProps<Props>(), {
  rowID: 'id'
})

const emit = defineEmits([
  'selectRow'
])

function selectRow (row: IRow) {
  emit('selectRow', row)
}
</script>

<template>
<table class="ui-table">
  <tr class="ui-table__head">
    <th
      v-for="col in columns"
      :key="col.id"
      class="ui-table__head-col"
    >
      <slot :name="`head-${col.id}`" :col="col">
        <span>{{ col.label || col.id }}</span>
      </slot>
    </th>
  </tr>

  <tbody class="ui-table__body">
    <tr
      v-for="(row, idx) in rows"
      :key="Number(row[rowID] || idx)"
      class="ui-table__body-row"
      @dblclick="selectRow(row)"
    >
      <td
        v-for="col in columns"
        :key="col.id + idx"
        class="ui-table__body-row-cell"
      >
        <slot :name="col.id" :col="col" :row="row">
          <span>{{ row[col.id] }}</span>
        </slot>
      </td>
    </tr>
  </tbody>
</table>
</template>
