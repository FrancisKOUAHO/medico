import { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'
import schemaTeam from '#validators/team_validator'
import Team from '#team/models/team'

export default class TeamController {
  async create({ auth, request, response }: HttpContext) {
    const user = auth.user?.id
    const data = request.only(['team_name'])

    if (user) {
      return response.status(400).json({ message: 'User already has a team' })
    }

    const validator = vine.compile(schemaTeam)
    const output = await validator.validate(data)

    return await Team.create({
      ...output,
      user_id: user,
    })
  }
}
