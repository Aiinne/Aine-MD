/*
AnonFiles Uploader @balhisyhrl
*/
const axios = require('axios')
const anonfile = require('anonfile-lib')
const fs = require('fs')
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `Kirim File yang ingin diunggah dan reply medianya dengan perintah *${usedPrefix}${command}*`
    let filename = text ? text : 'AnonFiles-'+Math.floor(Math.random() * 999999999)
    let media = await conn.downloadAndSaveMediaMessage(q, filename)
    //await fs.writeFileSync(`./tmp/${filename}`, media)
    let info = await anonfile.upload(`./tmp/`+media)
    if(info.status !== true) throw `GAGAL` 
    let response = `*───「 ANONFILES UPLOADER 」───*
Sukses Mengunggah File

Nama File : ${info.data.file.metadata.name}
Ukuran File : ${info.data.file.metadata.size.readable}
Link : ${info.data.file.url.full}
Short : ${info.data.file.url.short}
`
    await conn.reply(m.chat, response, m)
    fs.unlinkSync(`./tmp/`+media)
}
handler.help = ['anonfiles <media> <nama file>']
handler.tags = ['tools']
handler.command = /^(anonfiles)$/i
  
module.exports = handler
