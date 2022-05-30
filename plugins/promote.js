/*let handler = async (m, { conn, participants }) => {
  let members = participants.filter(member => !member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupParticipantsUpdate(m.chat, [user], "promote").catch(console.log)
  conn.reply(m.chat, `Berhasil menjadi sebagai admin group @${user.split('@')[0]}` , m)
}
handler.help = ['promote','admin','^', '↑'].map(v => v + ' @user')
handler.tags = ['admin']

handler.command = /^(promote|admin|\^|↑)$/i

handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler*/



let handler = async (m, { conn, text, usedPrefix }) => {
	function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

	text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }

  if(!text && !m.quoted) return conn.reply(m.chat, `*❏ PROMOTE NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}promote @Tag*\n• \`\`\`\Type Number:\`\`\`\ *${usedPrefix}promote 6289654360447*`, m)
    if(isNaN(number)) return conn.reply(m.chat, `*❏ PROMOTE NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}promote @Tag*\n• \`\`\`\Type Number:\`\`\`\ *${usedPrefix}promote 6289654360447*`, m)
    if(number.length > 15) return conn.reply(m.chat, `*❏ PROMOTE NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}promote @Tag*\n• \`\`\`\Type Number:\`\`\`\ *${usedPrefix}promote 6289654360447*`, m) 
  try {
		if(text) {
			var user = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var user = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var user = number + '@s.whatsapp.net'
			}  
		} catch (e) {
  } finally {
  
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
  let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == user) : {}
	let number = user.split('@')[0]
  
	 await conn.groupParticipantsUpdate(m.chat, [user], 'promote')
	//if (response[user] == 408) throw `Nomor tersebut telah keluar baru² ini\nHanya bisa masuk melalui ${usedPrefix}link`
 	
 	conn.reply(m.chat, `Berhasil menjadi sebagai admin group @${number}`, null, {contextInfo: {
    mentionedJid: [user]
 	}})
 }
}
handler.help = ['promote <@user>']
handler.tags = ['admin']
handler.command = /^promote$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler