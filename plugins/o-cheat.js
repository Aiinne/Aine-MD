let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, isOwner, DevMode }) => {
    if (!isOwner) throw 'Ngapain Make Cheat ???'
    let type = (args[0] || '').toLowerCase()
    let cht = (args[0] || '').toLowerCase()
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [who]
    let cok = `
*[ LIST CHEAT  ]*
• Exp\n• Level\n• Limit
• .cheat exp 10 @62xx
`.trim()
try {
       if (/cheat/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.max(parseInt(args[1]), 1) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'exp':
                            let dod = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let bcd = `Cheat XP ${dod}`.trim()
                            global.db.data.users[who].exp += count * 1
                            conn.reply(m.chat, bcd, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} XP Kedalam Database`, '0@s.whatsapp.net', `Cheat XP ${dod}`, 'status@broadcast')
break

                case 'level':
                            let did = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let ahh = `Cheat Level ${did}`.trim()
                            global.db.data.users[who].level += count * 1
                            conn.reply(m.chat, ahh, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} Level Kedalam Database`, '0@s.whatsapp.net', `Cheat Level ${did}`, 'status@broadcast')
break
                case 'limit':
                            let dud = `${pickRandom(['Berhasil', 'Sukses', 'Aktif'])}`.trim()
                            let uhh = `Cheat Limit ${dud}`.trim()
                            global.db.data.users[who].limit += count * 1
                            conn.reply(m.chat, uhh, m)
                            conn.fakeReply(m.chat, `Menambahkan ${count * 1} Limit Kedalam Database`, '0@s.whatsapp.net', `Cheat Limit ${dud}`, 'status@broadcast')
break
                default:
                    return conn.reply( m.chat, cok, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Done`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'cheat.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['cheat <jumlah>', 'cheat <jumlah> @user']
handler.tags = ['owner']
handler.register = false
handler.command = /^(cheat)$/i
handler.fail = null

handler.owner = true

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
