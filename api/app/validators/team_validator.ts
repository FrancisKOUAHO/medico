import vine from '@vinejs/vine'

const schemaTeam = vine.object({
  team_name: vine.string(),
  user_id: vine.string(),
})

export default schemaTeam
