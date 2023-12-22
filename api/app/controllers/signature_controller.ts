import { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'
import Signature from '#models/signature'

export default class SignatureController {
  async invitationForSign({ request, response }: HttpContext) {
    const user = 1
    logger.info(user)
    const { fileId, invitedUserIds } = request.all()

    console.log(fileId, invitedUserIds)

    logger.info(fileId, invitedUserIds)

    const invitations: any[] = []

    logger.info(invitations)

    if (invitedUserIds.length === 1) {
      const invitation: Signature = await Signature.create({
        file_id: fileId,
        user_id: user,
        invited_user_id: user,
      })

      const save: Promise<Signature> = invitation.save()

      console.log('save', save)
    }

    for (const invitedUserId of invitedUserIds) {
      logger.info(invitedUserId)
      const invitation: Signature = await Signature.create({
        file_id: fileId,
        user_id: user,
        invited_user_id: invitedUserId,
      })

      const save: Promise<Signature> = invitation.save()

      console.log('save2', save)
    }

    return response.status(201).json({ message: 'Invitations created' })
  }
}
