let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if(!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
m.reply(`_${indo}_\n\n_${character}_\n_${anime}_`)
}
handler.help = ['quotesanime']
handler.tags = ['quotes']
handler.command = /^(quotesanime|animequotes|kataanime)$/i
handler.limit = true
module.exports = handler
