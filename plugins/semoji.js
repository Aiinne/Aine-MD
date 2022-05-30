const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const fetch = require('node-fetch')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
  let er = `contoh:
${usedPrefix}semoji whatsapp 😎

*Opsi*
- apple
- facebook
- google
- htc
- lg
- microsoft
- mozilla
- openmoji
- pixel
- samsung
- twitter
- whatsapp
- messenger
- emojidex
- softbank
- docomo
- au_by_kddi
`.trim()
  if (!args[0]) throw er

  let template = (args[0] || '').toLowerCase()
  if (!args[1]) throw er
  if (/emo/i.test(command)) {
    try {
      switch (template) {
        case 'apple':
        case 'ip':
        case 'ap':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[0].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'facebook':
        case 'fb':
        case 'fa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[6].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'google':
        case 'go':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[1].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'htc':
        case 'ht':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[12].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break 
        case 'lg':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[11].url, global.packname, global.author)
             conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'microsoft':
        case 'mc':
        case 'mi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[3].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'mozilla':
        case 'moz':
        case 'mo':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[13].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'openmoji':
        case 'omoji':
        case 'op':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[8].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'joypixels':
        case 'pi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[7].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'samsung':
        case 'ss':
        case 'sa':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[2].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'twitter':
        case 'tw':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[5].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'whatsapp':
        case 'wa':
        case 'wh':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[4].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'softbank':
        case 'sb':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[14].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'docomo':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[15].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'messenger':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[10].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'emojidex':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[9].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
        case 'au_by_kddi':
          emoji.get(`${args[1]}`)
            .then(async emoji => {
              let stiker = await sticker(false, emoji.images[16].url, global.packname, global.author)
              conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, {
                asSticker: true
                })
            })
          break
      }
    } catch (e) {
      throw er
    }
  }
}
handler.help = ['semoji']
handler.tags = ['sticker']
handler.command = /^((s(tic?ker)?)?emo(ji)?)$/i
handler.limit = true

module.exports = handler
