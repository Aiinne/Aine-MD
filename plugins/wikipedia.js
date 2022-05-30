/*const { wikipedia } = require('@bochilteam/scraper')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Minecraft`
  let json = await wikipedia(text)
  m.reply(`
*${json.title}*
${json.img}

${json.articles}
`.trim())
}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i

module.exports = handler*/




let axios = require("axios")
let fetch = require("node-fetch")
let cheerio = require("cheerio")
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://id.wikipedia.org/wiki/${querry}`)
    const $ = cheerio.load(link.data)
    let judul = $('#firstHeading').text().trim()
    let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//k.top4top.io/p_2121ug8or0.png`
    let isi = []
    $('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
      let penjelasan = $(Ra).find('p').text().trim()
      isi.push(penjelasan)
    })
    for (let i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i
        }
      }
      return data
    }
  } catch (err) {
    var notFond = {
      status: link.status,
      Pesan: eror
    }
    return notFond
  }
}


let handler = async (m, { conn, text }) => {
if (!text) return m.reply('put query')
wikipedia(`${text}`).then(res => {
    conn.sendFile(m.chat, res.result.thumb, 'wiki.png',`*Judul:* ${res.result.judul}\n\n*Penjelasan:*\n${res.result.isi}\n\n*© Wikipedia*`, m)
  }).catch(() => { m.reply('Tidak Ditemukan') })
}

handler.help = ['wikipedia'].map(v => v + ' <text>')
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i
handler.limit = true 

module.exports = handler
