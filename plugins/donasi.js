let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [6281802857821]
│ •  [6281802857821]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
