import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class FileSignature extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare file_id: number

  @column()
  declare user_id: number

  @column()
  declare invited_user_id: number

  @column()
  declare signed: boolean

  @column()
  declare approved: boolean

  @column()
  declare initials: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
