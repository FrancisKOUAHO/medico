/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

const TeamController = () => import('#team/controllers/team_controller')

const SessionsController = () => import('#auth/controllers/sessions_controller')

router.get('/', ({ response }) => response.ok({ uptime: Math.round(process.uptime()) }))
router.get('health', ({ response }) => response.noContent())

router
  .group(() => {
    router
      .group(() => {
        router.post('signin', [SessionsController, 'signIn'])
        router.post('signup', [SessionsController, 'signUp'])
        router.get('connect-to-google', [SessionsController, 'connectToGoogle'])
        router.get('signin-callback', [SessionsController, 'store'])
      })
      .prefix('auth')

    router
      .group(() => {
        router
          .group(() => {
            router.get('me', [SessionsController, 'me'])
            router.delete('signout', [SessionsController, 'destroy'])
          })
          .prefix('profile')

        router.group(() => {
          router.post('create-team', [TeamController, 'create'])
        })
      })
      .use(middleware.auth())
  })
  .prefix('api/v1/')
