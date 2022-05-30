let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Jadi kan bot sebagai admin'
  if (isAdmin) throw 'Padahal udah jadi admin'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote')
}
handler.command = /^admin!$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
