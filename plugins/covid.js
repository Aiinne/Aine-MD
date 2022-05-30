let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw 'Country?'
  if (json.confirmed) m.reply(`
Countries : ${text}
Confirmed : ${json.confirmed.value}
Recovered : ${json.recovered.value}
Deaths : ${json.deaths.value}
Last Update : ${json.lastUpdate}
\n\nMade by ❤️`.trim())
  else throw json
}
handler.help = ['infocovid'].map(v => v + ' <country>')
handler.tags = ['info']
handler.command = /^(infocorona|corona|covid|covid19)$/i
//susu
module.exports = handler
