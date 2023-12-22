import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'

export default class Signature extends BaseModel {
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

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  declare users: BelongsTo<typeof User>

  @hasMany(() => Signature)
  declare fileSignature: HasMany<typeof Signature>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
