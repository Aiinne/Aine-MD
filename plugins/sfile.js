const fetch = require('node-fetch')
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix, command }) => {
await m.reply('*_Tunggu Sebentar Aine Sedang Memprosesnya..._*')
let res = await fetch(`https://api.violetics.pw/api/downloader/sfile?apikey=DanzzBotzz&url=${args[0]}`)
let json = await res.json()
if (!args[0]) throw `Link not found..\n\nExample:\n${usedPrefix}sfile https://sfile.mobi/1FjpfJwHxC07`
// if (!args[0].match(/https:\/\/sfile.mobi\/)/gi)) throw `Link not found..\n\nExample:\n${usedPrefix}sfile https://sfile.mobi/1FjpfJwHxC07`
let src = `*Judul:* ${json.result.title}\n*Size:* ${json.result.size}\n*Link:* ${json.result.url}`.trim()
m.reply(src)
// conn.sendFile(m.chat, json.result.url, `${json.result.title}`,null, m)
conn.sendMedia(m.chat, json.result.url, 0, {fileName: `${json.result.title}`})
}

handler.help = ['sfile']
handler.tags = ['downloader']
handler.command = /^(sfile)$/i
handler.limit = true
handler.group = true

module.exports = handler
