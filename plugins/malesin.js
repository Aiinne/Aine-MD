let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
setTimeout(() => {
conn.sendMessage(m.chat, {
  text: `Hayo jangan marah kamunya\nKlik tombolnya iya.. 🥰`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Maafin aku ♡`,
      url: 'https://www.geocities.ws/mrrwith/Ayang.html'
    }
  }],
  footer: 'Ututu cayangnya aku 😍'
})
}, 15000)
setTimeout(() => {
conn.reply(m.chat, 'Janji jangan marah sama Aine iya.. 😕', m)
}, 10000)
setTimeout(() => {
conn.reply(m.chat, 'Tapi kamu jangan marah iya.. 🥺', m)
}, 5000)
setTimeout(() => {
conn.reply(m.chat, 'Aku punya kejutan spesial loh untuk mu.. 😅', m)
}, 0)
}
handler.help = ['malesin']
handler.tag = ['internet']
handler.command = /^(malesin)$/i

module.exports = handler
