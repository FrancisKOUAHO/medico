import { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import Signature from '#models/signature'
import File from '#models/file'

export default class FileController {
  async show({ request, response }: HttpContext) {
    const { id } = request.params()

    const fileSignature = await Signature.findOrFail(id)

    return response.ok(fileSignature)
  }

  async store({ request, response }: HttpContext) {
    const payload = request.all()

    const fileSignature = await Signature.create(payload)

    return response.created(fileSignature)
  }

  async update({ request, response }: HttpContext) {
    const { id } = request.params()

    const payload = request.all()

    const fileSignature = await Signature.findOrFail(id)

    fileSignature.merge(payload)

    await fileSignature.save()

    return response.ok(fileSignature)
  }

  async destroy({ request, response }: HttpContext) {
    const { id } = request.params()

    const fileSignature = await Signature.findOrFail(id)

    await fileSignature.delete()

    return response.noContent()
  }

  async upload({ request, response }: HttpContext) {
    const file = request.file('file', {
      size: '2mb',
      extnames: ['pdf', 'docx', 'doc', 'png', 'jpg', 'jpeg'],
    })

    if (!file) {
      return response.badRequest('File is required')
    }

    await file.move(app.makePath('uploads'))

    const create_file = await File.create({
      file_path: file.filePath,
      team_id: 1,
      user_id: 1,
    })

    create_file?.save()

    return response.created(create_file)
  }
}
