let handler = async m => m.reply(`iya ka, ada apa?`.trim()) 

handler.help = ['revky']
handler.tags = ['revky']
handler.command = /^(|revky|re|rev|revk|revky|rep|repk|repki|refky|revki|)$/i
handler.limit = true
handler.group = true
module.exports = handler
