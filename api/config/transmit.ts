import { defineConfig, RedisTransport } from '@adonisjs/transmit'

export default defineConfig({
  transport: {
    driver: RedisTransport,
  },
})
