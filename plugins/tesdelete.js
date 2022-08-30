
let handler = function (m) {
 let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.participant : m.key.participant
 } catch (e) {
 	console.error(e)
 }
 conn.sendMessage(m.chat, { delete: key })
}
handler.help = ['tesdelete']
handler.tags = ['tools']
handler.command = /^(tesdel|tesdelete|tesdel|td)$/i
handler.limit = false
handler.admin = true
handler.botAdmin = true
module.exports = handler
