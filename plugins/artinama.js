/*let fetch = require('node-fetch')

const artinama_api = [
  ['xteam', '/primbon/artinama', 'q', 'APIKEY', json => {
    if (!json.status) throw json
    return `
*Nama:* ${json.result.nama}
*Arti:* ${json.result.arti}

*Makna:* ${json.result.maksud}
`.trim()
  }],
  ['http://nzcha-apii.herokuapp.com', '/artinama', 'nama', null, json => {
    if (!json.status) throw json
    return `
*Arti:* ${json.result}
`.trim()
  }],
  ['https://scrap.terhambar.com', '/nama', 'n', null, json => {
    if (!json.status) throw json
    return `
*Arti:* ${json.result.arti}
`.trim()
  }]
]

let handler = async (m, { text }) => {
  if (!text) throw 'Namanya siapa?'
  let result = ''
  for (let [origin, pathname, query, apikey, fn] of artinama_api) {
    try {
      let res = await fetch(global.API(origin, pathname, { [query]: text }, apikey))
      if (!res.ok) throw res.text()
      let json = await res.json()
      result = await fn(json)
      break
    } catch (e) {
      lastErr = e
    }
  }
  m.reply(result)
}
handler.help = ['artinama'].map(v => v + ' [nama]')
handler.tags = ['kerang']
handler.command = ['artinama']

handler.limit = true

module.exports = handler*/

let fetch = require('node-fetch')
let request = require('request')
let cheerio = require('cheerio')

let handler = async (m, { text }) => {
  if (!text) throw 'Namanya siapa?'
  let nama = text
request.get({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     'http://www.primbon.com/arti_nama.php?nama1='+ nama +'&proses=+Submit%21+',
      },function(error, response, body){
          let $ = cheerio.load(body);
          var y = $.html().split('arti:')[1];
          var t = y.split('method="get">')[1];
          var f = y.replace(t ," ");
          var x = f.replace(/<br\s*[\/]?>/gi, "\n");
          var h  = x.replace(/<[^>]*>?/gm, '');
      console.log(""+ h);
      m.reply(`
Arti dari nama ${nama} adalah
-----------------------------------
Nama ${nama} ${h}
-----------------------------------
`)
  });
}
handler.help = ['artinama'].map(v => v + ' [name]')
handler.tags = ['fun']
handler.command = ['artinama']
handler.limit = true

module.exports = handler
