import { object, number, string, date } from "yup"
import type { IEntityAttribute } from "~/stores/useEntitiesSchema"

interface IRow {
  [prop: string]: any
}

function initAttr (attr: IEntityAttribute) {
  const required = (yupAttr: any) => attr.required ? yupAttr.required() : yupAttr
  if (attr.dataType === 'Numebr' && attr.type === 'ID') {
    return number().positive().integer()
  } else if (attr.dataType === 'Numebr' && attr.type === 'Int') {
    return required(number().integer())
  } else if (attr.dataType === 'Entity') {
    return required(number().integer())
  } else if (attr.dataType === 'String') {
    return required(string())
  } else if (attr.dataType === 'DateTime') {
    return required(date().default(() => new Date()))
  } else if (attr.dataType === 'Numebr' && attr.type === 'Float') {
    return required(number())
  }
}

export function initValidationSchema (
  schema: IEntitySchema,
  customValidationSchema: IRow | undefined
) {
  const validationSchema: IRow = {}
  for (const attr of schema.attributes) {
    if (['id', 'createdAt', 'updatedAt'].includes(attr.name)) continue
    validationSchema[attr.name] = initAttr(attr)
  }
  return object(Object.assign({}, validationSchema, customValidationSchema))
}