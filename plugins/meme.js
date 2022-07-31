let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/meme'))
  await m.reply(global.wait)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.image) throw 'Err!'
  conn.sendFile(m.chat, json.image, 'meme.png', json.caption, m)
}

handler.help = ['meme']
handler.tags = ['random']
handler.register = false
handler.command = /^(meme)$/i
handler.limit = false
handler.group = true

module.exports = handler
