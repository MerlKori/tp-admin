<script setup lang="ts">
import { NDataTable } from 'naive-ui'

interface Props {
  entity: string
}

const props = defineProps<Props>()

const api = useApi()
const domain = useEntitiesSchema()
const entitySchema = computed(() => {
  return domain.entities?.[props.entity]
})

const entity = computed(() => {
  return props.entity
})

function openForm (row) {
  navigateTo({
    path: `/${props.entity.toLowerCase()}/${row.id}`
  })
  // debugger
}

const columns = computed(() => {
  if (!entitySchema.value) return []
  const cols = entitySchema.value.attributes.map(attr => ({
        title: attr.name,
        key: attr.name
      })) 
  return cols
})



const data = ref([])
const loading = ref(false)
// const ROWS_ON_PAGE = 10

const paginationReactive = reactive({
      page: 1,
      pageCount: 1,
      pageSize: 10,
      // prefix ({ itemCount }) {
      //   return `Total is ${itemCount}.`
      // }
    })

async function fetchData () {
  const pageIdx = paginationReactive.page - 1
  try {
    loading.value = true
    const result = await api.repository(props.entity)
      .setLimit(paginationReactive.pageSize)
      .setOffset(pageIdx * paginationReactive.pageSize)
      .withTotal()
      .select()

    paginationReactive.pageCount = Math.ceil(result.total / paginationReactive.pageSize)

    data.value = result.data
  } catch (error) {
    
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await fetchData()
})

async function handlePageChange(page: number) {
  paginationReactive.page = page
  await fetchData()
}

function rowProps (row) {
  return {
    style: 'cursor: pointer;',
    onDblclick: () => {
      openForm(row)
    }
  }     
}

</script>

<template>
<div class="entity-table">
  <div class="entity-table__toolbar">
    <CtrlButton
      circle
      @click="openForm({})"
    >
      <template #icon>
        <CtrlIcon name="plus" />
      </template>
    </CtrlButton>
  </div>

  <NDataTable
    class="entity-table__content"
    remote
    :columns="columns"
    :data="data"
    :loading="loading"
    :row-key="(row) => row.id"
    :pagination="paginationReactive"
    :row-props="rowProps"
    @update:page="handlePageChange"
  />
</div>
</template>

<style>
.entity-table {
  height: 100%;
}

.entity-table__toolbar {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
}

.entity-table__content {
  height: calc(100% - 60px);
}
</style>