import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').nullable()
      table.string('email').notNullable().unique()
      table.string('password').nullable()
      table.string('access_token').nullable()
      table.string('refresh_token').nullable()
      table.string('google_id').nullable()
      table.boolean('is_invited').defaultTo(false)
      table.boolean('is_team_leader').defaultTo(false)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
