let handler = async m => m.reply('PENGEN CURI YA?!`.trim())


handler.help = ['sc']
handler.tags = ['sc']
handler.command = /^(sc)$/i
handler.limit = true
handler.group = true
module.exports = handler
