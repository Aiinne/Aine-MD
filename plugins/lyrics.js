let finder = require('lyrics-finder')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} kepastian rasa`
  let error = `Maaf tidak di temukan lirik *${text}*`
  let res = await finder("", text)
  if (!res) throw error

  m.reply(res)
}
handler.help = ['lirik'].map(v => v + ' <teks>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.limit = true

module.exports = handler


/*
let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
    title: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  conn.reply(m.chat, `*${json.title}*
_${json.author}_\n
${json.lyrics}\n\n
${json.links.genius}
`, m)
}
handler.help = ['lirik'].map(v => v + ' <judul>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.limit = true

module.exports = handler
*/

/*const cheerio = require("cheerio")
const axios = require("axios")

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if(!text) return reply('Text nya kak?')
	    lyrics(text).then(judul => {
		let liriks = JSON.stringify(judul)
		let json = JSON.parse(liriks)
        let result = json
        let lilik = `${json.hasil}`.trim()
           conn.reply(m.chat, lilik, m)
       })
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.limit = true

module.exports = handler


function lyrics(judul){
	return new Promise(async(resolve, reject) => {
   		axios.get('https://www.musixmatch.com/search/' + judul)
   		.then(async({ data }) => {
   		const $ = cheerio.load(data)
   		const hasil = {};
   		let limk = 'https://www.musixmatch.com'
   		const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
	   		await axios.get(link)
	   		.then(({ data }) => {
		   		const $$ = cheerio.load(data)
		   		hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
		  		$$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
		   hasil.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()
		   })
	   })
	   resolve(hasil)
   })
   .catch(reject)
   })
}*/
