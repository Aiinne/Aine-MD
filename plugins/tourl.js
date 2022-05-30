let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
let { MessageType, Presence, MimeType } = require('@adiwajshing/baileys')
let ftype = require('file-type')
let fs = require('fs')
let util = require('util')

let handler = async(m, { conn, text, args, usedPrefix }) => {
	            let quoted = m.quoted ? m.quoted : m
                let mime = (quoted.msg || quoted).mimetype || ''
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
}
handler.help = ['tourl']
handler.tags = ['tools']
handler.command = /^(tourl)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler