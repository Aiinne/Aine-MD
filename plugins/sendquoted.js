async function handler(m) {
    if (!m.quoted) throw 'Reply Pesannya!!'
    let q = await this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'pesan yang anda reply tidak mengandung reply!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.help = ['q']
handler.tags = ['tools']
handler.command = /^q$/i
handler.limit = true
module.exports = handler
