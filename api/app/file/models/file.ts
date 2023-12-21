import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from '#auth/models/user'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import FileSignature from '#file_signature/models/file_signature'

export default class File extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column()
  declare file_path: string

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  declare users: BelongsTo<typeof User>

  @hasMany(() => FileSignature)
  declare fileSignature: HasMany<typeof FileSignature>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
