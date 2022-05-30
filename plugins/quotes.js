const fs = require("fs") 
let handler  = async (m, { conn }) => {
let data = fs.readFileSync('./lib/quotes.js');
let jsonData = JSON.parse(data);
let randIndex = Math.floor(Math.random() * jsonData.length);
let randKey = jsonData[randIndex];
let randQuote = '_'+randKey.quotes+'_\n\n_'+randKey.author+'_'
conn.reply(m.chat, randQuote, m)
}
handler.help = ['quotes']
handler.tags = ['quotes']
handler.command = /^quotes$/i
handler.owner = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler