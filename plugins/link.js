
let handler = async (m, { conn, args }) => {
	let id = m.chat
	    if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) id = args[0]
      //  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(id)) throw 'Hanya bisa dibuka di grup'
        let groupMetadata = await conn.groupMetadata(id)
        if (!groupMetadata) throw 'groupMetadata is undefined'
        if (!'participants' in groupMetadata) throw 'participants is not defined'
        let me = groupMetadata.participants.find(user => user.id === conn.user.jid)
        if (!me) throw 'Bot tidak ada di grup itu'
        if (me.admin !== 'admin') throw 'Aku bukan admin T_T'
        m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(id))
/*
    if (!m.isGroup) {
        let gc = '17637067851-1574768230@g.us'
        let gc2 = '120363024834173891@g.us'
        m.reply(`*Grup Utama*
https://chat.whatsapp.com/${await conn.groupInviteCode(gc)}
  
*Grup Informasi*
https://chat.whatsapp.com/${await conn.groupInviteCode(gc2)}`.trim())
    } else {
        let id = m.chat
        let groupMetadata = await conn.groupMetadata(id)
        if (!groupMetadata) throw 'groupMetadata is undefined'
        if (!'participants' in groupMetadata) throw 'participants is not defined'
        let me = groupMetadata.participants.find(user => user.id === conn.user.jid)
        if (!me) throw 'Bot tidak ada di grup itu'
        if (me.admin !== 'admin') throw 'Bot bukan admin'
        m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(id))
    }*/
}
handler.help = ['link']
handler.tags = ['group']
handler.command = /^link(g(c|ro?up))?$/i
handler.group = true
handler.admin = true

module.exports = handler

