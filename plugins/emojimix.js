const fetch = require('node-fetch')
let fs = require("fs")
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, text, args }) => {
if (!args[0]) throw 'Contoh penggunaan:\n\n*.emojimix 🤨&😣*'
   	let [emoji1, emoji2] = text.split`&`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
			let stiker = await sticker(false, res.url, packname, author)
			conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
		}
}
		
handler.help = ['emojimix']
handler.tags = ['sticker']
handler.command = /^(emojimix)$/i
handler.limit = true 
module.exports = handler


const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})
