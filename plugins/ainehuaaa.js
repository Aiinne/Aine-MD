let fs = require('fs')
let handler = async (m) => {
let huaaa = fs.readFileSync('./mp3/WhatsApp-Audio-2021-03-03-at-00.32.11.opus')
conn.sendFile(m.chat, huaaa, '', '', m, true)
}

handler.customPrefix = /^(hua|huaa|huaaa|huaaaa|huaaaaa|huua|huuaa|huuaaa|huuaaaa|huuua|huuuaa|huuuaaa|huuuaaaa)$/i
handler.command = new RegExp

handler.limit = true

module.exports = handler
