import { defineConfig, providers } from '@adonisjs/auth'
import { sessionGuard } from '@adonisjs/auth/session'
import { InferAuthEvents, Authenticators, InferAuthenticators } from '@adonisjs/auth/types'

const authConfig = defineConfig({
  default: 'web',
  guards: {
    web: sessionGuard({
      provider: providers.lucid({
        model: () => import('#auth/models/user'),
        uids: ['email'],
      }),
    }),
  },
})

declare module '@adonisjs/auth/types' {
  interface Authenticators extends InferAuthenticators<typeof authConfig> {}
}

declare module '@adonisjs/core/types' {
  interface EventsList extends InferAuthEvents<Authenticators> {}
}

export default authConfig
