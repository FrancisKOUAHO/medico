/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const TeamController = () => import('#team/controllers/team_controller')
const SessionsController = () => import('#auth/controllers/sessions_controller')
const InvitationController = () => import('#guest/controller/invitation_controller')

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

    router.group(() => {
      router
        .group(() => {
          router.get('me', [SessionsController, 'me'])
          router.delete('signout', [SessionsController, 'destroy'])
        })
        .prefix('profile')

      router
        .group(() => {
          router.post('create-team', [TeamController, 'create'])
          router.post('invite', [InvitationController, 'store'])
        })
        .prefix('team')
    })
  })
  .prefix('api/v1/')
