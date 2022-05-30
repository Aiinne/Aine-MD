const uploadImage = require('../lib/uploadImage') 
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
conn.reply(m.chat, 'Wait is in process..', m)
 try {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let trigger = `https://api.dhamzxploit.my.id/api/canvas/trigger?url=${url}`
  let stiker = await sticker(null, trigger, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
 } catch (e) {
   m.reply('Conversion Failed')
  }
}
handler.help = ['triggered']
handler.tags = ['sticker']
handler.command = /^trigger|triggered|tgr$/i
handler.limit = true

handler.fail = null

module.exports = handler
