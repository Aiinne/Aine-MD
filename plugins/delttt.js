let handler = async (m, { conn, text }) => {
	conn.game = conn.game ? conn.game : {}
	try {
		if (conn.game) {
			delete conn.game
			conn.reply(m.chat, `Berhasil delete session ttt`, m)
		} else if (conn.game) {
			m.reply(`Session ttt🎮 tidak ada`)
		} else throw '?'
	} catch (e) {
		m.reply('rusak')
	}
}
//BY RIZXYU
handler.help = ['delttt']
handler.tags = ['game']
handler.command = /^(delttt|delsesittt|delsesitt)$/i
handler.limit = true

handler.register = false
handler.fail = null

module.exports = handler