let handler = async (m, { conn, text, command }) => {
let jawab = ['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad']
let kapan = jawab[Math.floor(Math.random() * jawab.length)]
  conn.reply(m.chat, `
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${Math.floor(Math.random() * 10)} ${kapan} lagi ...
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <text>?')
handler.tags = ['kerang']

handler.command = /^kapan(kah)?$/i
handler.limit = true

handler.fail = null

module.exports = handler


