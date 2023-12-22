import { HttpContext } from '@adonisjs/core/http'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import FileSignature from '#models/file_signature'

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

  async upload({ request, response, auth }: HttpContext) {
    const { team_id } = request.all()
    const file = request.file('file', {
      size: '2mb',
      extnames: ['pdf', 'docx', 'doc', 'png', 'jpg', 'jpeg'],
    })

    if (!file) {
      return response.badRequest('File is required')
    }

    console.log(file)

    const save_file = await file.move(app.makePath('uploads'), {
      name: `${cuid()}.${file.extname}`,
    })

    const create_file = auth.user?.related('files').create({
      path: save_file,
      team_id,
    })

    create_file?.save()

    response.ok(create_file)
  }
}
