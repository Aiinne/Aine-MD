/*let fetch = require('node-fetch')
let handler = async (m, { text }) => {
    if (!text) throw `Uhm.. Teksnya mana?`
    let res = await fetch(global.API('xteam', '/kbbi', { kata: text }, 'APIKEY'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let list = json.message.list.map((v, i) => `${i + 1}. ${v}`).join('\n')
    m.reply(`${json.message.word}
    
${list}
`.trim())
}
handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i
module.exports = handler
*/

const { kbbi } = require('../lib/kbbi')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Contoh penggunaan\n#kbbi hai'
  kbbi(text).then(res => {
  let kbbi = JSON.stringify(res)
  let jjson = JSON.parse(kbbi)
  let json = jjson
  let pesan = `${json.lema}\n\n${json.arti.join(', ')}`.trim()
  m.reply(pesan)
  })
}
handler.help = ['kbbi <kata>']
handler.tags = ['internet']
handler.command = /^(kbbi)$/i
handler.limit = true

module.exports = handler