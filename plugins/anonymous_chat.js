const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command, usedPrefix }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'skip':
        case 'stop': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
         //   if (!room) this.sendButton(m.chat, 'Kamu tidak sedang berada di anonymous chat', wm, 'Search Partner..', '.next', m) // throw 'Kamu tidak sedang berada di anonymous chat\nKetik #start\nKetik /start\nKetik !start'
        //    if (!room) throw 'Kamu tidak sedang berada di anonymous chat\nKetik #start\nKetik /start\nKetik !start'
        if (!room) {
                await this.sendButton(m.chat, 'Kamu tidak sedang berada di anonymous chat', wm, null, [['Search Partner', '/start']], m)
                throw 0
            }
           // this.send2Button(m.chat, 'Kamu telah memberhentikan chat', wm, 'Search Partner..', `${usedPrefix}start`, 'Stop..', `${usedPrefix}stop`, m)
           //m.reply('Kamu telah memberhentikan chat')
        //    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
       //     if (!room) throw 'Kamu tidak sedang berada di anonymous chat\nKetik #start\nKetik /start\nKetik !start'
            this.sendButton(m.chat, 'Kamu telah memberhentikan chat', wm, null, [['Search Partner', '/start']], m)
            let other = room.other(m.sender)
            if (other) this.sendButton(other, 'Partner telah memberhentikan chat', wm, null, [['Search Partner', '/start']], m)
           // if (other) this.send2Button(other, 'Partner meninggalkan chat', wm, 'Search Partner..', '/start',  m)
            delete this.anonymous[room.id]
            if (command === 'stop') break
        }
        case 'search':
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) throw 'Kamu masih berada di dalam anonymous chat'
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
             //   this.send2Button(room.a, 'Menemukan partner!', '© Aine', 'Next Partner..', '/skip', 'Stop..', '/stop', m)
                this.reply(room.a, 'Menemukan partner!', m)
                room.b = m.sender
                room.state = 'CHATTING'
                //this.send2Button(room.b, 'Menemukan partner!', '© Aine', 'Next Partner..', '/skip', 'Stop..', '/stop', m)
                this.reply(room.b, 'Menemukan partner!', m)
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                m.reply('Menunggu partner...')
            }
            break
        }
    }
}
handler.help = ['start', 'skip', 'stop', 'next']
handler.tags = 'anonymous'

handler.command = ['start', 'skip', 'stop', 'next', 'search']
handler.private = true

module.exports = handler
