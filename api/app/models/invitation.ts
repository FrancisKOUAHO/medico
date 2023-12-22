import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import File from '#models/file'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Invitation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare file_id: number

  @column()
  declare user_id: number

  @column()
  declare invited_user_id: number

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  declare users: BelongsTo<typeof User>

  @belongsTo(() => File, {
    foreignKey: 'file_id',
  })
  declare files: BelongsTo<typeof File>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
