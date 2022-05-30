/*let { generateWAMessageFromContent } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.id)
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  let msg = await conn.cMod(
    m.chat,
    await generateWAMessageFromContent(
      m.chat,
      {
        [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
          text: await c || ''
        },
        mentions: await users
      }, {
        quoted: null,
        userJid: conn.user.id
      }
    ),
    text || q.text, conn.user.jid,
    {
      mentions: await users
    }
  )
  await conn.relayMessage(m.chat, msg.message, {
    messageId: msg.key.id
  })
}
handler.help = ['hidetag', 'pengumuman'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(pengumuman|announce|hiddentag|hidetag)$/i

handler.group = true
handler.admin = true
handler.limit = true

module.exports = handler*/

const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text, participants }) => {
	let q = text
conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id) }, )
}

handler.help = ['hidetag'].map(v => v + ' [teks]')
handler.tags = ['group']
handler.command = /^(pengumuman|announce|hiddentag|hidetag)$/i
handler.limit = true
handler.group = true
handler.admin = true

module.exports = handler
