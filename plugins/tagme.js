let handler = async (m) => {
  m.reply(`@${m.sender.split`@`[0]}`)
}

handler.help = ['tagme']
handler.tags = ['group']
handler.command = /^tagme$/i
handler.group = true

module.exports = handler
