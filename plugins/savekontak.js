let handler = async(m, { text, conn, usedPrefix, command }) => {
  if (/saveme|sv(me|gua|g?w|aku)$/i.test(command)) {
     conn.sendContact(m.chat, `${m.sender.split('@')[0]}`, `${await conn.getName(m.sender)}`, m)
    }
  if (/savehe?s?|svshe|savedia|svdia$/i.test(command)) {
     try {
     let who
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
     else who = m.quoted.sender ? m.quoted.sender : m.sender
     conn.sendContact(m.chat, `${who.split('@')[0]}`, `${await conn.getName(who)}`, m)
    } catch {
      throw `@tag atau reply dia ⌤`
      }
    }
  if (/save|sv$/i.test(command)) {
     if(!text) throw `namanya?`
     try {
     let who
     if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
     else who = m.quoted.sender ? m.quoted.sender : m.sender
     conn.sendContact(m.chat, `${who.split('@')[0]}`, text, m) 
  } catch {
     conn.sendContact(m.chat, `${m.sender.split('@')[0]}`, text, m)
  }
 }
}
handler.help = ['save <@tag/reply>']
handler.tags = ['fun']
handler.command = /^sa?ve?(me|aku|aq|gua|g?w)?(he'?s?|sh?e|dia)?$/i

module.exports = handler
