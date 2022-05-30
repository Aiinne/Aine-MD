let handler = async (m, { conn, usedPrefix }) => {
         let paus = global.db.data.users[m.sender].paus 
         let kepiting = global.db.data.users[m.sender].kepiting
         let gurita = global.db.data.users[m.sender].gurita 
         let cumi = global.db.data.users[m.sender].cumi 
         let buntal = global.db.data.users[m.sender].buntal 
         let dory = global.db.data.users[m.sender].dory 
         let lumba = global.db.data.users[m.sender].lumba 
         let lobster = global.db.data.users[m.sender].lobster 
         let hiu = global.db.data.users[m.sender].hiu 
         let udang = global.db.data.users[m.sender].udang
         let ikan = global.db.data.users[m.sender].ikan 
         let orca = global.db.data.users[m.sender].orca 
         let pancingan = global.db.data.users[m.sender].pancingan
         let _pancingan = global.db.data.users[m.sender].anakpancingan 
         let aineh = `
*Fish Pond*
Hiu: ${hiu}
Ikan: ${ikan}
Dory: ${dory}
Orca: ${orca}
Paus: ${paus}
Cumi: ${cumi}
Gurita: ${gurita}
Buntal: ${buntal}
Udang: ${udang}
Lumba²: ${lumba}
Lobster: ${lobster}
Kepiting: ${kepiting}

*Level Pancingan:*
Pancingan: *${pancingan == 0 ? 'Tidak Punya' : '' || pancingan == 1 ? 'Level 1' : '' || pancingan == 2 ? 'Level 2' : '' || pancingan == 3 ? 'Level 3' : '' || pancingan == 4 ? 'Level 4' : '' || pancingan == 5 ? 'Level MAX' : ''}*

╭────────────────
│pancingan ${pancingan == 0 ? 'Tidak Punya' : '' || pancingan > 0 && pancingan < 5 ? `Level *${pancingan}* To level *${pancingan + 1}*\n│Exp *${_pancingan}* -> *${pancingan *10000}*` : '' || pancingan == 5 ? '*Max Level*' : ''}
╰────────────────
`.trim()

conn.reply(m.chat, aineh, m)
}

handler.help = ['kolam']
handler.tags = ['rpg']
handler.command = /^(kolam)$/i
handler.limit = true
handler.group = true
module.exports = handler

