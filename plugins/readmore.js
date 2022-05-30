let handler = async (m, { conn, text }) => {
  let [ l, r ] = text.split`|`
  if (!l) l = ''
  if (!r) r = ''
  conn.reply(m.chat, l + readMore + r, m)
}
handler.help = ['readmore'].map(v => v + ' <teks>|<teks>')
handler.tags = ['tools']
handler.command = /^((read)?more|rm|selengkapnya)$/i
handler.limit = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
