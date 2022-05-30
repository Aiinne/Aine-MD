let handler = async (m, { conn, args }) => {
let id = m.chat
// for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) 
  if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) id = args[0]
  if (!/^[0-9]{5,16}-[0-9]+@g\.us$/.test(id)) throw 'Hanya bisa dibuka di grup'
  let groupMetadata = await conn.groupMetadata(id)
  if (!groupMetadata) throw 'groupMetadata is undefined :\\'
  if (!'participants' in groupMetadata) throw 'participants is not defined :('
  let me = groupMetadata.participants.find(user => user.id === conn.user.jid)
  if (!me) throw 'Aku tidak ada di grup itu :('
 // if (me.isAdmin !== true) throw 'Aku bukan admin T_T'
  if (!m.isGroup) return global.dfail('group', m, conn)
        await m.reply(`Bot telah meninggalkan group ${groupMetadata.subject}\n*Group ID* ${args[0]}`, m.chat)
        await m.reply('Byee 👋\nBot akan keluar dari group', args[0]) 
        await conn.delay(1000)
        await conn.groupLeave(args[0])
  }
  
//handler.help = ['pergi']
//handler.tags = ['group']
handler.command = /^pergi$/i
handler.owner = true
handler.botAdmin = false

handler.fail = null

module.exports = handler
