import type { Schema } from 'yup'

export interface IObject {
  [prop: string]: unknown
}

export type TDataType = 'String' | 'Number' | 'Enum' | 'Entity' | 'Date' | 'Boolean'

export interface IEntityAttr {
  name: string
  dataType: TDataType
  defaultValue?: number | string
  enums?: Array<string>
  associateEntity?: string
  size?: number
  reuired?: boolean
  validation?: Schema
}

export interface IEntitySchema {
  code: string
  descAttr?: string
  attrs: Array<IEntityAttr>
}

export interface IEntity {
  code: string
  descAttr?: string
  attrs: Array<IEntityAttr>
}


export type TAppIcons = 'app-board' | 'archive' | 'arrow' | 'arrow-up-right' | 'attachment' | 'bank' |'cancel' |'cards' |'change' |'chat' |'check' |'close' |'copy' |'credit-card' |'dashboard' |'dealer' |'delete' |'user-disactivate' |'vehicle-disactivate' |'doblecheck' |'dots' |'download' |'edit' |'feedback' |'file' |'files' |'filter' |'info' |'invite' |'kanban' |'location' |'map' |'monitor' |'notification' |'payments' |'plus' |'progress' |'star' |'eye-hide' |'eye' |'reply' |'reports' |'schedule' |'search' |'send' |'confirm' |'service' |'settings' |'switch' |'trend' |'user' |'users' |'vehicle'
