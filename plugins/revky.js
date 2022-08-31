let handler = async m => m.reply(`
hello! world~
`.trim()) // Tambah sendiri kalo mau
handler.help = ['october']
handler.tags = ['octo']
handler.command = /^october)$/i

module.exports = handler
