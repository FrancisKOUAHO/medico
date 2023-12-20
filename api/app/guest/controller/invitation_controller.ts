import User from '#auth/models/user'
import { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'

export default class InvitationController {
  async store({ request, response }: HttpContext) {
    const { email, teamId } = request.only(['email', 'teamId'])

    console.log(email, teamId)

    const user = await User.findBy('email', email)

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
}
