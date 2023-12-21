import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#auth/models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import File from '#file/models/file'

export default class FileSignature extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare file_id: number

  @column()
  declare user_id: number

  @column()
  declare signed: boolean

  @column()
  declare approved: boolean

  @column()
  declare initials: string

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
