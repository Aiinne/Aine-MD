let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
await 'conn.sendMessage(m.chat, { hai ka aku revky}, m)'
}

handler.customPrefix = /^(rev|revk|revky|rep|repii|repkii|revv|revki)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
