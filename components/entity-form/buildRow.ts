import useApi from '~/composables/useApi'

interface IEntityRow {
  [prop: string]: unknown
}

type TInstanceID = string | number | undefined

function initDefaultRow (schema: IEntitySchema) {
  const row: IEntityRow = {}
  for (const attr of schema.attributes) {
    row[attr.name] = attr.default || null
  }
  return row
}


async function initExistRow (schema: IEntitySchema, instanceID: TInstanceID) {
  return await useApi()
    .repository(schema.name)
    .selectById(Number(instanceID))
}

export async function buildEntityRow (schema: IEntitySchema, instanceID: TInstanceID) {
  try {
    return !instanceID
      ? initDefaultRow(schema)
      : initExistRow(schema, instanceID)
  } catch (error) {
    return initDefaultRow(schema)
  }
}
