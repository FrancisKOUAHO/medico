import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import { Secret } from '@poppinss/utils'
import hash from '@adonisjs/core/services/hash'
import Team from '#models/team'
import * as relations from '@adonisjs/lucid/types/relations'

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

  @manyToMany(() => Team, {
    pivotTable: 'team_members',
  })
  declare teams: relations.ManyToMany<typeof Team>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  async verifyPasswordForAuth(plainTextPassword: string) {
    return await hash.verify(this.password, plainTextPassword)
  }
}
