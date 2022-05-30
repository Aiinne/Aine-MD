let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
     if (!text) throw `Masukan nama nabi\nExample: ${usedPrefix + command} adam`
     let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json()
     let hasil = ` Nabi : ${kisah.name}\nTanggal Lahir : ${kisah.thn_kelahiran}\nTempat Lahir : ${kisah.tmp}\nUsia : ${kisah.usia}\nKisah : ${kisah.description}`
     conn.reply(m.chat, hasil, m)
     }
handler.help = ['kisahnabi <name>']
handler.tags = ['islami']
handler.command = /^kisahnabi$/i
handler.register = false
handler.limit = true

module.exports = handler
                   