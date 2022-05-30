const hx = require('hxz-api')
let handler = async (m, { conn, text, usedPrefix, command }) => {
//let txt = args.join` `
if(!text) return reply('Text nya kak?')
    /*        let play = await hx.playstore(`${txt}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }*/
  var a = await hx.playstore(text)
var b = a.map((v, i) => `*${i + 1}. 「 PLAY STORE 」*\n📜 Title: _${v.name}_\n🧑‍💻 Developer: _${v.developer}_\n*🔗 Link:* ${v.link}`).join('\n❉─────────────────────❉\n')
  m.reply(b)
      //      conn.reply(store)
            }
handler.help = ['playstore']
handler.tags = ['internet']
handler.command = /^(playstore)$/i
handler.limit = true
handler.group = false

module.exports = handler
