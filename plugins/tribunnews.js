const fetch = require("node-fetch")
let handler = async(m, { conn }) => {
   var a = await require('dhn-api').TribunNews()
   var b = JSON.parse(JSON.stringify(a))
   var c = await conn.rand(b)
   //var c = b[Math.floor(Math.random() * b.length)]
   var { berita, berita_url, berita_thumb, berita_jenis, berita_diupload } = c
   var sell = `📺 *Tribun News*

📢 *Berita:* ${berita}
📁 *Type News:* ${berita_jenis}
⌚ *Uploded:* ${berita_diupload}
🛰 *Source Url:* ${berita_url}`
   conn.sendButton(m.chat, sell, wm, berita_thumb, [['Tribun News', '.tribunnews']], m, {jpegThumbnail: await(await fetch(berita_thumb)).buffer()})
}
handler.help = ['tribunnews']
handler.tags = ['berita']
handler.command = /^tribun(news)?$/i
handler.limit = true

module.exports = handler
