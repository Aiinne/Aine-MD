const fetch = require('node-fetch')
const axios = require('axios')
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys')
const { mediafiredl } = require('@bochilteam/scraper')
let handler = async (m, { isOwner, isPrems, command, usedPrefix, text, args, conn }) => {
     var limit
     if((isOwner || isPrems)) limit = 250
     else limit = 100
     if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
     if (!args[0].match(/mediafire/gi)) throw `url salah`
     const sentMsg = await m.reply('*_Tunggu Sebentar Aine Sedang Memprosesnya..._*')
     let full = /f$/i.test(command)
     let u = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
     let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url: u }))).buffer()
     let res = await mediafiredl(args[0])
     let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
     let isLimit = (isPrems || isOwner ? limit : limit) * 1024 < filesize
     let error = `Gagal mendownload..`
     let capt = `📭 *Mediafire Downloader*

📝 *Name:* ${filename}
🎚 *Size:* ${filesizeH}
🗃 *Extension:* ${ext}
📤 *Uploaded:* ${aploud}
${isLimit ? `❌ *Ukuran file di atas ${limit} MB, download sendiri*\n` : ''}🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data}` 
     
     if(ss) await conn.sendFile(m.chat, ss, 'screenshot.png', capt, sentMsg, 0, {jpegThumbnail: ss})
     try {
     if(!isLimit) await conn.sendMedia(m.chat, url, 0, {fileName: `${filename}`, mentions: [m.sender]})
     } catch {
      throw error
  }
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(me?d(ia)?f(ire)?)$/i

handler.limit = true
handler.group = true

module.exports = handler
