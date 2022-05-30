/*let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `tag orangnya!`
    if (!global.prems.includes(who.split`@`[0])) throw 'Dia tidak premium!'
    let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    global.prems.splice(index, 1)
    conn.reply(m.chat, `@${who.split('@')[0]} sekarang bukan premium!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['delprem [@user]']
handler.tags = ['owner']
handler.command = /^(remove|hapus|-|del)prem$/i

handler.owner = true

module.exports = handler*/


let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }
  
  if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}unprem number|days\n*Example:* ${usedPrefix}unprem 6289654360447|99\n\n• ${usedPrefix}unprem @tag|days\n*Example:* ${usedPrefix}unprem @6289654360447|99`, m)
  text = no(text) + "@s.whatsapp.net"
  global.db.data.users[text].premium = false
  global.db.data.users[text].premiumDate = 0
  conn.reply(m.chat,`*Berhasil menghapus akses premium untuk @${text.split('@')[0]}.*`,m,{ contextInfo: { mentionedJid: [text] } })

}
handler.help = ['unprem']
handler.tags = ['owner']
handler.command = /^(unprem)$/i
handler.owner = true
handler.fail = null
module.exports = handler