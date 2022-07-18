let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, text, usedPrefix }) => {
setTimeout(() => {
conn.sendMessage(m.chat, {
  text: `Nah ini untuk kamu.. 🥰\nKlik tombolnya iya..`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `For you ♡`,
      url: 'https://www.geocities.ws/mrrwith/Aine-Untukmu.html'
    }
  }],
  footer: 'For You ❤️'
})
}, 15000)
setTimeout(() => {
conn.reply(m.chat, 'Ciee.. nungguin nih hehe', m)
}, 10000)
setTimeout(() => {
conn.reply(m.chat, 'Mau liat nggak kamu? 😆', m)
}, 5000)
setTimeout(() => {
conn.reply(m.chat, 'Aku punya kejutan spesial loh untuk mu.. 😅', m)
}, 0)
}
handler.help = ['forme']
handler.tag = ['internet']
handler.command = /^(forme)$/i

module.exports = handler
