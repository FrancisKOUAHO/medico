import { HttpContext } from '@adonisjs/core/http'
import logger from '@adonisjs/core/services/logger'
import Signature from '#models/signature'

export default class SignatureController {
  async invitationForSign({ request, response }: HttpContext) {
    const user = 1
    const data = request.only(['file_id', 'user_id', 'signed', 'approved', 'initials'])

    const signature = await Signature.create({ ...data, user_id: user })

    logger.info('info', signature)

    if (!signature) {
      logger.error('Signature not created')
      return response.status(500).json({ message: 'Signature not created' })
    }

    return response.status(201).json({ message: 'Signature created' })
  }
}
