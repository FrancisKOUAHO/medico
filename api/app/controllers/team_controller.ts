import { HttpContext } from '@adonisjs/core/http'
import Team from '#models/team'
import TeamMember from '#models/team_members'
import User from '#models/user'
import mail from '@adonisjs/mail/services/main'

export default class TeamController {
  async create({ request, response }: HttpContext) {
    const data = request.only(['team_name', 'user_id'])

    const createTeam: Team = await Team.create(data)

    if (!createTeam) {
      return response.status(400).json({ message: 'Team not created' })
    }

    return response.status(201).json({ message: 'Team created' })
  }

  async invitationJoinTeam({ request, response }: HttpContext) {
    const { email, teamId } = request.only(['email', 'teamId'])

    console.log(email, teamId)

    const user: User | null = await User.findBy('email', email)

    if (user) {
      return response.status(400).json({ message: 'Utilisateur déjà invité.' })
    }

    await mail.use('resend').sendLater((message) => {
      message
        .from('Acme <onboarding@resend.dev>')
        .to(email)
        .subject('Invitation à rejoindre une équipe').html(`
        <!DOCTYPE html>
        <html lang="fr">
          <head>
            <title>Invitation à rejoindre l'équipe</title>
          </head>
          <body>
            <h1>Vous avez été invité à rejoindre l'équipe !</h1>
            <p>Cliquez sur le lien suivant pour rejoindre l'équipe :</p>
            <a href="http://votre-application.com/invitation?teamId=${teamId}">Rejoindre l'équipe</a>
          </body>
        </html>
        `)
    })

    return response.status(200).json({ message: 'Invitation envoyée avec succès.' })
  }

  async addMember({ request, response }: HttpContext) {
    const data = request.only(['team_id', 'user_id'])

    console.log(data)

    const addMember: TeamMember = await TeamMember.create(data)

    if (!addMember) {
      return response.status(400).json({ message: 'Member not added' })
    }

    return response.status(201).json({ message: 'Member added' })
  }
}
