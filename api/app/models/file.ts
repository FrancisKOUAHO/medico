import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import User from './user.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Signature from '#models/signature'
import Team from '#models/team'

export default class File extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column()
  declare file_path: string

  @column()
  declare team_id: number

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  declare users: BelongsTo<typeof User>

  @belongsTo(() => Team, {
    foreignKey: 'team_id',
  })
  declare teams: BelongsTo<typeof Team>

  @hasMany(() => Signature)
  declare fileSignature: HasMany<typeof Signature>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
