import { HttpContext } from '@adonisjs/core/http'
import { Secret } from '@poppinss/utils'
import User from '#auth/models/user'

export default class SessionsController {
  async signIn({ request, response, auth }: HttpContext) {
    const { email, password } = request.all()

    await auth.use('web').attempt(email, password)

    return response.noContent()
  }

  async signUp({ request, response }: HttpContext) {
    const payload = request.all()

    await User.create(payload)

    return response.created()
  }

  async connectToGoogle({ ally }: HttpContext) {
    return ally.use('google').redirect()
  }

  async store({ ally, auth, response }: HttpContext) {
    const google = ally.use('google')

    if (google.accessDenied()) {
      // TODO: Handle access denied exception
      return 'Access was denied'
    }

    if (google.stateMisMatch()) {
      // TODO: Handle mismatch state
      return 'Request expired. Retry again'
    }

    if (google.hasError()) {
      // TODO: Handle error
      return google.getError()
    }

    const GoogleUser = await google.user()

    console.log('GoogleUser', GoogleUser)

    const user = await User.updateOrCreate(
      { googleId: GoogleUser.id },
      {
        name: GoogleUser.name,
        email: GoogleUser.email,
        accessToken: new Secret(GoogleUser.token.token),
        refreshToken: new Secret(GoogleUser.token.refreshToken),
      }
    )

    await auth.use('web').login(user)

    return response.redirect('/')
  }

  async me({ auth }: HttpContext) {
    return auth.user
  }

  async destroy({ auth, response }: HttpContext) {
    await auth.use('web').logout()

    return response.redirect('/')
  }
}
