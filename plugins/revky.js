let handler = async m => m.reply(`iya ka, ada apa?`.trim()) 

handler.help = ['revky']
handler.tags = ['revky']
handler.command = /^(revky)$/i
handler.customPrefix = /^(revky|re|rev|revk|revky|rep|repk|repki|refky|revki)$/i
handler.limit = true
handler.group = true
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    conn.sendButton(m.chat, text.trim(), 'Made with ♡ RevkyRama!', null, [['iya, ada apa ka?', '.Iya, Ada Apa Ka'], m)
module.exports = handler
