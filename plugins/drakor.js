/*
  
  
  Powered by Aine
  Recoder doang ga mau bantu update 
  

*/
const axios = require('axios')
const cheerio = require('cheerio')
const request = require('request')

let handler = async (m, { text,usedPrefix,command }) => {
   if (!text) return m.reply('Cari apa?\n\nContoh:\n'+usedPrefix+command+' oh my ghost')
   var a = await drakor(text)
   var b = a.map((v, i) => `_*DATA KE ${i + 1}*_\n\n*📜 Title:* ${v.judul}\n*🗓️ Years:* ${v.years}\n*🎥 Genre:* ${v.genre}\n*🌐 Url:* ${v.url}`).join('\n\n*$-----------------------------------------------$*\n\n')
  m.reply(b)
}
handler.help = ['drakor [text]']
handler.tags = ['internet']
handler.command = /^drakor$/i
handler.limit = true

module.exports = handler

const drakor = (query) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://drakorasia.blog//?s=${query}&post_type=post`)
            .then(({
                data
            }) => {
                const $ = cheerio.load(data)
                const hasil = [];
                 $('#post > div ').each(function(a, b) {
                    result = {
                    status: 200,
                    author: "@ Aine",
                    judul: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a > h2').text().trim(),
                    years: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > div.category.text-gray.font-normal.text-white.text-xs.truncate > a').text(),
                    genre: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > div.genrenya.text-center.text-white.text-opacity-75.text-xs.mt-1').text().trim(),
                    thumbnail: $(b).find('> div.thumbnail > a > img').attr('src'),
                    url: $(b).find('> div.title.text-center.absolute.bottom-0.w-full.py-2.pb-4.px-3 > a').attr('href')
                }
                hasil.push(result)
                })
                resolve(hasil)
            })
            .catch(reject)
    })
}
