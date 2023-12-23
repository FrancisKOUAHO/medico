import transmit from '@adonisjs/transmit/services/main'
import { HttpContext } from '@adonisjs/core/http'

transmit.authorizeChannel<{ id: number }>(
  'send-file-via-mail/:id',
  async (_ctx: HttpContext, params) => {
    return _ctx.auth.user?.id === +params.id
  }
)

transmit.on('connect', ({ uid }) => {
  console.log(`Connected with uid ${uid}`)
})

transmit.on('disconnect', ({ uid }) => {
  console.log(`Disconnected with uid ${uid}`)
})

transmit.on('broadcast', ({ channel }) => {
  console.log(`Broadcasting to ${channel} `)
})

transmit.on('subscribe', ({ uid, channel }) => {
  console.log(`Subscribed ${uid} to ${channel} `)
})

transmit.on('unsubscribe', ({ uid, channel }) => {
  console.log(`Unsubscribed ${uid} to ${channel} `)
})
