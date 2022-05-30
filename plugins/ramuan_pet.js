let handler = async (m, { conn, args, usedPrefix }) => {
    let type = (args[0] || '').toLowerCase()
    let timebah = 600000
    let timeda = 600000
    let timela = 600000
    let timega = 600000
    let timebi = 600000
    let timeur = 600000
    let timenix = 600000
    let timefin = 600000
    let timecing = 600000
    let timeher = 600000
    let rubah = global.db.data.users[m.sender].rubah
    let kuda = global.db.data.users[m.sender].kuda
    let serigala = global.db.data.users[m.sender].serigala
    let naga = global.db.data.users[m.sender].naga
    let kucing = global.db.data.users[m.sender].kucing
    let phonix = global.db.data.users[m.sender].phonix
    let kyubi = global.db.data.users[m.sender].kyubi
    let centaur = global.db.data.users[m.sender].centaur
    let griffin = global.db.data.users[m.sender].griffin
    let hero = global.db.data.users[m.sender].hero
    switch (type) {
        case 'rubah':
            if (rubah == 0) return m.reply('*Kamu belum memiliki Pet Rubah*')
            if (rubah == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktur = (new Date - global.db.data.users[m.sender].ramuanrubahlast)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - global.db.data.users[m.sender].ramuanrubahlast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakrubah += 200
                    global.db.data.users[m.sender].ramuanrubahlast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Rubah*', m)
                    }, timebah)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 1000) - 1)
                        if (global.db.data.users[m.sender].anakrubah > naiklvl) {
                            global.db.data.users[m.sender].rubah += 1
                            global.db.data.users[m.sender].anakrubah -= (rubah * 1000)
                            conn.reply(m.chat, `*Selamat Pet Rubah kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktur}* lagi`)
            break
        case 'kuda':
            if (kuda == 0) return m.reply('*Kamu belum memiliki Pet Kuda*')
            if (kuda == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktuk = (new Date - global.db.data.users[m.sender].ramuankudalast)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - global.db.data.users[m.sender].ramuankudalast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakkuda += 200
                    global.db.data.users[m.sender].ramuankudalast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Kuda*', m)
                    }, timeda)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 1000) - 1)
                        if (global.db.data.users[m.sender].anakkuda > naiklvl) {
                            global.db.data.users[m.sender].kuda += 1
                            global.db.data.users[m.sender].anakkuda -= (kuda * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kuda kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktuk}* lagi`)
            break
        case 'serigala':
            if (serigala == 0) return m.reply('*Kamu belum memiliki Pet Serigala*')
            if (serigala == 15) return m.reply('*Pet kamu dah lvl max*')
            let __waktus = (new Date - global.db.data.users[m.sender].ramuanserigalalast)
            let _waktus = (600000 - __waktus)
            let waktus = clockString(_waktus)
            if (new Date - global.db.data.users[m.sender].ramuanserigalalast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakserigala += 200
                    global.db.data.users[m.sender].ramuanserigalalast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Serigala*', m)
                    }, timela)
                    if (serigala > 0) {
                        let naiklvl = ((serigala * 10000) - 1)
                        if (global.db.data.users[m.sender].anakserigala > naiklvl) {
                            global.db.data.users[m.sender].serigala += 1
                            global.db.data.users[m.sender].anakserigala -= (serigala * 10000)
                            conn.reply(m.chat, `*Selamat Pet Serigala kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktus}* lagi`)
            break
        case 'naga':
            if (naga == 0) return m.reply('*Kamu belum memiliki Pet naga*')
            if (naga == 20) return m.reply('*Pet kamu dah lvl max*')
            let __waktug = (new Date - global.db.data.users[m.sender].ramuannagalast)
            let _waktug = (600000 - __waktug)
            let waktug = clockString(_waktug)
            if (new Date - global.db.data.users[m.sender].ramuannagalast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anaknaga += 200
                    global.db.data.users[m.sender].ramuannagalast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Naga*', m)
                    }, timega)
                    if (naga > 0) {
                        let naiklvl = ((naga * 10000) - 1)
                        if (global.db.data.users[m.sender].anaknaga > naiklvl) {
                            global.db.data.users[m.sender].naga += 1
                            global.db.data.users[m.sender].anaknaga -= (naga * 10000)
                            conn.reply(m.chat, `*Selamat Pet Naga kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktug}* lagi`)
            break 
      case 'kyubi':
            if (kyubi == 0) return m.reply('*Kamu belum memiliki Pet kyubi*')
            if (kyubi == 20) return m.reply('*Pet kamu dah lvl max*')
            let __waktuyu = (new Date - global.db.data.users[m.sender].ramuankyubilast)
            let _waktuyu = (600000 - __waktuyu)
            let waktuyu = clockString(_waktuyu)
            if (new Date - global.db.data.users[m.sender].ramuankyubilast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakkyubi += 200
                    global.db.data.users[m.sender].ramuankyubilast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Kyubi*', m)
                    }, timebi)
                    if (kyubi > 0) {
                        let naiklvl = ((kyubi * 10000) - 1)
                        if (global.db.data.users[m.sender].anakkyubi > naiklvl) {
                            global.db.data.users[m.sender].kyubi += 1
                            global.db.data.users[m.sender].anakkyubi -= (kyubi * 10000)
                            conn.reply(m.chat, `*Selamat Pet Kyubi kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktuyu}* lagi`)
            break 
      case 'centaur':
            if (centaur == 0) return m.reply('*Kamu belum memiliki Pet centaur*')
            if (centaur == 20) return m.reply('*Pet kamu dah lvl max*')
            let __waktuur = (new Date - global.db.data.users[m.sender].ramuancentaurlast)
            let _waktuur = (600000 - __waktuur)
            let waktuur = clockString(_waktuur)
            if (new Date - global.db.data.users[m.sender].ramuancentaurlast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakcentaur += 200
                    global.db.data.users[m.sender].ramuancentaurlast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Centaur*', m)
                    }, timeur)
                    if (centaur > 0) {
                        let naiklvl = ((centaur * 10000) - 1)
                        if (global.db.data.users[m.sender].anakcentaur > naiklvl) {
                            global.db.data.users[m.sender].centaur += 1
                            global.db.data.users[m.sender].anakcentaur -= (centaur * 10000)
                            conn.reply(m.chat, `*Selamat Pet Centaur kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktuur}* lagi`)
            break 
         case 'phonix':
            if (phonix == 0) return m.reply('*Kamu belum memiliki Pet Phonix*')
            if (phonix == 15) return m.reply('*Pet kamu dah lvl max*')
            let __waktux = (new Date - global.db.data.users[m.sender].ramuanphonixlast)
            let _waktux = (600000 - __waktux)
            let waktux = clockString(_waktux)
            if (new Date - global.db.data.users[m.sender].ramuanphonixlast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakphonix += 200
                    global.db.data.users[m.sender].ramuanphonixlast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Phonix*', m)
                    }, timenix)
                    if (phonix > 0) {
                        let naiklvl = ((phonix * 10000) - 1)
                        if (global.db.data.users[m.sender].anakphonix > naiklvl) {
                            global.db.data.users[m.sender].phonix += 1
                            global.db.data.users[m.sender].anakphonix -= (phonix * 10000)
                            conn.reply(m.chat, `*Selamat Pet Phonix kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktux}* lagi`)
            break
        case 'griffin':
            if (griffin == 0) return m.reply('*Kamu belum memiliki Pet Griffin*')
            if (griffin == 15) return m.reply('*Pet kamu dah lvl max*')
            let __waktufin = (new Date - global.db.data.users[m.sender].ramuangriffinlast)
            let _waktufin = (600000 - __waktufin)
            let waktufin = clockString(_waktufin)
            if (new Date - global.db.data.users[m.sender].ramuangriffinlast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakgriffin += 200
                    global.db.data.users[m.sender].ramuangriffinlast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Griffin*', m)
                    }, timefin)
                    if (griffin > 0) {
                        let naiklvl = ((griffin * 10000) - 1)
                        if (global.db.data.users[m.sender].anakgriffin > naiklvl) {
                            global.db.data.users[m.sender].griffin += 1
                            global.db.data.users[m.sender].anakgriffin -= (griffin * 10000)
                            conn.reply(m.chat, `*Selamat Pet Greffin kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktufin}* lagi`)
            break
        case 'kucing':
            if (kucing == 0) return m.reply('*Kamu belum memiliki Pet Kucing*')
            if (kucing == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktu = (new Date - global.db.data.users[m.sender].ramuankucinglast)
            let _waktu = (600000 - __waktu)
            let waktu = clockString(_waktu)
            if (new Date - global.db.data.users[m.sender].ramuankucinglast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].anakkucing += 200
                    global.db.data.users[m.sender].ramuankucinglast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan pet *Kucing*', m)
                    }, timecing)
                    if (kucing > 0) { 
                        let naiklvl = ((kucing * 1000) - 1)
                        if (global.db.data.users[m.sender].anakkucing > naiklvl) {
                            global.db.data.users[m.sender].kucing += 1
                            global.db.data.users[m.sender].anakkucing -= (kucing * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kucing kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah meminum ramuan, coba beberapa *${waktu}* lagi`)
            break
        case 'hero':
            if (hero == 0) return m.reply('*Kamu belum memiliki Hero*')
            if (hero == 100) return m.reply('*Hero kamu dah lvl max*')
            let __waktuher = (new Date - global.db.data.users[m.sender].ramuanherolast)
            let _waktuher = (600000 - __waktuher)
            let waktuher = clockString(_waktuher)
            if (new Date - global.db.data.users[m.sender].ramuanherolast > 600000) {
                if (global.db.data.users[m.sender].ramuan > 0) {
                    global.db.data.users[m.sender].ramuan -= 1
                    global.db.data.users[m.sender].exphero += 100
                    global.db.data.users[m.sender].ramuanherolast = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi ramuan kepada ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi ramuan *Hero*', m)
                    }, timeher)
                    if (hero > 0) { 
                        let naiklvl = ((hero * 500) - 1)
                        if (global.db.data.users[m.sender].exphero > naiklvl) {
                            global.db.data.users[m.sender].hero += 1
                            global.db.data.users[m.sender].exphero -= (kucing * 500)
                            conn.reply(m.chat, `*Selamat Hero kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Ramuan hero kamu tidak cukup`)
            } else m.reply(`Hero kamu sudah meminum ramuan, coba beberapa *${waktuher}* lagi`)
            break
        default:
            return conn.reply(m.chat, `${usedPrefix}ramuan [hero | kucing | rubah | kuda | naga | centaur | phonix | serigala]\nContoh penggunaan: *${usedPrefix}ramuan kucing*`, m)
    }
}
handler.help = ['ramuan [pet type]']
handler.tags = ['rpg']
handler.command = /^(ramuan)$/i
handler.limit = true
handler.group = true

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
