let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let araaaa = fs.readFileSync('./mp3/WhatsApp-Audio-2021-06-21-at-11.33.19.opus')
conn.sendFile(m.chat, araaaa, '', '', m, true)
//conn.sendMessage(m.chat, araaaa, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
}

handler.customPrefix = /^(ara ara)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler