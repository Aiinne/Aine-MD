let finder = require('lyrics-finder')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} kepastian rasa`
  let error = `Maaf tidak di temukan lirik *${text}*`
  let res = await finder("", text)
  if (!res) throw error

  m.reply(res)
}
handler.help = ['lirik'].map(v => v + ' <teks>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.limit = true

module.exports = handler
