const hx = require('hxz-api')

let handler = async (m, { conn, args }) => {
  if (/https?:\/\/(www\.)?instagram\.com\/(p|reel|tv)/i.test(m.text)) throw `Masukkan username Instagram, bukan link instagramnya!`
   if (!args[0]) throw `Masukkan username Instagram yang ingin diambil story nya!`
   else m.reply('Proses')
   
   hx.igstory(args[0]).then(async (r) => {
     for (let i = 0; i < r.medias.length; i++) {
       conn.sendFile(m.chat, r.medias[i].url, '', '', m)
       }
     })
   }

handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i
handler.limit = true 
module.exports = handler
