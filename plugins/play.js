let limit = 50
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, usedPrefix, text, isPrems, isOwner }) => {
  if (!text) throw `What song are you want find?\n*Example:* ${usedPrefix}play alan walker faded`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio Not Found'
  let isVideo = /2$/.test(command)
  let yt = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await (isVideo ? ytv : yta)(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\ntry another server...'}`)
    }
  }
  if (yt === false) throw 'All servers can\'t 😕'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Title:* ${title}
*Filesize:* ${filesizeF}
*Source:* ${vid.url}
*${isLimit ? 'Pakai ': ''}Link:* ${await shortlink(dl_link)}
*Server y2mate:* ${usedServer}

_*Please wait while processing..*_
`.trim(), m)
let _thumb = {}
try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
catch (e) { }
if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*Title:* ${title}
*Filesize:* ${filesizeF}
*Source:* ${vid.url}
*Server y2mate:* ${usedServer}
`.trim(), m, false,  {
  ..._thumb,
  asDocument: chat.useDocument
})
}
handler.help = ['play', 'play2'].map(v => v + ' <search>')
handler.tags = ['downloader']
handler.command = /^play2?$/i
handler.premium = false
handler.group = false

handler.exp = 0
handler.limit = true

module.exports = handler

async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await require('axios').get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}
