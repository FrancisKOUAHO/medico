import { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'
import FileSignature from '#models/file_signature'

export default class Signature {
  async create({ request, response, auth }: HttpContext) {
    const user = await auth.user!.id
    logger.info(user)
    const { fileId, invitedUserIds } = request.all()

    logger.info(fileId, invitedUserIds)

    const invitations: any[] = []

    logger.info(invitations)

    for (const invitedUserId of invitedUserIds) {
      logger.info(invitedUserId)
      const invitation = await FileSignature.create({
        file_id: fileId,
        user_id: user,
        invited_user_id: invitedUserId,
      })

      console.log(invitation)
    }
  }
}
