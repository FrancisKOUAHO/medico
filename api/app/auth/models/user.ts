import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { Secret } from '@poppinss/utils'
import Team from '#team/models/team'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import hash from '@adonisjs/core/services/hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare email: string

  @column()
  declare password: string

  @column({
    prepare: (accessToken: Secret<string>) => accessToken.release(),
    consume: (accessToken) => new Secret(accessToken),
  })
  declare accessToken: Secret<string>

  @column({
    prepare: (refreshToken: Secret<string | undefined>) => refreshToken.release(),
    consume: (refreshToken) => new Secret(refreshToken),
  })
  declare refreshToken: Secret<string | undefined>

  @column()
  declare googleId: string

  @column()
  declare isInvited: boolean

  @column()
  declare isTeamLeader: boolean

  @column()
  declare team_id: number

  @hasMany(() => Team)
  declare teams: HasMany<typeof Team>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  async verifyPasswordForAuth(plainTextPassword: string) {
    return await hash.verify(this.password, plainTextPassword)
  }
}
