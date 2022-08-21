const uploadImage = require('../lib/uploadImage')
const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')

let fs = require('fs')
let handler = async (m, { conn, usedPrefix }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `Kirim/balas gambar dengan perintah ${usedPrefix}petpet`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Kirim/balas gambar dengan perintah ${usedPrefix}petpet`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
    let img = await q.download()
    let url = await (uploadImage)(img)
    let res = await fetch("https://anon-petpet.herokuapp.com/?url="+encodeURIComponent(url))
    if (!res.ok) throw `error`
    let json = await res.json()
    if(json.status == false) throw `error`
    let imggiff = json.result
    m.reply(`Sedang diproses..`)
    let stiker = await sticker(false, imggiff, packname, author)
    conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
  } catch(e){
    m.reply(`*ERROR!*`)
  }
}
handler.help = ['petpet']
handler.tags = ['sticker']
handler.command = /^petpet$/i
handler.limit = true

module.exports = handler
