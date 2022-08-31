let handler = async m => m.reply(`
_hello! world~_
`.trim()) // Tambah sendiri kalo mau
handler.command = /^october|ber|octo)$/i

module.exports = handler
