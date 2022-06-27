let handler = async m => m.reply(`
   「 Donasi • Pulsa 」
    [0838-7974-6467]
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
