let handler = async (m, { conn }) => {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  if (!users) return
  await conn.groupParticipantsUpdate(m.chat, [users], 'demote')
}

handler.help = ['demote <@user>']
handler.tags = ['admin']
handler.command = /^demote$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
