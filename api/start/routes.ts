/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const InvitationController = () => import('#controllers/invitation_controller')
const FileController = () => import('../app/controllers/file_controller.js')
const TeamController = () => import('../app/controllers/team_controller.js')
const SessionsController = () => import('../app/controllers/sessions_controller.js')
const SignatureController = () => import('../app/controllers/signature_controller.js')

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
          router.delete('sign-out', [SessionsController, 'destroy'])
        })
        .prefix('profile')

      router
        .group(() => {
          router.post('create-team', [TeamController, 'create'])
          router.post('invitation-join-team', [TeamController, 'invitationJoinTeam'])
          router.post('add-membre', [TeamController, 'addMember'])
        })
        .prefix('team')

      router
        .group(() => {
          router.post('invitation-sign-pdf', [SignatureController, 'invitationForSign'])
        })
        .prefix('signature')

      router
        .group(() => {
          router.post('upload', [FileController, 'upload'])
        })
        .prefix('file')

      router
        .group(() => {
          router.post('send-file-via-mail', [InvitationController, 'store'])
        })
        .prefix('invitation')
    })
  })
  .prefix('api/v1/')
