/*const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Perintah ini untuk mengambil stiker dari Telegram*\n\ncontoh:\n${usedPrefix + command} https://t.me/addstickers/menggokil`
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) throw `*Link salah! Perintah ini untuk mengambil stiker dari Telegram*\n\ncontoh:\n${usedPrefix + command} https://t.me/addstickers/menggokil`

    let res = await fetch(global.API('zeks', '/api/telegram-sticker', { url: args[0] }, 'apikey'))
    if (res.status != 200) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) throw json
    let mes = json.result.map((v, i) => `${i + 1}. ${v}`).join('\n')
    m.reply(`*Total:* ${json.result.length}\n*Estimasi selesai:* ${json.result.length * 2} detik\n\n` + mes)
    for (let i of json.result) {
        stiker = await sticker(false, i, global.packname, global.author)
        await conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
        await delay(2000)
    }
}
handler.help = ['stikertelegram <url>']
handler.tags = ['sticker']
handler.command = /^(stic?kertele(gram)?)$/i

handler.limit = true
handler.premium = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))*/



const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, args, usedPrefix, command }) => {

    if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://t.me/addstickers/namapack`
    if (!args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) throw `url salah`
    let packName = args[0].replace("https://t.me/addstickers/", "")

    let gas = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
    if (!gas.ok) throw eror

    let json = await gas.json()
    m.reply(`*Total stiker:* ${json.result.stickers.length}
*Estimasi selesai:* ${json.result.stickers.length * 1.5} detik`.trim())

    for (let i = 0; i < json.result.stickers.length; i++) {
        let fileId = json.result.stickers[i].thumb.file_id

        let gasIn = await fetch(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)

        let jisin = await gasIn.json()


        // conn.sendMessage(m.chat, { url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path }, MessageType.sticker)
        let stiker = await sticker(false, "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + jisin.result.file_path, global.packname, global.author)
        await conn.sendMessage(m.chat, {sticker: stiker })
        await delay(1500)
    }
    m.reply('_*Selesai*_')
}

handler.help = ['stikertelegram <url>']
handler.tags = ['sticker']
handler.command = /^(stic?kertele(gram)?)$/i

handler.limit = true
handler.premium = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))