let handler = async m => m.reply(`kenapa ka?, aku revky`.trim()) // Tambah sendiri kalo mau
handler.help = ['revky']
handler.tags = ['revky']
handler.command = /^(rev|revk|revky|repki|refki)/i

module.exports = handler
