let handler = async m => m.reply('PENGEN CURI YA?!`.trim())


handler.help = ['revky']
handler.tags = ['revky']
handler.command = /^(revky)$/i
handler.limit = true
handler.group = true
module.exports = handler
