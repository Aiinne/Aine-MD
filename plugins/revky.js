let handler = async m => m.reply(`
'iya ka, ada apa?'
`.trim()) 

handler.help = ['revky']
handler.tags = ['revky']
handler.command = /^revky$/i
handler.limit = true
handler.group = true
