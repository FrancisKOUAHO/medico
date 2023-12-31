import mail from '@adonisjs/mail/services/main'
import User from '#models/user'
import Invitation from '#models/invitation'
import { HttpContext } from '@adonisjs/core/http'
import transmit from '@adonisjs/transmit/services/main'

export default class InvitationController {
  async show({ request, response }: HttpContext) {
    const { id } = request.params()

    const invitation = await Invitation.findOrFail(id)

    return response.ok(invitation)
  }

  async store({ request, response }: HttpContext) {
    const { userids, fileId } = request.only(['userids', 'fileId'])

    console.log(userids, fileId)

    for (const userid of userids) {
      const user: User | null = await User.findBy('id', userid)

      if (!user) {
        return response.status(400).json({ message: 'Utilisateur non trouvé.' })
      }

      const invitation: Invitation = await Invitation.create({
        user_id: user.id,
        file_id: fileId,
      })

      if (!invitation) {
        return response.status(400).json({ message: 'Invitation non envoyée.' })
      }

      await mail.use('resend').sendLater((message) => {
        message
          .from('Acme <onboarding@resend.dev>')
          .to(user.email)
          .subject('Invitation à rejoindre une équipe').html(`
        <!DOCTYPE html>
        <html lang="fr">
          <head>
            <title>Invitation à signer un document</title>
          </head>
          <body>
            <h2>Cher {{ invitedUser.username }},</h2>
            <p>Vous avez été invité par {{ sender.username }} à signer un document.</p>
            <p>Veuillez cliquer sur le lien suivant pour accéder au document et le signer :</p>
            <a href="{{ your_document_link }}">Lien vers le document</a>
            <p>Merci,</p>
            <p>L'équipe de votre application</p>
          </body>
        </html>
        `)
      })

      if (user) {
        transmit.broadcast('notification-sse', { notification: request.body })
      }

      return response.status(200).json({ message: 'Invitation envoyée.' })
    }

    return response.noContent()
  }

  async update({ request, response }: HttpContext) {
    const { id } = request.params()

    const payload = request.all()

    const invitation = await Invitation.findOrFail(id)

    invitation.merge(payload)

    await invitation.save()

    return response.ok(invitation)
  }

  async destroy({ request, response }: HttpContext) {
    const { id } = request.params()

    const invitation = await Invitation.findOrFail(id)

    await invitation.delete()

    return response.noContent()
  }
}
