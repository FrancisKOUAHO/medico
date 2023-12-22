import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class TeamMember extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare team_id: number

  @column()
  declare user_id: number

  @column()
  declare is_invited: boolean

  @column()
  declare is_team_leader: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
