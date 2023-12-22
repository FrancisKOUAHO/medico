import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import User from '#models/user'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

export default class Team extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare team_name: string

  @column()
  declare user_id: number

  @belongsTo(() => User, {
    foreignKey: 'user_id',
  })
  declare users: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
