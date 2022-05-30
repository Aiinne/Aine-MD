/*let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa yang mau di banned?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu lah'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `berhasil banned`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.mods = true

module.exports = handler*/

let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var hl = []
  hl[0] = text.split('|')[0]
  hl[0] = no(hl[0]) + "@s.whatsapp.net"
  hl[1] = text.split('|')[1]
  
  if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}ban number|days\n*Example:* ${usedPrefix}ban 6289654360447|99\n\n• ${usedPrefix}ban @tag|days\n*Example:* ${usedPrefix}ban @6289654360447|99`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  var jumlahHari = 86400000 * hl[1]
  // var jumlahHari = 1000 * text
  var now = new Date() * 1
  global.db.data.users[hl[0]].banned = true
  if (now < global.db.data.users[hl[0]].bannedDate) global.db.data.users[hl[0]].bannedDate += jumlahHari
  else global.db.data.users[hl[0]].bannedDate = now + jumlahHari
  conn.reply(m.chat,`*TERBANNED*\n\nKamu di banned *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*Banned : ${msToDate(global.db.data.users[hl[0]].bannedDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } })
  conn.reply(hl[0],`*TERBANNED*\n\nKamu di banned *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*Banned : ${msToDate(global.db.data.users[hl[0]].bannedDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } }) 

}
handler.help = ['ban *@tag|days*']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.mods = true
handler.fail = null
module.exports = handler

function msToDate(ms) {
  temp = ms
  days = Math.floor(ms / (24*60*60*1000));
  daysms = ms % (24*60*60*1000);
  hours = Math.floor((daysms)/(60*60*1000));
  hoursms = ms % (60*60*1000);
  minutes = Math.floor((hoursms)/(60*1000));
  minutesms = ms % (60*1000);
  sec = Math.floor((minutesms)/(1000));
  return days+"H "+hours+"J "+ minutes + "M";
  // +minutes+":"+sec;
}
