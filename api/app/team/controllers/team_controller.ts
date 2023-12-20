import { HttpContext } from '@adonisjs/core/http'
import Team from '#team/models/team'

export default class TeamController {
  async create({ request, response }: HttpContext) {
    const data = request.only(['team_name', 'user_id'])

    const createTeam: Team = await Team.create(data)

    if (!createTeam) {
      return response.status(400).json({ message: 'Team not created' })
    }

    return response.status(201).json({ message: 'Team created' })
  }
}
