let handler = async (m, { text, usedPrefix }) => {
    let salah = `Pilihan Yang Tersedia\n\nGunting, Kertas, Batu\n\n${usedPrefix}suit gunting\n\nKasih Spasi!`
    if (!text) throw salah
    var astro = Math.random()

    if (astro < 0.34) {
        astro = 'batu' 
    } else if (astro > 0.34 && astro < 0.67) {
        astro = 'gunting' 
    } else {
        astro = 'kertas'
    }

    //menentukan rules
    if (text == astro) {
        m.reply(`Seri!\nkamu: ${text}\nBot: ${astro}`)
    } else if (text == 'batu') {
        if (astro == 'gunting') {
            global.db.data.users[m.sender].money += 10000
            m.reply(`Kamu Menang!\n+10000 Money\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'gunting') {
        if (astro == 'kertas') {
            global.db.data.users[m.sender].money += 10000
            m.reply(`Kamu Menang!\n+10000 Money\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nBot: ${astro}`)
        }
    } else if (text == 'kertas') {
        if (astro == 'batu') {
            global.db.data.users[m.sender].money += 10000
            m.reply(`Kamu Menang! \n+10000 Money\nKamu: ${text}\nBot: ${astro}`)
        } else {
            m.reply(`Kamu Kalah!\nKamu: ${text}\nBot: ${astro}`)
        }
    } else {
        throw salah
    }
}
handler.help = ['suit']
handler.tags = ['game']
handler.command = /^(suit)$/i
handler.group = true
handler.register = true
handler.limit = true

module.exports = handler
