import { HttpContext } from '@adonisjs/core/http'

export default class CreateTeamValidator {
  constructor(protected ctx: HttpContext) {}

  schema = {
    team_name: 'required|string',
    user_id: 'required|number',
  }
}
