let { MessageType, Presence } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')

async function handler(m, { command, conn, text }) {
	this.anonymous = this.anonymous ? this.anonymous : {}
	let who = m.sender
	let room = Object.values(this.anonymous).find(room => room.check(who))
	if (!room) throw 'kamu tidak berada di anonymous chat'
	let other = room.other(who)
  var name
  if (text) name = text
  else name = conn.getName(m.sender)
	var number = who.split('@')[0]
	let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
END:VCARD`

	this.reply(m.chat, `Kamu berhasil mengirim kontak kepada partner mu..`, m)
	if (other) this.reply(other, `Partner mengirimkan kontak kepadamu`, m)
	if (other) this.sendMessage(other, {
            contacts: {
                displayName: name,
                contacts: [{ vcard }]
            }
        })
	//if (other) this.sendContact(other, number, name, m) 
}
handler.help = ['sendkontak']
handler.tags = 'anonymous'
handler.command = /^(sendkontak)$/i
handler.private = true
handler.fail = null
module.exports = handler


