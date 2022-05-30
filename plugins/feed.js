let handler = async (m, { conn, args, usedPrefix, command }) => {
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
    let timeher= 600000
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
            let __waktur = (new Date - global.db.data.users[m.sender].rubahlastclaim)
            let _waktur = (600000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - global.db.data.users[m.sender].rubahlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakrubah += 20
                    global.db.data.users[m.sender].rubahlastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi makan pet *Rubah*\nSaya lapar tuan..', m)
                    }, timebah)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 1000) - 1)
                        if (global.db.data.users[m.sender].anakrubah > naiklvl) {
                            global.db.data.users[m.sender].rubah += 1
                            global.db.data.users[m.sender].anakrubah -= (rubah * 1000)
                            conn.reply(m.chat, `*Selamat Pet Rubah kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktur}* lagi`)
            break
        case 'kuda':
            if (kuda == 0) return m.reply('*Kamu belum memiliki Pet Kuda*')
            if (kuda == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktuk = (new Date - global.db.data.users[m.sender].kudalastclaim)
            let _waktuk = (600000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - global.db.data.users[m.sender].kudalastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakkuda += 20
                    global.db.data.users[m.sender].kudalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi makan pet *Kuda*\nSaya lapar tuan..', m)
                    }, timeda)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 1000) - 1)
                        if (global.db.data.users[m.sender].anakkuda > naiklvl) {
                            global.db.data.users[m.sender].kuda += 1
                            global.db.data.users[m.sender].anakkuda -= (kuda * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kuda kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuk}* lagi`)
            break
        case 'serigala':
            if (serigala == 0) return m.reply('*Kamu belum memiliki Pet Serigala*')
            if (serigala == 15) return m.reply('*Pet kamu dah lvl max*')
            let __waktus = (new Date - global.db.data.users[m.sender].serigalalastclaim)
            let _waktus = (600000 - __waktus)
            let waktus = clockString(_waktus)
            if (new Date - global.db.data.users[m.sender].serigalalastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakserigala += 20
                    global.db.data.users[m.sender].serigalalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi makan pet *Serigala*\nSaya lapar tuan..', m)
                    }, timela)
                    if (serigala > 0) {
                        let naiklvl = ((serigala * 10000) - 1)
                        if (global.db.data.users[m.sender].anakserigala > naiklvl) {
                            global.db.data.users[m.sender].serigala += 1
                            global.db.data.users[m.sender].anakserigala -= (serigala * 10000)
                            conn.reply(m.chat, `*Selamat Pet Serigala kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktus}* lagi`)
            break
        case 'naga':
            if (naga == 0) return m.reply('*Kamu belum memiliki Pet naga*')
            if (naga == 20) return m.reply('*Pet kamu dah lvl max*')
            let __waktug = (new Date - global.db.data.users[m.sender].nagalastclaim)
            let _waktug = (600000 - __waktug)
            let waktug = clockString(_waktug)
            if (new Date - global.db.data.users[m.sender].nagalastclaim > 600000) {
                if (global.db.data.users[m.sender].makanannaga > 0) {
                    global.db.data.users[m.sender].makanannaga -= 1
                    global.db.data.users[m.sender].anaknaga += 20
                    global.db.data.users[m.sender].nagalastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi makan pet *Naga*\nSaya lapar tuan..', m)
                    }, timega)
                    if (naga > 0) {
                        let naiklvl = ((naga * 10000) - 1)
                        if (global.db.data.users[m.sender].anaknaga > naiklvl) {
                            global.db.data.users[m.sender].naga += 1
                            global.db.data.users[m.sender].anaknaga -= (naga * 10000)
                            conn.reply(m.chat, `*Selamat Pet Naga kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktug}* lagi`)
            break 
      case 'kyubi':
            if (kyubi == 0) return m.reply('*Kamu belum memiliki Pet kyubi*')
            if (kyubi == 20) return m.reply('*Pet kamu dah lvl max*')
            let __waktuyu = (new Date - global.db.data.users[m.sender].kyubilastclaim)
            let _waktuyu = (600000 - __waktuyu)
            let waktuyu = clockString(_waktuyu)
            if (new Date - global.db.data.users[m.sender].kyubilastclaim > 600000) {
                if (global.db.data.users[m.sender].makanankyubi > 0) {
                    global.db.data.users[m.sender].makanankyubi -= 1
                    global.db.data.users[m.sender].anakkyubi += 20
                    global.db.data.users[m.sender].kyubilastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi makan pet *Kyubi*\nSaya lapar tuan..', m)
                    }, timebi)
                    if (kyubi > 0) {
                        let naiklvl = ((kyubi * 10000) - 1)
                        if (global.db.data.users[m.sender].anakkyubi > naiklvl) {
                            global.db.data.users[m.sender].kyubi += 1
                            global.db.data.users[m.sender].anakkyubi -= (kyubi * 10000)
                            conn.reply(m.chat, `*Selamat Pet Kyubi kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuyu}* lagi`)
            break 
      case 'centaur':
            if (centaur == 0) return m.reply('*Kamu belum memiliki Pet centaur*')
            if (centaur == 20) return m.reply('*Pet kamu dah lvl max*')
            let __waktuur = (new Date - global.db.data.users[m.sender].centaurlastclaim)
            let _waktuur = (600000 - __waktuur)
            let waktuur = clockString(_waktuur)
            if (new Date - global.db.data.users[m.sender].centaurlastclaim > 600000) {
                if (global.db.data.users[m.sender].makanancentaur > 0) {
                    global.db.data.users[m.sender].makanancentaur -= 1
                    global.db.data.users[m.sender].anakcentaur += 20
                    global.db.data.users[m.sender].centaurlastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi makan pet *Centaur*\nSaya lapar tuan..', m)
                    }, timeur)
                    if (centaur > 0) {
                        let naiklvl = ((centaur * 10000) - 1)
                        if (global.db.data.users[m.sender].anakcentaur > naiklvl) {
                            global.db.data.users[m.sender].centaur += 1
                            global.db.data.users[m.sender].anakcentaur -= (centaur * 10000)
                            conn.reply(m.chat, `*Selamat Pet Centaur kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktuur}* lagi`)
            break 
         case 'phonix':
            if (phonix == 0) return m.reply('*Kamu belum memiliki Pet Phonix*')
            if (phonix == 15) return m.reply('*Pet kamu dah lvl max*')
            let __waktux = (new Date - global.db.data.users[m.sender].phonixlastclaim)
            let _waktux = (600000 - __waktux)
            let waktux = clockString(_waktux)
            if (new Date - global.db.data.users[m.sender].phonixlastclaim > 600000) {
                if (global.db.data.users[m.sender].makananphonix > 0) {
                    global.db.data.users[m.sender].makananphonix -= 1
                    global.db.data.users[m.sender].anakphonix += 20
                    global.db.data.users[m.sender].phonixlastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi makan pet *Phonix*\nSaya lapar tuan..', m)
                    }, timenix)
                    if (phonix > 0) {
                        let naiklvl = ((phonix * 10000) - 1)
                        if (global.db.data.users[m.sender].anakphonix > naiklvl) {
                            global.db.data.users[m.sender].phonix += 1
                            global.db.data.users[m.sender].anakphonix -= (phonix * 10000)
                            conn.reply(m.chat, `*Selamat Pet Phonix kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktux}* lagi`)
            break
        case 'griffin':
            if (griffin == 0) return m.reply('*Kamu belum memiliki Pet Griffin*')
            if (griffin == 15) return m.reply('*Pet kamu dah lvl max*')
            let __waktufin = (new Date - global.db.data.users[m.sender].griffinlastclaim)
            let _waktufin = (600000 - __waktufin)
            let waktufin = clockString(_waktufin)
            if (new Date - global.db.data.users[m.sender].griffinlastclaim > 600000) {
                if (global.db.data.users[m.sender].makanangriffin > 0) {
                    global.db.data.users[m.sender].makanangriffin -= 1
                    global.db.data.users[m.sender].anakgriffin += 20
                    global.db.data.users[m.sender].griffinlastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi makan pet *Griffin*\nSaya lapar tuan..', m)
                    }, timefin)
                    if (griffin > 0) {
                        let naiklvl = ((griffin * 10000) - 1)
                        if (global.db.data.users[m.sender].anakgriffin > naiklvl) {
                            global.db.data.users[m.sender].griffin += 1
                            global.db.data.users[m.sender].anakgriffin -= (griffin * 10000)
                            conn.reply(m.chat, `*Selamat Pet Greffin kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktufin}* lagi`)
            break
        case 'kucing':
            if (kucing == 0) return m.reply('*Kamu belum memiliki Pet Kucing*')
            if (kucing == 5) return m.reply('*Pet kamu dah lvl max*')
            let __waktu = (new Date - global.db.data.users[m.sender].kucinglastclaim)
            let _waktu = (600000 - __waktu)
            let waktu = clockString(_waktu)
            if (new Date - global.db.data.users[m.sender].kucinglastclaim > 600000) {
                if (global.db.data.users[m.sender].makananpet > 0) {
                    global.db.data.users[m.sender].makananpet -= 1
                    global.db.data.users[m.sender].anakkucing += 20
                    global.db.data.users[m.sender].kucinglastclaim = new Date * 1
                    conn.reply(m.chat, `Berhasil memberi makan pet ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi makan pet *Kucing*\nSaya lapar tuan..', m)
                    }, timecing)
                    if (kucing > 0) { 
                        let naiklvl = ((kucing * 1000) - 1)
                        if (global.db.data.users[m.sender].anakkucing > naiklvl) {
                            global.db.data.users[m.sender].kucing += 1
                            global.db.data.users[m.sender].anakkucing -= (kucing * 1000)
                            conn.reply(m.chat, `*Selamat Pet Kucing kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Makanan pet kamu tidak cukup`)
            } else m.reply(`Pet kamu sudah kenyang, coba kasih makan *${waktu}* lagi`)
            break
        case 'hero':
            if (hero == 0) return m.reply('*Kamu belum memiliki Hero*')
            if (hero == 100) return m.reply('*hero kamu dah lvl max*')
            let __waktuher = (new Date - global.db.data.users[m.sender].herolastclaim)
            let _waktuher = (600000 - __waktuher)
            let waktuher = clockString(_waktuher)
            if (new Date - global.db.data.users[m.sender].herolastclaim > 600000) {
                if (global.db.data.users[m.sender].pillhero > 0) {
                    global.db.data.users[m.sender].pillhero -= 1
                    global.db.data.users[m.sender].exphero += 10 
                    conn.reply(m.chat, `Berhasil memberi pill ${type}`, m)
                    setTimeout(() => {
                         conn.reply(m.chat, 'Waktunya memberi makan *Hero*\nSaya lapar tuan..', m)
                    }, timeher)
                    if (hero > 0) { 
                        let naiklvl = ((hero * 500) - 1)
                        if (global.db.data.users[m.sender].exphero > naiklvl) {
                            global.db.data.users[m.sender].hero += 1
                            global.db.data.users[m.sender].exphero -= (hero * 500)
                            conn.reply(m.chat, `*Selamat hero kamu naik level*`, m)
                        }
                    }
                } else m.reply(`Pill hero kamu tidak cukup`)
            } else m.reply(`Herokamu sudah kenyang, coba kasih makan *${waktuher}* lagi`)
            break
        default:
            return conn.reply(m.chat, `${usedPrefix + command} [hero | kucing | rubah | kuda | naga | centaur | kyubi | griffin | phonix | serigala]\nContoh penggunaan: *${usedPrefix + command} kucing*`, m)
    }
}
handler.help = ['feed [pet type]']
handler.tags = ['rpg']
handler.command = /^(feed(ing)?)$/i
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
