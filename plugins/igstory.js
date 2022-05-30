/*let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let res = await fetch(global.API('xteam', '/dl/igs', {
    nama: args[0]
  }, 'APIKEY'))
  let json = await res.json()
  if (res.status != 200) throw json
  if (json.result.error) throw json.result.message
  let { username, storylist } = json.result
  let dateConfig = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }
  for (let { url, type, taken_at } of storylist)
    conn.sendFile(m.chat, url, 'ig' + (type == 'video' ? '.mp4' : '.jpg'), `
@${username}
Memposting pada ${new Date(taken_at * 1000).toLocaleDateString('id', dateConfig)}
`, m)
  throw json.result
}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']

handler.command = /^(igs(tory)?)$/i

module.exports = handler*/




//const { igstory } = require('../lib/scrape')
/*const cheerio = require('cheerio')
const fetch = require('node-fetch')
const axios = require("axios")

let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `Pengunaan:\n${usedPrefix + command} <username/url>\n\nContoh:\n\n${usedPrefix + command} <username/url>`
  if (args[0].startsWith('http') || args[0].startsWith('@')) throw `username salah`

  igstory(args[0]).then(async res => {
    let igs = JSON.stringify(res)
    let json = JSON.parse(igs)
    await m.reply(global.wait)
    for (let { downloadUrl, type } of json)
      conn.sendFile(m.chat, downloadUrl, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '*Nih*', m)

  })

}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i
handler.limit = true
handler.group = true

module.exports = handler


function igstory(username) {
    return new Promise(async (resolve, reject) => {
        axios.request({
            url: 'https://www.instagramsave.com/instagram-story-downloader.php',
            method: 'GET',
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg"
            }
        })
            .then(({ data }) => {
                const $ = cheerio.load(data)
                const token = $('#token').attr('value')
                let config = {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                        "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
                        "cookie": "PHPSESSID=ugpgvu6fgc4592jh7ht9d18v49; _ga=GA1.2.1126798330.1625045680; _gid=GA1.2.1475525047.1625045680; __gads=ID=92b58ed9ed58d147-221917af11ca0021:T=1625045679:RT=1625045679:S=ALNI_MYnQToDW3kOUClBGEzULNjeyAqOtg",
                        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    },
                    data: {
                        'url': 'https://www.instagram.com/' + username,
                        'action': 'story',
                        'token': token
                    }
                }
                axios.post('https://www.instagramsave.com/system/action.php', qs.stringify(config.data), { headers: config.headers })
                    .then(({ data }) => {
                        resolve(data.medias)
                    })
            })
            .catch(reject)
    })
}*/





let axios = require('axios')
let cheerio = require('cheerio')
let fetch = require('node-fetch')

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `*Perintah ini untuk mengunduh postingan instagram story*\n\nContoh:\n${usedPrefix + command} alinursetiawan24`
  let res = await fetch(`https://megayaa.herokuapp.com/api/igstori?username=${text}`)
   if (!res.ok) return m.reply('Error')
   let json = await res.json()
   if (!json.status) throw json
    await m.reply('Sedang di proses..')
    for (let { url, type } of json.data) {
      await conn.delay(1500)
      conn.sendFile(m.chat, url, 'ig' + (type == 'image' ? '.jpg' : '.mp4'), '', m)
    }
}
handler.help = ['igstory'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igs(tory)?)$/i
handler.limit = true
handler.group = true

module.exports = handler

