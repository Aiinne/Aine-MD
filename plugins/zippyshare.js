let zsExtract = require('zs-extract')

let handler = async (m, { conn, args, usedPrefix, command }) => {
 if (!args[0]) throw `Uhm...url nya mana?\n\nContoh:\n${usedPrefix + command} https://www4.zippyshare.com/v/uBGCbNHt/file.html`
 let res = await zsExtract.extract(args[0])
 let { download, filename } = res
 m.reply(JSON.stringify(res, null, 2))
 m.reply('Mohon tunggu selama *5 menit* sedang mendownload file dari _zippyshare_\n\nMinimal File *100MB* jika lebih dari yang ditentukan, Aine tidak akan mengirimkan file..!!')
 conn.sendFile(m.chat, download, filename, filename, m)
}
handler.help = ['ippyshare'].map(v => 'z' + v + ' <url>')
handler.tags = ['downloader']
handler.command = /^z(ippydl|ippyshare)$/i

handler.limit = true
handler.premium = true

module.exports = handler