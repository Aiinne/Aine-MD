
let handler = async (m, { conn,usedPrefix, command, text, args }) => {
       let user = global.db.data.users[m.sender]
       let pancingan = user.pancingan
       let umpan = user.umpan
       let type = (args[0] || '').toLowerCase()
        switch (type) {
	          case 'easy':
                                  let __timers = (new Date - global.db.data.users[m.sender].lastmancingeasy)
                                  let _timers = (28800000 - __timers)
                                  let timers = clockString(_timers) 
                                  if (pancingan == 0 || umpan == 0) return m.reply('*Kamu belum memiliki Pancingan dan Umpan, Silahkan beli dulu..*')
                                  if (new Date - global.db.data.users[m.sender].lastmancingeasy > 28800000) {
                                  if (global.db.data.users[m.sender].pancingan > 1) {
                                  if (global.db.data.users[m.sender].umpan > 99) {
                                  let randomaku1 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku2 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku3 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku4 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku5 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku6 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku7 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku8 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku9 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku10 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku11 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku12 = `${Math.floor(Math.random() * 10)}`
                                  let randomaku13 = `${Math.floor(Math.random() * 50)}`

                                  let rbrb1 = (randomaku1 * 1)
                                  let rbrb2 = (randomaku2 * 1) 
                                  let rbrb3 = (randomaku3 * 1)
                                  let rbrb4 = (randomaku4 * 1)
                                  let rbrb5 = (randomaku5 * 1)
                                  let rbrb6 = (randomaku6 * 1)
                                  let rbrb7 = (randomaku7 * 1)
                                  let rbrb8 = (randomaku8 * 1)
                                  let rbrb9 = (randomaku9 * 1)
                                  let rbrb10 = (randomaku10 * 1)
                                  let rbrb11 = (randomaku11 * 1)
                                  let rbrb12 = (randomaku12 * 1)
                                  let rbrb13 = (randomaku13 * 1)

                                  let zero1 = `${rbrb1}`
                                  let zero2 = `${rbrb2}`
                                  let zero3 = `${rbrb3}`
                                  let zero4 = `${rbrb4}`
                                  let zero5 = `${rbrb5}`
                                  let zero6 = `${rbrb6}`
                                  let zero7 = `${rbrb7}`
                                  let zero8 = `${rbrb8}`
                                  let zero9 = `${rbrb9}`
                                  let zero10 = `${rbrb10}`
                                  let zero11 = `${rbrb11}`
                                  let zero12 = `${rbrb12}`

                                 let hsl = `
*《 Hasil Memancing Kali Ini 》*
 *🦀 = [ ${zero2} ]*			*🐠 = [ ${zero6} ]*
 *🦞 = [ ${zero8} ]*			 *🐟 = [ ${zero11} ]*
 *🦐 = [ ${zero10} ]*			 *🐬 = [ ${zero7} ]*
 *🦑 = [ ${zero4} ]*			 *🐳 = [ ${zero12} ]*
 *🐙 = [ ${zero3} ]*			 *🦈 = [ ${zero9} ]*
  *🐡 = [ ${zero5} ]*			*🐋 = [ ${zero1} ]*
  
+1 Tiketcoin
`.trim()
                                 global.db.data.users[m.sender].paus += rbrb1
                                 global.db.data.users[m.sender].kepiting += rbrb2
                                 global.db.data.users[m.sender].gurita += rbrb3
                                 global.db.data.users[m.sender].cumi += rbrb4
                                 global.db.data.users[m.sender].buntal += rbrb5
                                 global.db.data.users[m.sender].dory += rbrb6
                                 global.db.data.users[m.sender].lumba += rbrb7
                                 global.db.data.users[m.sender].lobster += rbrb8
                                 global.db.data.users[m.sender].hiu += rbrb9
                                 global.db.data.users[m.sender].udang += rbrb10
                                 global.db.data.users[m.sender].ikan += rbrb11
                                 global.db.data.users[m.sender].orca += rbrb12
                                 global.db.data.users[m.sender].tiketcoin += 1
                                 global.db.data.users[m.sender].umpan -= rbrb13

                                setTimeout(() => {
                                m.reply(`Yuk mancing mania level easy lagi`)
                                }, 28800000) 
                                setTimeout(() => {
                                m.reply(`${hsl}`)
                                }, 12000) 
                                setTimeout(() => {
                                m.reply('Menunggu')
                                 }, 6000) 
                                 setTimeout(() => {
                                 m.reply('_Sedang Memancing..._')
                                 }, 0) 
                                 user.lastmancingeasy = new Date * 1
                                 } else conn.reply(m.chat, 'Minimal umpan kamu *100* untuk memancing level mudah', m)
                            } else conn.reply(m.chat, 'Minimal pancingan kamu *Level 2* untuk memancing level mudah', m)
                       } else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar ${timers}*\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
                 break
	          case 'normal':
                                  let __timerl = (new Date - global.db.data.users[m.sender].lastmancingeasy)
                                  let _timerl = (28800000 - __timerl)
                                  let timerl = clockString(_timerl) 
                                  if (pancingan == 0 || umpan == 0) return m.reply('*Kamu belum memiliki Pancingan dan Umpan, Silahkan beli dulu..*')
                                  if (new Date - global.db.data.users[m.sender].lastmancingeasy > 28800000) {
                                  if (global.db.data.users[m.sender].pancingan > 2) {
                                  if (global.db.data.users[m.sender].umpan > 149) {
                                  let randomakud1 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud2 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud3 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud4 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud5 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud6 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud7 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud8 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud9 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud10 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud11 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud12 = `${Math.floor(Math.random() * 50)}`
                                  let randomakud13 = `${Math.floor(Math.random() * 100)}`

                                  let rbrbs1 = (randomakud1 * 1)
                                  let rbrbs2 = (randomakud2 * 1) 
                                  let rbrbs3 = (randomakud3 * 1)
                                  let rbrbs4 = (randomakud4 * 1)
                                  let rbrbs5 = (randomakud5 * 1)
                                  let rbrbs6 = (randomakud6 * 1)
                                  let rbrbs7 = (randomakud7 * 1)
                                  let rbrbs8 = (randomakud8 * 1)
                                  let rbrbs9 = (randomakud9 * 1)
                                  let rbrbs10 = (randomakud10 * 1)
                                  let rbrbs11 = (randomakud11 * 1)
                                  let rbrbs12 = (randomakud12 * 1)
                                  let rbrbs13 = (randomakud13 * 1)

                                  let aine1 = `${rbrbs1}`
                                  let aine2 = `${rbrbs2}`
                                  let aine3 = `${rbrbs3}`
                                  let aine4 = `${rbrbs4}`
                                  let aine5 = `${rbrbs5}`
                                  let aine6 = `${rbrbs6}`
                                  let aine7 = `${rbrbs7}`
                                  let aine8 = `${rbrbs8}`
                                  let aine9 = `${rbrbs9}`
                                  let aine10 = `${rbrbs10}`
                                  let aine11 = `${rbrbs11}`
                                  let aine12 = `${rbrbs12}`

                                 let hsls = `
*《 Hasil Memancing Kali Ini 》*
 *🦀 = [ ${aine2} ]*			*🐠 = [ ${aine6} ]*
 *🦞 = [ ${aine8} ]*			 *🐟 = [ ${aine11} ]*
 *🦐 = [ ${aine10} ]*			 *🐬 = [ ${aine7} ]*
 *🦑 = [ ${aine4} ]*			 *🐳 = [ ${aine12} ]*
 *🐙 = [ ${aine3} ]*			 *🦈 = [ ${aine9} ]*
  *🐡 = [ ${aine5} ]*			*🐋 = [ ${aine1} ]*
  
+1 Tiketcoin
`.trim()
                                 global.db.data.users[m.sender].paus += rbrbs1
                                 global.db.data.users[m.sender].kepiting += rbrbs2
                                 global.db.data.users[m.sender].gurita += rbrbs3
                                 global.db.data.users[m.sender].cumi += rbrbs4
                                 global.db.data.users[m.sender].buntal += rbrbs5
                                 global.db.data.users[m.sender].dory += rbrbs6
                                 global.db.data.users[m.sender].lumba += rbrbs7
                                 global.db.data.users[m.sender].lobster += rbrbs8
                                 global.db.data.users[m.sender].hiu += rbrbs9
                                 global.db.data.users[m.sender].udang += rbrbs10
                                 global.db.data.users[m.sender].ikan += rbrbs11
                                 global.db.data.users[m.sender].orca += rbrbs12 
                                 global.db.data.users[m.sender].tiketcoin += 1
                                 global.db.data.users[m.sender].umpan -= rbrbs13 
                                 
                                setTimeout(() => {
                                m.reply(`Yuk mancing mania level normal lagi`)
                                }, 28800000) 
                                setTimeout(() => {
                                m.reply(`${hsls}`)
                                }, 12000) 
                                setTimeout(() => {
                                m.reply('Menunggu')
                                 }, 6000) 
                                 setTimeout(() => {
                                 m.reply('_Sedang Memancing..._')
                                 }, 0) 
                                 user.lastmancingeasy = new Date * 1
                                 } else conn.reply(m.chat, 'Minimal umpan kamu *150* untuk memancing level normal', m)
                            } else conn.reply(m.chat, 'Minimal pancingan kamu *Level 3* untuk memancing level normal', m)
                       } else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar ${timerl}*\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
                 break 
	          case 'hard':
                                  let __timerh = (new Date - global.db.data.users[m.sender].lastmancingeasy)
                                  let _timerh = (28800000 - __timerh)
                                  let timerh = clockString(_timerh) 
                                  if (pancingan == 0 || umpan == 0) return m.reply('*Kamu belum memiliki Pancingan dan Umpan, Silahkan beli dulu..*')
                                  if (new Date - global.db.data.users[m.sender].lastmancingeasy > 28800000) {
                                  if (global.db.data.users[m.sender].pancingan > 3) {
                                  if (global.db.data.users[m.sender].umpan > 199) {
                                  let randomakur1 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur2 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur3 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur4 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur5 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur6 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur7 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur8 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur9 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur10 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur11 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur12 = `${Math.floor(Math.random() * 100)}`
                                  let randomakur13 = `${Math.floor(Math.random() * 150)}`

                                  let rbrbsh1 = (randomakur1 * 1)
                                  let rbrbsh2 = (randomakur2 * 1) 
                                  let rbrbsh3 = (randomakur3 * 1)
                                  let rbrbsh4 = (randomakur4 * 1)
                                  let rbrbsh5 = (randomakur5 * 1)
                                  let rbrbsh6 = (randomakur6 * 1)
                                  let rbrbsh7 = (randomakur7 * 1)
                                  let rbrbsh8 = (randomakur8 * 1)
                                  let rbrbsh9 = (randomakur9 * 1)
                                  let rbrbsh10 = (randomakur10 * 1)
                                  let rbrbsh11 = (randomakur11 * 1)
                                  let rbrbsh12 = (randomakur12 * 1)
                                  let rbrbsh13 = (randomakur13 * 1)

                                  let aines1 = `${rbrbsh1}`
                                  let aines2 = `${rbrbsh2}`
                                  let aines3 = `${rbrbsh3}`
                                  let aines4 = `${rbrbsh4}`
                                  let aines5 = `${rbrbsh5}`
                                  let aines6 = `${rbrbsh6}`
                                  let aines7 = `${rbrbsh7}`
                                  let aines8 = `${rbrbsh8}`
                                  let aines9 = `${rbrbsh9}`
                                  let aines10 = `${rbrbsh10}`
                                  let aines11 = `${rbrbsh11}`
                                  let aines12 = `${rbrbsh12}`

                                 let hslsh = `
*《 Hasil Memancing Kali Ini 》*
 *🦀 = [ ${aines2} ]*			*🐠 = [ ${aines6} ]*
 *🦞 = [ ${aines8} ]*			 *🐟 = [ ${aines11} ]*
 *🦐 = [ ${aines10} ]*			 *🐬 = [ ${aines7} ]*
 *🦑 = [ ${aines4} ]*			 *🐳 = [ ${aines12} ]*
 *🐙 = [ ${aines3} ]*			 *🦈 = [ ${aines9} ]*
  *🐡 = [ ${aines5} ]*			*🐋 = [ ${aines1} ]*
  
+1 Tiketcoin
`.trim()
                                 global.db.data.users[m.sender].paus += rbrbsh1
                                 global.db.data.users[m.sender].kepiting += rbrbsh2
                                 global.db.data.users[m.sender].gurita += rbrbsh3
                                 global.db.data.users[m.sender].cumi += rbrbsh4
                                 global.db.data.users[m.sender].buntal += rbrbsh5
                                 global.db.data.users[m.sender].dory += rbrbsh6
                                 global.db.data.users[m.sender].lumba += rbrbsh7
                                 global.db.data.users[m.sender].lobster += rbrbsh8
                                 global.db.data.users[m.sender].hiu += rbrbsh9
                                 global.db.data.users[m.sender].udang += rbrbsh10
                                 global.db.data.users[m.sender].ikan += rbrbsh11
                                 global.db.data.users[m.sender].orca += rbrbsh12 
                                 global.db.data.users[m.sender].tiketcoin += 1
                                 global.db.data.users[m.sender].umpan -= rbrbsh13

                                setTimeout(() => {
                                m.reply(`Yuk mancing mania level hard lagi`)
                                }, 28800000) 
                                setTimeout(() => {
                                m.reply(`${hslsh}`)
                                }, 12000) 
                                setTimeout(() => {
                                m.reply('Menunggu')
                                 }, 6000) 
                                 setTimeout(() => {
                                 m.reply('_Sedang Memancing..._')
                                 }, 0) 
                                 user.lastmancingeasy = new Date * 1
                                 } else conn.reply(m.chat, 'Minimal umpan kamu *200* untuk memancing level hard', m)
                            } else conn.reply(m.chat, 'Minimal pancingan kamu *Level 4* untuk memancing level hard', m)
                       } else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar ${timerh}*\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
                 break
	          case 'extreme':
                                  let __timere = (new Date - global.db.data.users[m.sender].lastmancingeasy)
                                  let _timere = (28800000 - __timere)
                                  let timere = clockString(_timere) 
                                  if (pancingan == 0 || umpan == 0) return m.reply('*Kamu belum memiliki Pancingan dan Umpan, Silahkan beli dulu..*')
                                  if (new Date - global.db.data.users[m.sender].lastmancingeasy > 28800000) {
                                  if (global.db.data.users[m.sender].pancingan > 4) {
                                  if (global.db.data.users[m.sender].umpan > 249) {
                                  let randomakue1 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue2 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue3 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue4 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue5 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue6 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue7 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue8 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue9 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue10 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue11 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue12 = `${Math.floor(Math.random() * 500)}`
                                  let randomakue13 = `${Math.floor(Math.random() * 200)}`

                                  let rbrbshe1 = (randomakue1 * 1)
                                  let rbrbshe2 = (randomakue2 * 1) 
                                  let rbrbshe3 = (randomakue3 * 1)
                                  let rbrbshe4 = (randomakue4 * 1)
                                  let rbrbshe5 = (randomakue5 * 1)
                                  let rbrbshe6 = (randomakue6 * 1)
                                  let rbrbshe7 = (randomakue7 * 1)
                                  let rbrbshe8 = (randomakue8 * 1)
                                  let rbrbshe9 = (randomakue9 * 1)
                                  let rbrbshe10 = (randomakue10 * 1)
                                  let rbrbshe11 = (randomakue11 * 1)
                                  let rbrbshe12 = (randomakue12 * 1)
                                  let rbrbshe13 = (randomakue13 * 1)

                                  let ainese1 = `${rbrbshe1}`
                                  let ainese2 = `${rbrbshe2}`
                                  let ainese3 = `${rbrbshe3}`
                                  let ainese4 = `${rbrbshe4}`
                                  let ainese5 = `${rbrbshe5}`
                                  let ainese6 = `${rbrbshe6}`
                                  let ainese7 = `${rbrbshe7}`
                                  let ainese8 = `${rbrbshe8}`
                                  let ainese9 = `${rbrbshe9}`
                                  let ainese10 = `${rbrbshe10}`
                                  let ainese11 = `${rbrbshe11}`
                                  let ainese12 = `${rbrbshe12}`

                                 let hslse = `
*《 Hasil Memancing Kali Ini 》*
 *🦀 = [ ${ainese2} ]*			*🐠 = [ ${ainese6} ]*
 *🦞 = [ ${ainese8} ]*			 *🐟 = [ ${ainese11} ]*
 *🦐 = [ ${ainese10} ]*			 *🐬 = [ ${ainese7} ]*
 *🦑 = [ ${ainese4} ]*			 *🐳 = [ ${ainese12} ]*
 *🐙 = [ ${ainese3} ]*			 *🦈 = [ ${ainese9} ]*
  *🐡 = [ ${ainese5} ]*			*🐋 = [ ${ainese1} ]*
  
+1 Tiketcoin
`.trim()
                                 global.db.data.users[m.sender].paus += rbrbshe1
                                 global.db.data.users[m.sender].kepiting += rbrbshe2
                                 global.db.data.users[m.sender].gurita += rbrbshe3
                                 global.db.data.users[m.sender].cumi += rbrbshe4
                                 global.db.data.users[m.sender].buntal += rbrbshe5
                                 global.db.data.users[m.sender].dory += rbrbshe6
                                 global.db.data.users[m.sender].lumba += rbrbshe7
                                 global.db.data.users[m.sender].lobster += rbrbshe8
                                 global.db.data.users[m.sender].hiu += rbrbshe9
                                 global.db.data.users[m.sender].udang += rbrbshe10
                                 global.db.data.users[m.sender].ikan += rbrbshe11
                                 global.db.data.users[m.sender].orca += rbrbshe12 
                                 global.db.data.users[m.sender].tiketcoin += 1
                                 global.db.data.users[m.sender].umpan -= rbrbshe13

                                setTimeout(() => {
                                m.reply(`Yuk mancing mania level extreme lagi`)
                                }, 28800000) 
                                setTimeout(() => {
                                m.reply(`${hslse}`)
                                }, 12000) 
                                setTimeout(() => {
                                m.reply('Menunggu')
                                 }, 6000) 
                                 setTimeout(() => {
                                 m.reply('_Sedang Memancing..._')
                                 }, 0) 
                                 user.lastmancingeasy = new Date * 1
                                 } else conn.reply(m.chat, 'Minimal umpan kamu *250* untuk memancing level extreme', m)
                            } else conn.reply(m.chat, 'Minimal pancingan kamu *Level 5* untuk memancing level extreme', m)
                       } else conn.reply(m.chat, `*Sepertinya Anda Sudah Lelah*\n*Silahkan Istirahat Sejenak Sekitar ${timere}*\n*Untuk Bisa Melanjutkan Memancing Lagi*`, m)
                 break
                 default:
                         return conn.reply(m.chat, `${usedPrefix + command} [easy | normal | hard | extreme]\nContoh penggunaan: *${usedPrefix + command} easy*`, m)
                 }
}

handler.help = ['pancing <type>']
handler.tags = ['game']
handler.command = /^(pancing)$/i
handler.register = true
handler.limit = true

module.exports = handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
