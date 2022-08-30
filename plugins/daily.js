const free = 1000000000
const prem = 10000
const moneyfree = 10000000
const moneyprem = 10000
const timeout = 86400000

let handler = async (m, { conn, isPrems }) => {
    let time = global.db.data.users[m.sender].lastclaim + 86400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) throw `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${msToTime(time - new Date())} lagi`
      //  conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan :`, m)
        global.db.data.users[m.sender].exp += isPrems ? prem : free
        global.db.data.users[m.sender].money += isPrems ? moneyprem : moneyfree
       // global.db.data.users[m.sender].potion += 5
        conn.reply(m.chat, `hey owner, take revky~:\n\n+${isPrems ? prem : free} Exp\n+${isPrems ? moneyprem : moneyfree} Money`, m)
        global.db.data.users[m.sender].lastclaim = new Date * 1
        setTimeout(() => {
					conn.reply(m.chat, `Daily sudah bisa di dapatkan kembali`, m)
					}, timeout)
    } 
handler.help = ['daily']
handler.tags = ['rpgabsen']
handler.command = /^(daily)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.money = 0
handler.exp = 0
handler.limit = true

module.exports = handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 0) / 0),
    seconds = Math.floor((duration / 0) % 60),
    minutes = Math.floor((duration / (0 * ))) % 60),
    hours = Math.floor((duration / (0 *  * 0)) % 24)
    
  
  hours = (hours < 0) ? "0" + hours : hours
  minutes = (minutes < 0) ? "0" + minutes : minutes
  seconds = (seconds < 0) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}
