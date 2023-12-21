import { HttpContext } from '@adonisjs/core/http'
import FileSignature from '#file_signature/models/file_signature'

export default class FileController {
  async show({ request, response }: HttpContext) {
    const { id } = request.params()

    const fileSignature = await FileSignature.findOrFail(id)

    return response.ok(fileSignature)
  }

  async store({ request, response }: HttpContext) {
    const payload = request.all()

    const fileSignature = await FileSignature.create(payload)

    return response.created(fileSignature)
  }

  async update({ request, response }: HttpContext) {
    const { id } = request.params()

    const payload = request.all()

    const fileSignature = await FileSignature.findOrFail(id)

    fileSignature.merge(payload)

    await fileSignature.save()

    return response.ok(fileSignature)
  }

  async destroy({ request, response }: HttpContext) {
    const { id } = request.params()

    const fileSignature = await FileSignature.findOrFail(id)

    await fileSignature.delete()

    return response.noContent()
  }

  async upload({ request, response }: HttpContext) {
    const file = request.file('file', {
      size: '2mb',
      extnames: ['pdf'],
    })

    if (!file) {
      return response.badRequest('File is required')
    }

    console.log(file)
  }
}
